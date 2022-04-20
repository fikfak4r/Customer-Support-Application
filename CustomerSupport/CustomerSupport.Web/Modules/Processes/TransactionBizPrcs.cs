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
    class TransactionBizPrcs
    {



        public static void UpdateTicketId(IDbConnection conn, int ticketId, int transactionId)
        {
                string qry = "";

           
                qry = String.Format("UPDATE Transactions Set TicketId = {0} WHERE TransactionId = {1}", ticketId, transactionId);
           

            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();
        }

        public static decimal CalcTotalAmount(decimal totalAmountPaid, decimal totalAmountLeft)
        {
            decimal calVal = totalAmountPaid + totalAmountLeft;
            return calVal;
        }

        public static decimal CalcTotalAmountLeft(decimal? totalAmount, decimal? totalAmountPaid)
        {
            decimal calVal = totalAmount.Value - totalAmountPaid.Value;
            return calVal;
        }

        public static TransactionRow OnTotalAmountChanged(TransactionRow transaction)
        {
            transaction.TotalAmountLeft = 0;
            transaction.TotalAmountPaid = 0;
            return transaction;
        }

        public static TransactionRow OnTotalAmountPaidChanged(TransactionRow transaction)
        {
            transaction.TotalAmountLeft = CalcTotalAmountLeft(transaction.TotalAmount, transaction.TotalAmountPaid);
            return transaction;
        }


        //public Transaction OnTotalAmountPaidChanged(Transaction transaction)
        //{
        //    transaction.TotalAmountLeft = CalcTotalAmountLeft(transaction.TotalAmount, transaction.TotalAmountPaid);
        //    return transaction;
        //}


        /// <summary>
        /// Updates the TotalAmount and calculates the TotalAmountLeft and Updates it too
        /// </summary>
        /// <param name="transactionID"></param>
        /// <param name="amount"></param>
        public static void UpdateTotalAmount(IDbConnection connection, int transactionID, decimal amount)
        {
            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);
            transaction.TotalAmount = amount;
            transaction.TotalAmountLeft = CalcTotalAmountLeft(amount, transaction.TotalAmountPaid);
            connection.UpdateById<TransactionRow>(transaction);
        }



        /// <summary>
        /// Updates the TotalAmountPaid and calculates the TotalAmountLeft and Updates it too
        /// </summary>
        /// <param name="transactionID"></param>
        /// <param name="totalAmtPaid"></param>
        public static void UpdateTotalAmountPaid(IDbConnection connection, int transactionID, decimal totalAmtPaid)
        {
            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);
            transaction.TotalAmountPaid = totalAmtPaid;
            transaction.TotalAmountLeft = CalcTotalAmountLeft(transaction.TotalAmount, totalAmtPaid);
            connection.UpdateById<TransactionRow>(transaction);
        }

        public static void SyncAmounts(IDbConnection connection, int transactionID)
        {
            decimal ttlAmt = TransactionDetailBizPrcs.CalcTransactionTotalAmount(connection, transactionID).Value;
            decimal ttlAmtPaid = PaymentDetailBizPrcs.CalcTotalAmountPaid(connection, transactionID);


            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);
            transaction.TotalAmount = ttlAmt;
            transaction.TotalAmountPaid = ttlAmtPaid;
            transaction.TotalAmountLeft = ttlAmt - ttlAmtPaid;
            connection.UpdateById<TransactionRow>(transaction);
        }


        //public static void SetTotalAmountOnAllTransactionReceived(IDbConnection connection, int transactionID)
        //{
        //    TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

        //    decimal totalAmount = ReceiveTransactionBizPrcs.GetTotalAmountOfReceived(connection, transactionID).Value;

        //    if (totalAmount > transaction.TotalAmount)
        //    {
        //        transaction.TotalAmount = totalAmount;
        //        if (transaction.TotalAmountPaid != 0)
        //            transaction.TotalAmountLeft = totalAmount - transaction.TotalAmountPaid;
        //        else
        //            transaction.TotalAmountLeft = totalAmount;

        //        connection.UpdateById<TransactionRow>(transaction);

        //    }
        //    else
        //    {
        //        decimal transactionTotalAmount = TransactionDetailsBizPrcs.CalcTransactionTotalAmount(connection, transactionID);
        //        transaction.TotalAmount = transactionTotalAmount;
        //        if (transaction.TotalAmountPaid != 0)
        //            transaction.TotalAmountLeft = transactionTotalAmount - transaction.TotalAmountPaid;
        //        else
        //            transaction.TotalAmountLeft = transactionTotalAmount;

        //        connection.UpdateById<TransactionRow>(transaction);

        //    }
        //}



        /// <summary>
        /// Actions include InProgress, FullyReceived, FullyPaid
        /// </summary>
        /// <param name="transactionID"></param>
        /// <param name="action">Actions include InProgress, FullyReceived, FullyPaid</param>
        public static void SetStatus(IDbConnection connection, int transactionID, string action)
        {
            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            switch (action)
            {
                case "InProgress":
                    transaction.IsFullyPaid = false;
                    transaction.IsFullyReceived = false;
                    transaction.IsOpen = false;
                    transaction.IsInProgress = true;

                    transaction.Status = "In Progress";
                    connection.UpdateById<TransactionRow>(transaction);

                    break;
                case "FullyReceived":
                    if (transaction.IsFullyPaid.Value)
                    {
                        transaction.IsFullyReceived = true;
                        transaction.IsOpen = false;
                        transaction.IsInProgress = false;
                        transaction.Status = "Paid";
                    }
                    else
                    {
                        transaction.IsFullyReceived = true;
                        transaction.IsOpen = false;
                        transaction.IsInProgress = false;
                        transaction.Status = "Fully Received";
                    }
                    connection.UpdateById<TransactionRow>(transaction);
                    break;
                case "FullyPaid":
                    if (transaction.IsFullyReceived.Value)
                    {
                        transaction.IsOpen = false;
                        transaction.IsInProgress = false;
                        transaction.IsFullyPaid = true;
                        transaction.Status = "Paid";
                    }
                    else
                    {
                        transaction.IsOpen = false;
                        transaction.IsInProgress = true;
                        transaction.IsFullyPaid = true;
                        transaction.Status = "In Progress";
                    }
                    connection.UpdateById<TransactionRow>(transaction);
                    break;
                default:
                    throw new Exception("Incorrect Action was passed");

            }

        }


        /// <summary>
        /// Actions include InProgress, FullyReceived, FullyPaid; Pass a value of true to setFullyReceivedFalse to set it false
        /// </summary>
        /// <param name="transactionID"></param>
        /// <param name="action">Actions include InProgress, FullyReceived, FullyPaid</param>
        public static void SetStatus(IDbConnection connection, int transactionID, string action, bool setFullyReceivedFalse)
        {
            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);
            switch (action)
            {
                case "InProgress":
                    transaction.IsFullyPaid = false;
                    transaction.IsFullyReceived = false;
                    transaction.IsOpen = false;
                    transaction.IsInProgress = true;
                    connection.UpdateById<TransactionRow>(transaction);
                    transaction.Status = "In Progress";
                    connection.UpdateById<TransactionRow>(transaction);

                    break;
                case "FullyReceived":
                    if (transaction.IsFullyPaid.Value && setFullyReceivedFalse != true)
                    {
                        transaction.IsFullyReceived = true;
                        transaction.IsOpen = false;
                        transaction.IsInProgress = false;
                        transaction.Status = "Paid";
                    }
                    else
                    {
                        transaction.IsFullyReceived = true;
                        transaction.IsOpen = false;
                        transaction.IsInProgress = false;
                        transaction.IsFullyPaid = false;
                        transaction.Status = "Fully Received";
                    }
                    connection.UpdateById<TransactionRow>(transaction);

                    break;
                case "FullyPaid":
                    if (transaction.IsFullyReceived.Value)
                    {
                        transaction.IsOpen = false;
                        transaction.IsInProgress = false;
                        transaction.IsFullyPaid = true;
                        transaction.Status = "Paid";
                    }
                    else
                    {
                        transaction.IsOpen = false;
                        transaction.IsInProgress = true;
                        transaction.IsFullyPaid = true;
                        transaction.Status = "In Progress";
                    }
                    connection.UpdateById<TransactionRow>(transaction);

                    break;
                default:
                    throw new Exception("Incorrect Action was passed");

            }

        }



        public static bool IsFullyReceived(IDbConnection connection, int transactionID)
        {
            bool rtnVal = false;
            string query = String.Format("SELECT IsFullyReceived FROM Transaction WHERE TransactionID = {0}", transactionID);
            SqlText sql = new SqlText(connection, query);
            
                rtnVal = Convert.ToBoolean(sql.ExecuteScalar()); 
            

            return rtnVal;
        }

        public static bool IsFullyPaid(IDbConnection connection, int transactionID)
        {
            bool rtnVal = false;
            string query = String.Format("SELECT IsFullyPaid FROM Transaction WHERE TransactionID = {0}", transactionID);
            SqlText sql = new SqlText(connection, query);
            
                rtnVal = Convert.ToBoolean(sql.ExecuteScalar());
            

            return rtnVal;
        }






        public static void SyncAmountsAfterATransactionOrderIsMade(IDbConnection connection, int transactionID, decimal amountOfOrder)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);
            decimal newTotalAmount = amountOfOrder + transaction.TotalAmount.Value;

            transaction.TotalAmount = newTotalAmount;

            if (transaction.TotalAmountPaid.Value >= 0)
            {
                transaction.TotalAmountLeft = (newTotalAmount - transaction.TotalAmountPaid.Value);
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((newTotalAmount - transaction.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }

        public static void SyncAmountsAfterATransactionOrderIsUpdated(IDbConnection connection, int transactionID, decimal oldTransactionOrderAmount, decimal newTransactionOrderAmount)
        {


            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTotalAmount = 0;


            if (oldTransactionOrderAmount > newTransactionOrderAmount)
                newTotalAmount = transaction.TotalAmount.Value - (oldTransactionOrderAmount - newTransactionOrderAmount);
            else if (newTransactionOrderAmount > oldTransactionOrderAmount)
                newTotalAmount = transaction.TotalAmount.Value + (newTransactionOrderAmount - oldTransactionOrderAmount);

            transaction.TotalAmount = newTotalAmount;

            if (transaction.TotalAmountPaid.Value >= 0)
            {
                transaction.TotalAmountLeft = newTotalAmount - transaction.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((newTotalAmount - transaction.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);



        }

        public static void SyncAmountsAfterATransactionOrderIsDeleted(IDbConnection connection, int transactionID, decimal deleteTransactionOrderAmount)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTotalAmount = 0;

            newTotalAmount = transaction.TotalAmount.Value - deleteTransactionOrderAmount;

            transaction.TotalAmount = newTotalAmount;

            if (transaction.TotalAmountPaid.Value >= 0)
            {
                transaction.TotalAmountLeft = newTotalAmount - transaction.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((newTotalAmount - transaction.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }



        public static void SyncAmountAfterAReturnIsMade(IDbConnection connection, int transactionID, decimal amountOfReturnedGoods)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTotalAmount = transaction.TotalAmount.Value - amountOfReturnedGoods;

            transaction.TotalAmount = newTotalAmount;

            if (transaction.TotalAmountPaid.Value >= 0)
            {
                transaction.TotalAmountLeft = newTotalAmount - transaction.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((newTotalAmount - transaction.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }

        public static void SyncAmountAfterAReturnIsUpdated(IDbConnection connection, int transactionID, decimal oldReturnedAmount, decimal newReturnedAmount)
        {

            if (oldReturnedAmount != newReturnedAmount)
            {
                TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

                decimal newTotalAmount = 0;


                if (oldReturnedAmount > newReturnedAmount)
                    newTotalAmount = transaction.TotalAmount.Value + (oldReturnedAmount - newReturnedAmount);
                else if (newReturnedAmount > oldReturnedAmount)
                    newTotalAmount = transaction.TotalAmount.Value - (newReturnedAmount - oldReturnedAmount);

                transaction.TotalAmount = newTotalAmount;

                if (transaction.TotalAmountPaid.Value >= 0)
                {
                    transaction.TotalAmountLeft = newTotalAmount - transaction.TotalAmountPaid.Value;
                }
                else
                {//i.e a negative value
                    transaction.TotalAmountLeft = Decimal.Negate((newTotalAmount - transaction.TotalAmountPaid.Value) * -1);
                }

                connection.UpdateById<TransactionRow>(transaction);
            }

        }

        public static void SyncAmountAfterAReturnIsDeleted(IDbConnection connection, int transactionID, decimal amountDeleted)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTotalAmount = 0;

            newTotalAmount = transaction.TotalAmount.Value + amountDeleted;

            transaction.TotalAmount = newTotalAmount;

            if (transaction.TotalAmountPaid.Value >= 0)
            {
                transaction.TotalAmountLeft = newTotalAmount - transaction.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((newTotalAmount - transaction.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }

        public static void SyncAmountAfterARefundIsMade(IDbConnection connection, int transactionID, decimal amountRefunded)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTotalAmountPaid = transaction.TotalAmountPaid.Value - amountRefunded;

            transaction.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                transaction.TotalAmountLeft = transaction.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((transaction.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);


        }

        public static void SyncAmountAfterARefundIsUpdated(IDbConnection connection, int transactionID, decimal oldReturnedAmount, decimal newReturnedAmount)
        {


            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTotalAmountPaid = 0;




            if (oldReturnedAmount > newReturnedAmount)
                newTotalAmountPaid = transaction.TotalAmountPaid.Value - (oldReturnedAmount - newReturnedAmount);
            else if (newReturnedAmount > oldReturnedAmount)
                newTotalAmountPaid = transaction.TotalAmountPaid.Value + (newReturnedAmount - oldReturnedAmount);


            transaction.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                transaction.TotalAmountLeft = transaction.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((transaction.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }

        public static void SyncAmountAfterARefundIsDeleted(IDbConnection connection, int transactionID, decimal amountDeleted)
        {


            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTotalAmountPaid = 0;
            newTotalAmountPaid = transaction.TotalAmountPaid.Value + amountDeleted;

            transaction.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                transaction.TotalAmountLeft = transaction.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                transaction.TotalAmountLeft = Decimal.Negate((transaction.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }


        public static void SyncAmountsAfterAPaymentIsMade(IDbConnection connection, int transactionID, decimal payment)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);
            decimal newTtlAmtPaid = transaction.TotalAmountPaid.Value + payment;

            transaction.TotalAmountPaid = newTtlAmtPaid;

            if (newTtlAmtPaid >= 0)
            {
                transaction.TotalAmountLeft = transaction.TotalAmount - newTtlAmtPaid;
            }
            else
            {
                transaction.TotalAmountLeft = Decimal.Negate((transaction.TotalAmount.Value - newTtlAmtPaid) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);
        }

        public static void SyncAmountsAfterAPaymentIsUpdated(IDbConnection connection, int transactionID, decimal oldPayment, decimal newPayment)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTtlAmtPaid = 0;


            if (oldPayment > newPayment)
                newTtlAmtPaid = transaction.TotalAmountPaid.Value - (oldPayment - newPayment);
            else if (newPayment > oldPayment)
                newTtlAmtPaid = transaction.TotalAmountPaid.Value + (newPayment - oldPayment);

            transaction.TotalAmountPaid = newTtlAmtPaid;

            if (newTtlAmtPaid >= 0)
            {
                transaction.TotalAmountLeft = transaction.TotalAmount - newTtlAmtPaid;
            }
            else
            {
                transaction.TotalAmountLeft = Decimal.Negate((transaction.TotalAmount.Value - newTtlAmtPaid) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }

        public static void SyncAmountsAfterAPaymentIsDeleted(IDbConnection connection, int transactionID, decimal paymentDeleted)
        {

            TransactionRow transaction = connection.Single<TransactionRow>(new Criteria("TransactionId") == transactionID);

            decimal newTtlAmtPaid = 0;

            newTtlAmtPaid = transaction.TotalAmountPaid.Value - paymentDeleted;

            transaction.TotalAmountPaid = newTtlAmtPaid;

            if (newTtlAmtPaid >= 0)
            {
                transaction.TotalAmountLeft = transaction.TotalAmount - newTtlAmtPaid;
            }
            else
            {
                transaction.TotalAmountLeft = Decimal.Negate((transaction.TotalAmount.Value - newTtlAmtPaid) * -1);
            }

            connection.UpdateById<TransactionRow>(transaction);

        }





        public static List<TicketRow> GetTicketListInTransaction(IDbConnection conn, List<int> trxnIds)
        {

            var tktFlds = TicketRow.Fields;

            List<TicketRow> tktList = conn.List<TicketRow>(x =>
            {
                x.Where(new Criteria(tktFlds.TicketId).In(trxnIds));
            });

            return tktList;

        }


        public static TicketRow GetTicketInTransaction(IDbConnection conn, int trnxId)
        {

            var tktFlds = TicketRow.Fields;

            TicketRow tkt = conn.Single<TicketRow>(new Criteria(tktFlds.TransactionId) == trnxId);

            return tkt;

        }


        public static List<int> GetTransactionIds(List<TransactionRow> ticketList)
        {

            List<int> idList = new List<int>();

            for (int x = 0; x < ticketList.Count; x++)
            {
                idList.Add(ticketList[x].TransactionId.Value);
            }

            return idList;

        }



        /*
        private static decimal GetUnstockQuantity(int locationID, int transactionID, int productID)
        {
            decimal rtnVal = 0;

            String qry = String.Format("SELECT UOMAndPriceID, Quantity FROM Unstock WHERE TransactionID = {0} AND ProductID = {1}", transactionID, productID);
            using (SqlText sql = new SqlText(qry))
            {
                IDataReader reader = sql.ExecuteReader();
                while (reader.Read())
                {
                    rtnVal += UnitOfMeasurementBizPrcs.CalcQuantity(Convert.ToInt32(reader["UOMAndPriceID"]), Convert.ToDecimal(reader["Quantity"]), UnitOfMeasurement.TransactionUOM);
                }
            }

            return rtnVal;
        }

        private static void UpdateStock(int locationID, int productID, decimal quantity)
        {

            decimal existingQuantity = 0;

            String query = String.Format("SELECT * FROM Stock WHERE ProductID = {0} AND LocationID = {1}", productID, locationID);
            using (SqlText sql = new SqlText(query))
            {
                IDataReader reader = sql.ExecuteReader();
                if (reader.Read())
                    existingQuantity = Convert.ToDecimal(reader["Quantity"]);
            }

            String query_1 = String.Format("UPDATE Stock SET Quantity = {2} WHERE ProductID = {0} AND LocationID = {1}", productID, locationID, ((existingQuantity) - (quantity)));
            using (SqlText sql = new SqlText(query_1))
            {
                sql.ExecuteNonQuery();
            }
        }

        private static void DeleteUnStock(int transactionID, int productID)
        {
            String qry = String.Format("DELETE FROM Unstock WHERE TransactionID = {0} AND ProductID = {1}", transactionID, productID);
            using (SqlText sql = new SqlText(qry))
            {
                sql.ExecuteNonQuery();
            }
        }
        */
    }
}

