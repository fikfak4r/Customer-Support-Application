using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using Serenity.Web;
using Serenity;
using Serenity.ComponentModel;
namespace CustomerSupport.BusinessObjects.Scripts
{
    [LookupScript("Administration.CustomerPhoneNumberLocationLookup", Permission = "?")]
    public class CustomerPhoneNumberLocationLookup : RowLookupScript<Entities.CustomerRow>
    {

        public CustomerPhoneNumberLocationLookup()
        {
            IdField = Entities.CustomerRow.Fields.CustomerId.PropertyName;
            TextField = Entities.CustomerRow.Fields.PhoneNumber.PropertyName;
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var userLoc = Administration.Entities.UserLocationRow.Fields.As("userLoc");
            var cust = CustomerSupport.BusinessObjects.Entities.CustomerRow.Fields;
            UserDefinition user = (UserDefinition)Authorization.UserDefinition;
            query.Where(new Criteria(cust.LocationId).In(query
                .SubQuery()
                .From(userLoc)
                .Select(userLoc.LocationId)
                .Where(new Criteria(userLoc.UserId) == user.UserId)
                ));
        }

    }

}