using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;
using CustomerSupport.BusinessObjects.Entities;

namespace CustomerSupport.BusinessObjects
{
    public class ServiceRequestModels
    {
    }

    public class AssignToAgentsRequest : ServiceRequest
    {
        public int LocationId { get; set; }

        public int GroupId { get; set; }

        public int AgentId { get; set; }

        public List<int> TicketIds { get; set; }
    }


    public class ActionsSettingsRequest : ServiceRequest
    {

        public int Priority { get; set; }

        public int Status { get; set; }

        public int Type { get; set; }

        public int LocationId { get; set; }

        public int GroupId { get; set; }

        public int AgentId { get; set; }

        public List<int> TicketIds { get; set; }

    }

    public class SmsRequest : ServiceRequest
    {

        public int LocationId { get; set; }

        public string PhoneNumbers { get; set; }

        public string Message { get; set; }

        public int TicketId { get; set; }

        public List<int> TicketIds { get; set; }

        public int CustomerId { get; set; }

        public List<int> CustomerIds { get; set; }

    }

    public class GetNextNumberRequest : ServiceRequest
    {
        public string Prefix { get; set; }
        public int Length { get; set; }
    }


    public class TicketRequest : ServiceRequest
    {

        public SaveRequest<CustomerRow> Customer { get; set; }

        public SaveRequest<TicketRow> Ticket { get; set; }

        public SaveRequest<NoteRow> Note { get; set; }

    }


    public class TransactionRequest : ServiceRequest
    {
        public SaveRequest<CustomerRow> Customer { get; set; }

        public List<SaveRequest<TransactionDetailRow>> TransactionDetails { get; set; }

        public SaveRequest<TransactionRow> Transaction { get; set; }

    }


}