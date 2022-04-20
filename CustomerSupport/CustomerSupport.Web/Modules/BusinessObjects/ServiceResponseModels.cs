using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;
using CustomerSupport.BusinessObjects.Entities;


namespace CustomerSupport.BusinessObjects
{
    public class ServiceResponseModels
    {
    }

    public class AssignToAgentsResponse : ServiceResponse
    {
        public string Reply { get; set; }

        public int LocationId { get; set; }

        public int GroupId { get; set; }

        public int AgentId { get; set; }

        public List<int> TicketIds { get; set; }
    }

    public class SmsResponse : ServiceResponse
    {

        public int LocationId { get; set; }

        public string PhoneNumbers { get; set; }

        public string Message { get; set; }

        public int TicketId { get; set; }

        public List<int> TicketIds { get; set; }

    }

    public class GetNextNumberResponse : ServiceResponse
    {
        public long Number { get; set; }
        public string Serial { get; set; }
    }


    public class TicketResponse : ServiceResponse
    {
        public RetrieveResponse<CustomerRow> Customer { get; set; }

        public RetrieveResponse<TicketRow> Ticket { get; set; }

        public ListResponse<NoteRow> Note { get; set; }
    }


    public class TransactionResponse : ServiceResponse
    {
        public RetrieveResponse<CustomerRow> Customer { get; set; }

        public ListResponse<TransactionDetailRow> TransactionDetails { get; set; }

        public RetrieveResponse<TransactionRow> Transaction { get; set; }
    }


}