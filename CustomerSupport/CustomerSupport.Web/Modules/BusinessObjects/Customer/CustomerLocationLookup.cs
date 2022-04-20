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
    [LookupScript("Administration.CustomerLocationLookup", Permission = "?")]
    public class CustomerLocationLookup : RowLookupScript<Entities.CustomerRow>
    {

        public CustomerLocationLookup()
        {
            IdField = Entities.CustomerRow.Fields.CustomerId.PropertyName;
            TextField = Entities.CustomerRow.Fields.FullName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var userLoc =Administration.Entities.UserLocationRow.Fields.As("userLoc");
            var cust = CustomerSupport.BusinessObjects.Entities.CustomerRow.Fields;
            UserDefinition user = (UserDefinition)Authorization.UserDefinition;
            query.Where( new Criteria(cust.LocationId).In(query
                .SubQuery()
                .From(userLoc)
                .Select(userLoc.LocationId)
                .Where(new Criteria(userLoc.UserId) == user.UserId)
                ));
        }

    }

}