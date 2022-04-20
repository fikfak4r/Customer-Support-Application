using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using CustomerSupport.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;

namespace CustomerSupport.Processes
{
    class TransactionDetailBizPrcs 
    {


        public static TransactionDetailRow GetTransactionDetail(IDbConnection connection, int id)
        {
            return connection.ById<TransactionDetailRow>(id);
        }


        /// <summary>
        /// Updates the TotalAmount by adding this amount to the Previous
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="transactionID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        /// <param name="quantity"></param>
        public static void OnItemInserted(IDbConnection connection, int locID, int transactionID, int productID, int uomAndPriceID, decimal quantity)
        {

            //Transaction transaction = Transaction.SelectSingle(transactionID);
            //transaction.HasTransactionDetail = true;
            //transaction.Update();
            //TransactionBizPrcs.UpdateTotalAmount(transactionID, CalcTransactionTotalAmount(transactionID).Value);
            //StockBizPrcs.InsertUpdateItem(locID, productID, UnitOfMeasurementBizPrcs.CalcQuantity(locID, uomAndPriceID, quantity, UnitOfMeasurement.TransactionUOM));

        }


        public static void OnItemUpdated(IDbConnection connection, int locID, int transactionID, int productID, int uomAndPriceID, decimal quantity)
        {
            //OnItemInserted(locID, transactionID, productID, uomAndPriceID, quantity);
        }


        /// <summary>
        /// This methods checks
        /// if the TransactionDetail deleted happens to be the Last. If it is, it then Deletes the record it refrences 
        /// in the Transaction Table and returns a true value. Otherwise, it returns a false.
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="transactionID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        //public static bool OnItemDeleted(IDbConnection connection, int locID, int transactionDetailsID, int transactionID, int productID, int uomAndPriceID)
        //{
        //    ReceiveTransactionRow recTransaction = connection.Single<ReceiveTransactionRow>(new Criteria("TransactionDetailID") == transactionDetailsID);

        //    //ReceiveTransaction recTransaction = ReceiveTransaction.SelectSingle(string.Format("TransactionDetailID = {0}", transactionDetailsID));
        //    if (!recTransaction.IsReceived.Value)
        //        //recTransaction.Delete();
        //        connection.DeleteById<ReceiveTransactionRow>(recTransaction);


        //    bool boolVar = false;
        //    object obj = null;

        //    obj = connection.Count<TransactionDetailRow>(new Criteria("TransactionId") == transactionID);


        //    if (obj == null || obj != null && Convert.ToInt32(obj) == 0)
        //    {
        //        int transactionPymentsDtlsCount = 0, recPurchsCount = 0, rtnOutwardsCount = 0, unstockCount = 0;

        //        transactionPymentsDtlsCount = connection.Count<TransactionPaymentDetailsRow>(new Criteria("TransactionId") == transactionID);


        //        recPurchsCount = connection.Count<ReceiveTransactionRow>(new Criteria("TransactionId") == transactionID);


        //        rtnOutwardsCount = connection.Count<ReturnOutwardsDetailsRow>(new Criteria("TransactionId") == transactionID);


        //        unstockCount = connection.Count<UnstockRow>(new Criteria("TransactionId") == transactionID);



        //        if (transactionPymentsDtlsCount == 1 && recPurchsCount == 0)
        //        {

        //            string query_1 = String.Format("DELETE FROM TransactionPaymentsDetails WHERE TransactionID = {0}", transactionID);

        //            connection.Execute(query_1);
        //        }

        //        if (transactionPymentsDtlsCount == 1 && recPurchsCount == 0 && rtnOutwardsCount == 0 && unstockCount == 0)
        //        {

        //            String query_2 = String.Format("DELETE FROM Transaction WHERE TransactionID = {0}", transactionID);
        //            connection.Execute(query_2);

        //            boolVar = true;
        //        }

        //    }



        //    return boolVar;

        //}


        public decimal CalCAmount(decimal amount, decimal quantity)
        {
            return quantity * amount;
        }

        public static decimal? CalcTransactionTotalAmount(IDbConnection connection, int transactionID)
        {

            decimal totalAmount = 0;
            String query = String.Format("SELECT SUM(Amount) as Amt FROM TransactionsDetails WHERE TransactionID = {0}", transactionID);
            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }
            


            return totalAmount;
        }


        /// <summary>
        /// This methods gets all PurchaseDetails record and add it to Stock and sets the Purchase as FullyReceived
        /// </summary>
        /// <param name="locationID"></param>
        /// <param name="salesID"></param>
        //public static void CompletePurchase(IDbConnection connection, int locationID, int purchaseID)
        //{
        //    //List<TransactionDetail> purchList = TransactionDetail.Select(String.Format("TransactionID = {0} AND IsReceived = 0", purchaseID));

        //    List<TransactionDetailRow> purchList = connection.List<TransactionDetailRow>(new Criteria("TransactionId") == purchaseID);

        //    for (int x = 0; x < purchList.Count; x++)
        //    {
        //        ReceiveTransactionBizPrcs.CreateItem(connection, purchList[x].TransactionDetailId.Value,
        //            purchList[x].TransactionId.Value, true, purchList[x].Amount.Value, purchList[x].UomAndPriceId.Value,
        //            purchList[x].ProductId.Value, purchList[x].Quantity.Value, purchList[x].UnitPrice.Value, (decimal)purchList[x].Discount.Value);

        //        StockBizPrcs.InsertUpdateItem(connection, locationID, purchList[x].ProductId.Value, purchList[x].UomAndPriceId.Value, purchList[x].Quantity.Value, UnitOfMeasurement.TransactionUOM);
        //    }

        //    ReceiveTransactionBizPrcs.SetAsFullyReceived(connection, locationID, purchaseID);

        //}


//        public static void ReOpen(IDbConnection connection, int locationID, int transactionID)
//        {
//            //String qry = String.Format("SELECT * FROM TransactionDetail WHERE TransactionID = {0} AND IsReceived = 1", transactionID);
//            String qry = String.Format("SELECT * FROM ReceiveTransaction WHERE TransactionID = {0}", transactionID);
//            List<ReceiveTransactionRow> rpRowList = connection.List<ReceiveTransactionRow>(new Criteria("TransactionId") == transactionID);

//            foreach (ReceiveTransactionRow rpRow in rpRowList)
//            {
//                decimal recvQty = UnitOfMeasurementBizPrcs.CalcQuantity(connection, rpRow.UomAndPriceId.Value, rpRow.Quantity.Value, UnitOfMeasurement.TransactionUOM);
//                StockBizPrcs.DeductItem(connection, locationID, rpRow.ProductId.Value, recvQty);
//            }



//            //qry = String.Format("UPDATE TransactionDetail SET IsReceived = 0 WHERE TransactionID = {0}", transactionID);
//            //using (SqlText sql = new SqlText(qry))
//            //{
//            //    sql.ExecuteNonQuery();
//            //}

//            qry = String.Format("DELETE FROM {0} WHERE TransactionID = {1}", "ReceiveTransaction", transactionID);
//            connection.Execute(qry);

//            qry = String.Format("DELETE FROM {0} WHERE TransactionID = {1}", "TransactionPaymentsDetails", transactionID);
//            connection.Execute(qry);

//            qry = String.Format("DELETE FROM {0} WHERE TransactionID = {1}", "ReturnOutwardsDetails", transactionID);
//            connection.Execute(qry);

//            qry = String.Format("DELETE FROM {0} WHERE TransactionID = {1}", "ReturnOutwardsPayments", transactionID);
//            connection.Execute(qry);

//            qry = String.Format("DELETE FROM {0} WHERE TransactionID = {1}", "Unstock", transactionID);
//            connection.Execute(qry);

//            decimal totalAmount = TransactionDetailBizPrcs.CalcTransactionTotalAmount(connection, transactionID);

//            qry = String.Format(@"UPDATE Transaction SET TotalAmount = {1}, TotalAmountPaid = 0,
//                                    TotalAmountLeft = {1}, HasTransactionDetail = 0, Status = 'Open',
//                                    IsOpen = 1, IsInProgress = 0, IsFullyReceived = 0, IsFullyPaid = 0
//                                    WHERE TransactionID = {0}", transactionID, totalAmount);
//            connection.Execute(qry);

//        }



    }



}
