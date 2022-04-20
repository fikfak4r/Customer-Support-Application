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
    [LookupScript("Administration.ProductLocationLookup", Permission = "?")]
    public class ProductLocationLookup : RowLookupScript<Entities.ProductRow>
    {

        public ProductLocationLookup()
        {
            IdField = Entities.ProductRow.Fields.ProductId.PropertyName;
            TextField = Entities.ProductRow.Fields.Name.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            
            base.PrepareQuery(query);

            var userLoc =Administration.Entities.UserLocationRow.Fields.As("userLoc");
            var prodLoc = CustomerSupport.BusinessObjects.Entities.ProductLocationRow.Fields.As("prodLoc");
            var prod = CustomerSupport.BusinessObjects.Entities.ProductRow.Fields;

            UserDefinition user = (UserDefinition)Authorization.UserDefinition;
            query.Where( new Criteria(prod.ProductId).In(
                query
                .SubQuery()
                .From(prodLoc)
                .Select(prodLoc.ProductId)
                .Where(new Criteria(prodLoc.LocationId).In(
                        query
                        .SubQuery()
                        .From(userLoc)
                        .Select(userLoc.LocationId)
                        .Where(new Criteria(userLoc.UserId) == user.UserId)
                ))));
        }

    }

}