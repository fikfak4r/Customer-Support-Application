using Serenity.Navigation;
using Administration = CustomerSupport.Administration.Pages;
using CS = CustomerSupport.BusinessObjects.Pages;
using BO =  CustomerSupport.BusinessObjects;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-bar-chart")]


//[assembly: NavigationMenu(2000, "BusinessObjects"),]
[assembly: NavigationLink(2000, "Tickets", typeof(CS.TicketController), Permission = BO.PermissionKeys.Ticket.Read, IconClass = "fa-file-text")]
[assembly: NavigationLink(3000, "Profile", typeof(CS.CustomerController), action: "ProfilePage", Permission = CustomerSupport.Administration.PermissionKeys.ClientOfClient)]



////[assembly:  NavigationLink(2000, "BusinessObjects/Calls manager", typeof(CS.CallController))]
[assembly: NavigationLink(4000, "Customers", typeof(CS.CustomerController), Permission = BO.PermissionKeys.Customer.Read, IconClass = "fa-group")]
//[assembly: NavigationLink(5000, "Knowledge base", typeof(CS.KnowledgeBaseController), Permission = BO.PermissionKeys.KnowledgeBase.Read)]

[assembly: NavigationLink(5000, "Products", typeof(CS.ProductController), Permission = BO.PermissionKeys.Product.Read, IconClass = "fa-suitcase")]

[assembly: NavigationLink(6000, "Transactions", typeof(CS.TransactionController), Permission = BO.PermissionKeys.Transaction.Read, IconClass = "fa-cart-arrow-down")]


//[assembly: NavigationMenu(7000, "Knowledge base")]
//[assembly: NavigationLink(7100, "Knowledge base/Category", typeof(CS.KbCategoryController), Permission = BO.PermissionKeys.KbCategory.Read)]
//[assembly: NavigationLink(7200, "Knowledge base/All", typeof(CS.KnowledgeBaseController), Permission = BO.PermissionKeys.KnowledgeBase.Read)]



//[assembly: NavigationMenu(8000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationMenu(8000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(8100, "Administration/User Management", typeof(Administration.UserController), icon: "icon-people", Permission = CustomerSupport.Administration.PermissionKeys.Account)]
[assembly: NavigationLink(8200, "Administration/Roles or Group", typeof(Administration.RoleController), icon: "icon-lock", Permission = CustomerSupport.Administration.PermissionKeys.Account)]
[assembly: NavigationLink(8300, "Administration/Account", typeof(Administration.AccountController), Permission = CustomerSupport.Administration.PermissionKeys.Account)]
[assembly: NavigationLink(8400, "Administration/Locations", typeof(Administration.LocationController), Permission = CustomerSupport.Administration.PermissionKeys.Location)]
[assembly: NavigationLink(8500, "Administration/Sms Account", typeof(CS.SmsController), action: "SmsAccount", Permission = CustomerSupport.Administration.PermissionKeys.Account)]
//[assembly: NavigationLink(9500, "Administration/Get code", typeof(Administration.GetCodeController), Permission = CustomerSupport.Administration.PermissionKeys.GetCode)]
