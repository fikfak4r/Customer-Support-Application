using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using System.Data;
using CustomerSupport.BusinessObjects.Entities;




namespace CustomerSupport.Processes
{
    public class TicketBizPrcs
    {
        public static void AssignTickets(IDbConnection conn, List<int> ticketIDs, int? agentID)
        {

            string ticketIDDel = "";

            foreach (int ticket in ticketIDs)
            {
                if (ticketIDDel == "")
                {
                    ticketIDDel = ticket.ToString();
                }
                else
                {
                    ticketIDDel = String.Format("{0},{1}", ticketIDDel, ticket);
                }
            }//Ends the foreach loop


            string qry = "";

            if (agentID != null)
                qry = String.Format("UPDATE Tickets Set UserID = {0} WHERE TicketID IN ({1})", agentID, ticketIDDel);
            else
                qry = String.Format("UPDATE Tickets Set UserID = NULL WHERE TicketID IN ({0})", ticketIDDel);

            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();


        }

        public static void UpdateTransactionId(IDbConnection conn, int ticketId, int transactionId)
        {
            string qry = "";


            qry = String.Format("UPDATE Tickets Set TransactionId = {0} WHERE TicketId = {1}",transactionId, ticketId);


            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();
        }


        public static void UpdateType(IDbConnection conn, List<int> ticketIDs, int type)
        {
            string ticketIDDel = "";
            foreach (int ticket in ticketIDs)
            {
                if (ticketIDDel == "")
                {
                    ticketIDDel = ticket.ToString();
                }
                else
                {
                    ticketIDDel = String.Format("{0},{1}", ticketIDDel, ticket);
                }
            }//Ends the foreach loop


            string qry = String.Format("UPDATE Tickets Set Type = {0} WHERE TicketID IN ({1})", type, ticketIDDel);
            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();

        }

        public static void UpdatePriority(IDbConnection conn, List<int> ticketIDs, int priority)
        {
            string ticketIDDel = "";
            foreach (int ticket in ticketIDs)
            {
                if (ticketIDDel == "")
                {
                    ticketIDDel = ticket.ToString();
                }
                else
                {
                    ticketIDDel = String.Format("{0},{1}", ticketIDDel, ticket);
                }
            }//Ends the foreach loop


            string qry = String.Format("UPDATE Tickets Set Priority = {0} WHERE TicketID IN ({1})", priority, ticketIDDel);
            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();


        }

        public static void UpdateStatus(IDbConnection conn, List<int> ticketIDs, int status)
        {
            string ticketIDDel = "";
            foreach (int ticket in ticketIDs)
            {
                if (ticketIDDel == "")
                {
                    ticketIDDel = ticket.ToString();
                }
                else
                {
                    ticketIDDel = String.Format("{0},{1}", ticketIDDel, ticket);
                }
            }//Ends the foreach loop


            string qry = String.Format("UPDATE Tickets Set Status = {0} WHERE TicketID IN ({1})", status, ticketIDDel);
            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();


        }

        public static void UpdateGroup(IDbConnection conn, List<int> ticketIDs, int? group)
        {

            string ticketIDDel = "";

            foreach (int ticket in ticketIDs)
            {
                if (ticketIDDel == "")
                {
                    ticketIDDel = ticket.ToString();
                }
                else
                {
                    ticketIDDel = String.Format("{0},{1}", ticketIDDel, ticket);
                }
            }//Ends the foreach loop


            string qry = "";

            if (group != null)
                qry = String.Format("UPDATE Tickets Set GroupID = {0} WHERE TicketID IN ({1})", group, ticketIDDel);
            else
                qry = String.Format("UPDATE Tickets Set GroupID = NULL WHERE TicketID IN ({0})", ticketIDDel);

            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();


        }


        public static void UpdateLocation(IDbConnection conn, List<int> ticketIDs, int locationID)
        {

            string ticketIDDel = "";

            foreach (int ticket in ticketIDs)
            {

                if (ticketIDDel == "")
                {
                    ticketIDDel = ticket.ToString();
                }
                else
                {
                    ticketIDDel = String.Format("{0},{1}", ticketIDDel, ticket);
                }

            }//Ends the foreach loop


            string qry = String.Format("UPDATE Tickets Set LocationID = {0} WHERE TicketID IN ({1})", locationID, ticketIDDel);

            SqlText sql = new SqlText(conn, qry);

            sql.ExecuteNonQuery();


        }

        public static List<TransactionRow> GetTransactionListInTicket(IDbConnection conn, List<int> ticketIDs)
        {
   
            var trxnFlds = TransactionRow.Fields;

            List<TransactionRow> trxnList = conn.List<TransactionRow>(x =>
            {
                x.SelectTableFields()
                .Where(new Criteria(trxnFlds.TicketId).In(ticketIDs.ToArray()));
            });

            return trxnList;
        }


        public static TransactionRow GetTransactionInTicket(IDbConnection conn, int ticketID)
        {

            var trxnFlds = TransactionRow.Fields;

            TransactionRow trxn = conn.Single<TransactionRow>(new Criteria(trxnFlds.TicketId) == ticketID);
            
            return trxn;

        }

        public static List<int> GetTicektIds(List<TicketRow> ticketList)
        {
            List<int> idList = new List<int>();
            for(int x = 0; x < ticketList.Count; x++)
            {
                idList.Add(ticketList[x].TicketId.Value);
            }

            return idList;
        }



        /// <summary>
        /// Checks if the supplied TicketId in unique in all locations under the account
        /// </summary>
        /// <param name="conn"></param>
        /// <param name="accountId"></param>
        /// <param name="ticketId"></param>
        /// <returns></returns>
        public static bool IsTicketIdUnique(IDbConnection conn, int accountId, string ticketId)
        {

            var ticketFlds = TicketRow.Fields;
            bool isUnique = true;


            SqlText sql = new SqlText(conn, String.Format("SELECT count(1) FROM Tickets WHERE TicketIdString = '{0}' AND LocationId IN ({1})",
                ticketId, AccountBizPrcs.GetLocationIDsAsString(conn, accountId)));

            using (IDataReader reader = sql.ExecuteReader())
            {
                reader.Read();
                if (Convert.ToInt32(reader[0]) > 0)
                    isUnique = false;
               
            }

            return isUnique;

        }



        public static HashSet<string> PhoneNumberList(List<TicketRow> tickets)
        {

            HashSet<string> phoneNumberSet = new HashSet<string>();

            foreach (TicketRow ticket in tickets)
            {
                if (!String.IsNullOrEmpty(ticket.PhoneNumber) && ticket.PhoneNumber != "undefined")
                    phoneNumberSet.Add(ticket.PhoneNumber);
            }




            return phoneNumberSet;

        }



        public static String StringifyPhoneNumberSeperatedByCommas(List<TicketRow> tickets)
        {

            HashSet<string> phoneNumberSet = new HashSet<string>();

            foreach (TicketRow ticket in tickets)
            {
                if (!String.IsNullOrEmpty(ticket.PhoneNumber) && ticket.PhoneNumber != "undefined")
                    phoneNumberSet.Add(ticket.PhoneNumber);
            }

            string[] phoneNumberStringSet = phoneNumberSet.ToArray();


            string phoneNumbers = "";

            if (phoneNumberStringSet != null && phoneNumberSet.Count >= 1)
                for (int x = 0; x < phoneNumberStringSet.Length; x++)
                {

                    if (String.IsNullOrEmpty(phoneNumbers))
                        phoneNumbers = phoneNumberStringSet[x];
                    else
                        phoneNumbers = String.Format("{0},{1}", phoneNumbers, phoneNumberStringSet[x]);

                }//Ends the for loop

            return phoneNumbers;
        }





    }
}