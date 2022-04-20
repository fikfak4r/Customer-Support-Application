using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using CustomerSupport.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;

namespace CustomerSupport.Processes
{
    class PaymentDetailBizPrcs
    {

        //public static void OnItemInserted(int locID, int transactionID, int purchPymntDetailsID)
        //{
        //    TransactionBizPrcs.UpdateTotalAmountPaid(transactionID, CalcTotalAmountPaid(transactionID));
        //}


        //public static void OnItemUpdated(int locID, int transactionID)
        //{
        //    TransactionBizPrcs.UpdateTotalAmountPaid(transactionID, CalcTotalAmountPaid(transactionID));
        //}



        public static decimal GetAmountLeft(IDbConnection connection, int transactionID, int? purchPaymentDltsID, FieldValue amountPaid)
        {

            decimal amountLeft = 0;

            //Here we want to get the last record that was entered for this Transaction thread
            decimal count = 0;
            //String query_1 = String.Format("SELECT Count(PurchPymntDetailsID) as count FROM TransactionPaymentsDetails WHERE TransactionID = {0}", transactionID);
            count = connection.Count<PaymentDetailRow>(new Criteria("TransactionId") == transactionID);


            if (amountPaid.Modified && count == 2)
            {
                decimal ttlAmount = 0;
                //String query_2 = String.Format("SELECT TotalAmount FROM TransactionPaymentsDetails WHERE TransactionID = {0} AND IsTotalAmountRow = 1", transactionID);
                PaymentDetailRow ppdr = connection.Single<PaymentDetailRow>(new Criteria("TransactionId") == transactionID & new Criteria("IsTotalAmountRow") == 1);

                if (ppdr != null)
                {
                    ttlAmount = ppdr.TotalAmount.Value;
                }

                amountLeft = ttlAmount - Convert.ToInt32(amountPaid.NewValue);
            }
            else if(amountPaid.Modified)
            {

                decimal ttlAmount = 0;
                String query_2 = String.Format("SELECT SUM(AmountPaid) FROM TransactionPaymentsDetails WHERE TransactionID = {0} AND PurchPymntDetailsID != {1}  AND IsTotalAmountRow != 1", transactionID, purchPaymentDltsID.Value);
                SqlText sql_1 = new SqlText(connection, query_2);
                
                    ttlAmount = Convert.ToInt32(sql_1.ExecuteScalar());


                    amountLeft = TransactionDetailBizPrcs.CalcTransactionTotalAmount(connection, transactionID).Value - (ttlAmount + Convert.ToInt32(amountPaid.NewValue));   
            }
            else
            {//Controll only comes in here when a new record is to be created
                String query = String.Format(@"SELECT TotalAmount, AmountLeft, IsTotalAmountRow FROM TransactionPaymentsDetails WHERE PurchPymntDetailsID = 
                                          (SELECT Max(PurchPymntDetailsID) FROM TransactionPaymentsDetails WHERE TransactionID = {0})", transactionID);

                SqlText sql = new SqlText(connection, query);
                
                    using (IDataReader reader = sql.ExecuteReader())
                    {
                    if (reader.Read())
                    {


                        if (reader.GetBoolean(2))
                        {//i.e this is the TotalAmountRow
                            amountLeft = reader.GetDecimal(0) - Convert.ToDecimal(amountPaid.Value);
                        }
                        else
                        {
                            amountLeft = reader.GetDecimal(1) - Convert.ToDecimal(amountPaid.Value);
                        }

                    }
                }
            }

            if (amountLeft == 0)
            {
                decimal? totalAmount = TransactionDetailBizPrcs.CalcTransactionTotalAmount(connection, transactionID);
                if (totalAmount != null)
                    amountLeft = totalAmount.Value - Convert.ToDecimal(amountPaid.Value);
            }

            return amountLeft;
        }



        public static decimal CalcTotalAmountPaid(IDbConnection connection, int transactionID)
        {

            decimal totalAmount = 0;

            String query = String.Format("SELECT SUM(AmountPaid) as Amt FROM TransactionPaymentsDetails WHERE TransactionID = {0}", transactionID);
            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }

            return totalAmount;
        }

        /// <summary>
        /// Returns the Aggregate of the AmountLeft for the TransactionID
        /// </summary>
        /// <param name="transactionID"></param>
        /// <returns></returns>
        public static decimal GetSumTotalAmountLeft(IDbConnection connection, int transactionID)
        {

            decimal totalAmount = 0;

            String query = String.Format("SELECT SUM(AmountLeft) as Amt FROM TransactionPaymentsDetails WHERE TransactionID = {0}", transactionID);
            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }
            

            return totalAmount;

        }

        public static decimal GetAmountLeft(IDbConnection connection, int transactionID)
        {
            return TransactionDetailBizPrcs.CalcTransactionTotalAmount(connection, transactionID).Value - CalcTotalAmountPaid(connection, transactionID);
        }

        public static bool IsTotalAmountCreated(IDbConnection connection, int transactionID)
        {
            String query = String.Format("SELECT Count(TransactionID) as count FROM TransactionPaymentsDetails WHERE TransactionID = {0}", transactionID);

            int count = connection.Count<PaymentDetailRow>(new Criteria("TransactionId") == transactionID);

            if (count >= 1)
            {
                return true;
            }

            return false;


        }

        public static int CreateTotalAmountRow(IDbConnection connection, int transactionID, decimal totalAmount)
        {
            PaymentDetailRow ppd = new PaymentDetailRow();
            ppd.TransactionId = transactionID;
            ppd.TotalAmount = totalAmount;
            ppd.IsTotalAmountRow = true;
            ppd.Date = DateTime.Now;

            return (int)connection.InsertAndGetID<PaymentDetailRow>(ppd);

        }

        private static int CreatePaymentDetailRecord(IDbConnection connection, int transactionID, decimal amountPaid, decimal totalAmountLeft)
        {
            PaymentDetailRow ppd = new PaymentDetailRow();
            ppd.TransactionId = transactionID;
            ppd.AmountPaid = amountPaid;
            ppd.AmountLeft = totalAmountLeft;
            ppd.IsTotalAmountRow = false;
            ppd.Date = DateTime.Now;


            return (int)connection.InsertAndGetID<PaymentDetailRow>(ppd);
        }
        /// <summary>
        /// This method get the TotalAmount in ReceiveTransaction and sets it as that of TransactionPaymentsDetails's TotalAmount column
        /// and the syncs(recalculculates) the AmountLeft for records of TransactionPaymentsDetails for this Transaction accordingly
        /// It also creates the TotalAmount Row is has not yet been created
        /// </summary>
        /// <param name="transactionID"></param>
        public static void SyncPayment(IDbConnection connection, int transactionID)
        {
            
            decimal? totalAmount = TransactionDetailBizPrcs.CalcTransactionTotalAmount(connection, transactionID);

            if (!IsTotalAmountCreated(connection, transactionID) && totalAmount != null)
                CreateTotalAmountRow(connection, transactionID, totalAmount.Value);


            if (totalAmount != null)
            {

                PaymentDetailRow ppd = connection.Single<PaymentDetailRow>(new Criteria("TransactionId") == transactionID && new Criteria("IsTotalAmountRow") == 1);

                if (ppd != null)
                {
                    ppd.TotalAmount = totalAmount;
                    connection.UpdateById<PaymentDetailRow>(ppd);

                    string qry = String.Format("TransactionID = {0} AND IsTotalAmountRow != 1", transactionID);
                    var pplFlds = PaymentDetailRow.Fields;
                    List<PaymentDetailRow> ppdList = connection.List<PaymentDetailRow>(x =>
                    {
                        x.Where(new Criteria(pplFlds.TransactionId) == transactionID && new Criteria(pplFlds.IsTotalAmountRow) == 1)
                        .OrderBy(pplFlds.PaymentDetailId);
                    });

                    SyncPayment(connection, ppdList, totalAmount);
                }

            }

        }



        /// <summary>
        /// The PreventDefault method must be called before calling this method.
        /// This method creates an object of TransactionPaymentsDetails and Inserts it into the database and returns the ID.
        /// It will also create the TotalAmount Record if it happens to be the first payment for this Transaction.
        /// </summary>
        /// <param name="transactionID"></param>
        /// <param name="amountPaid"></param>
        public static int OnBeforeItemInserted(IDbConnection connection, int transactionID, decimal amountPaid)
        {
            //Here we want to get the last record that was entered for this Transaction thread
            String query = String.Format(@"SELECT TotalAmount, AmountLeft, IsTotalAmountRow FROM TransactionPaymentsDetails WHERE PurchPymntDetailsID = 
                                        (SELECT Max(PurchPymntDetailsID) FROM TransactionPaymentsDetails WHERE TransactionID = {0})", transactionID);

            SqlText sql = new SqlText(connection, query);

            
                using(IDataReader reader  = sql.ExecuteReader())
                {
                if (reader.Read())
                {

                    decimal totalAmountLeft = 0;
                    if (reader.GetBoolean(2))
                    {//i.e this is the TotalAmountRow
                        totalAmountLeft = reader.GetDecimal(0) - amountPaid;
                    }
                    else
                    {
                        totalAmountLeft = reader.GetDecimal(1) - amountPaid;
                    }



                    return CreatePaymentDetailRecord(connection, transactionID, amountPaid, totalAmountLeft);
                }
                else
                {

                    decimal? totalAmount = TransactionDetailBizPrcs.CalcTransactionTotalAmount(connection, transactionID);
                    if (totalAmount != null)
                    {
                        CreateTotalAmountRow(connection, transactionID, totalAmount.Value);
                        return CreatePaymentDetailRecord(connection, transactionID, amountPaid, (totalAmount.Value - amountPaid));
                    }
                    else
                    {
                        throw new Exception("There has not been any Transaction");
                    }

                }
                        
                
            }
        }

        /// <summary>
        /// Syncs payment
        /// </summary>
        /// <param name="transactionID"></param>
        /// <param name="purchPaymntDltID"></param>
        public static void OnItemUpdated(IDbConnection connection, int transactionID, int purchPaymntDltID)
        {
            //
            var ppdDFlds = PaymentDetailRow.Fields;

            List<PaymentDetailRow> ppdList = connection.List<PaymentDetailRow>(
                x =>
                {
                    x.Where(new Criteria(ppdDFlds.PaymentDetailId) >= purchPaymntDltID)
                        .OrderBy(ppdDFlds.PaymentDetailId, desc: true);

                });

            String query = String.Format(@"SELECT Top 1 TotalAmount, AmountLeft, IsTotalAmountRow FROM TransactionPaymentsDetails WHERE PurchPymntDetailsID < {0} ORDER BY PurchPymntDetailsID DESC", purchPaymntDltID);
                                                            
            decimal amountLeft = 0;
            SqlText sql = new SqlText(connection, query);
            

                using(IDataReader reader = sql.ExecuteReader())
                {
                reader.Read();
                if (!Convert.ToBoolean(reader["IsTotalAmountRow"]))
                {
                    amountLeft = Convert.ToDecimal(reader["AmountLeft"]);
                }
                else
                {
                    amountLeft = Convert.ToDecimal(reader["TotalAmount"]);
                }
            }

            SyncPayment(connection, ppdList, amountLeft);


        }

        private static void SyncPayment(IDbConnection connection, List<PaymentDetailRow> ppdList, decimal? totalAmount)
        {
            if (ppdList != null)
            {
                for (int i = 0; i < ppdList.Count; i++)
                {
                    //The result of this subtraction being AmountLeft
                    totalAmount = totalAmount - ppdList[i].AmountPaid.Value;
                    ppdList[i].AmountLeft = totalAmount;
                    connection.UpdateById<PaymentDetailRow>(ppdList[i]);
                }
            }
        }

    }
}
