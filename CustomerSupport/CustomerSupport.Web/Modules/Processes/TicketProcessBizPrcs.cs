using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.Web;
using Serenity.Data;
using System.Data;
using CustomerSupport.BusinessObjects.Entities;



namespace CustomerSupport.BusinessObjects.Repositories
{
    public class TicketProcessBizPrcs
    {
        public static int CreateTicketProcess(IDbConnection connection, int? ticketID, int? agentID, DateTime? date, String description)
        {
           return (int)connection.InsertAndGetID(new Entities.TicketProcessRow() {
                Date = date,
                TicketId = ticketID,
                UserId = agentID,
                Description = description,
                //ReplyComment = ReplyComment.StartsTicket
            }).Value;
      
        }


        public static void UpdateLocation(IDbConnection connection, int? ticketID, RequestType? type, Priority? priority, Status? status, int? locationID, int? groupID, int? agentID)
        {
            TicketRow ticket = connection.Single<TicketRow>(new Criteria("TicketId") == ticketID.Value);

            ticket.Type = (type != null) ? type : ticket.Type;
            ticket.Priority = (priority != null) ? priority : ticket.Priority;
            ticket.Status = (status != null) ? status : ticket.Status;
            ticket.LocationId = (locationID != null) ? locationID : ticket.LocationId;
            ticket.GroupId = (groupID != null) ? groupID : ticket.GroupId;
            ticket.UserId = (agentID != null) ? agentID : ticket.UserId;


            connection.UpdateById<TicketRow>(ticket);


        }

    }
}