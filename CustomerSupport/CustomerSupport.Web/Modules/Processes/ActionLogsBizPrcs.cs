using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using System.Data;
using CustomerSupport.BusinessObjects.Entities;

namespace CustomerSupport.Processes
{
    public class ActionLogsBizPrcs
    {

        public static void NewActionUpdate(IDbConnection conn, int userId, int ticketId, string actionName)
        {
            var flds = ActionLogRow.Fields;

            new SqlInsert(flds.TableName)
            .Set(flds.UserId, userId)
            .Set(flds.TicketId, ticketId)
            .Set(flds.Action, actionName)
            .Set(flds.Date, DateTime.Now)
            .Execute(conn);

        }

        public static void NewActionListUpdate(IDbConnection conn, int userId, List<int> ticketIds, string actionName)
        {
            var flds = ActionLogRow.Fields;

            foreach (int ticketId in ticketIds)
            {
                new SqlInsert(flds.TableName)
                .Set(flds.UserId, userId)
                .Set(flds.TicketId, ticketId)
                .Set(flds.Action, actionName)
                .Set(flds.Date, DateTime.Now)
                .Execute(conn);
            }
        }

        public static void NewTicketCreated(IDbConnection conn, int userId, int ticketId, string actionName)
        {

            var flds = ActionLogRow.Fields;

            new SqlInsert(flds.TableName)
            .Set(flds.UserId, userId)
            .Set(flds.TicketId, ticketId)
            .Set(flds.Action, actionName)
            .Execute(conn);

        }
    }
}