using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using Serenity.Web;
using Serenity;
using Serenity.ComponentModel;
using CustomerSupport.BusinessObjects.Entities;

namespace CustomerSupport.BusinessObjects.Scripts
{
    [LookupScript("Administration.KBCategoryLookup", Permission = "?")]
    public class KBCategoryLookup : RowLookupScript<Entities.KbCategoryRow>
    {

        public KBCategoryLookup()
        {
            IdField = Entities.KbCategoryRow.Fields.KbCategoryId.PropertyName;
            TextField = Entities.KbCategoryRow.Fields.CategoryName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
            //var loc = Administration.Entities.LocationRow.Fields;
            var KbCategory = Entities.KbCategoryRow.Fields;
            var KbCategoryLocation = Entities.KbCategoryLocationsRow.Fields.As("KbCatLoc");
            //var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");

            UserDefinition user = (UserDefinition)Authorization.UserDefinition;

            //query.Where( new Criteria(loc.LocationId).In(query
            //    .SubQuery()
            //    .From(userLoc)
            //    .Select(userLoc.LocationId)
            //    .Where(new Criteria(userLoc.UserId) == user.UserId)
            //    ));

            query
                  .Where(new Criteria(KbCategory.KbCategoryId).In
                          (query
                            .SubQuery()
                            .From(KbCategoryLocation)
                            .Select(KbCategoryLocation.KbCategoryId)
                            .Where(new Criteria(KbCategoryLocation.LocationId).In
                                  (query
                                   .SubQuery()
                                   .From(userLocFlds)
                                   .Select(userLocFlds.LocationId)
                                   .Where(userLocFlds.UserId == user.UserId)))));


        }

    }

}