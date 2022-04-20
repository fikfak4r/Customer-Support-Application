
namespace CustomerSupport.Common.Pages
{

    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;
    using CustomerSupport.BusinessObjects.Entities;
    using Processes;
    using System.Collections.Generic;
    using BO = CustomerSupport.BusinessObjects;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            

                    var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
                    var tickets = BusinessObjects.Entities.TicketRow.Fields;
                    var custFlds = BusinessObjects.Entities.CustomerRow.Fields;
                    var user = (UserDefinition)Authorization.UserDefinition;

            
                    DashboardPageModel model = new DashboardPageModel();


                    using (var connection = SqlConnections.NewByKey("Default"))
                    {
                
                        connection.Open();
                        List<int> locationList = CustomerBizPrcs.GetLocationIDs(connection, user.UserId);
                        
                        model.CustomerCount = connection.Count<CustomerRow>(new Criteria(custFlds.LocationId).In(locationList));
                        model.PendingTickets = connection.Count<TicketRow>(new Criteria(custFlds.LocationId).In(locationList) & new Criteria(tickets.Status) == BO.Status.Pending);
                        model.OpenedTickets = connection.Count<TicketRow>(new Criteria(custFlds.LocationId).In(locationList) & new Criteria(tickets.Status) == BO.Status.Open);
                        model.ClosedTicket = connection.Count<TicketRow>(new Criteria(custFlds.LocationId).In(locationList) & new Criteria(tickets.Status) == BO.Status.Closed);
                        model.TicketsWaitingOnCustomers = connection.Count<TicketRow>(new Criteria(custFlds.LocationId).In(locationList) & new Criteria(tickets.Status) == BO.Status.WaitingOnCustomer);
                        model.TicketsWaitingOnThirdParty = connection.Count<TicketRow>(new Criteria(custFlds.LocationId).In(locationList) & new Criteria(tickets.Status) == BO.Status.WaitingOnThirdParty);
                        //model.OP
                   
                        //var closedOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.Shipped);
                        //var totalOrders = model.OpenOrders + closedOrders;
                        //model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                        //    ((double)closedOrders / (double)totalOrders * 100));
                        //model.CustomerCount = connection.Count<CustomerRow>();
                        //model.ProductCount = connection.Count<ProductRow>();
                    }


                    return View(MVC.Views.Common.Dashboard.DashboardIndex, model);

        }
    }
}
