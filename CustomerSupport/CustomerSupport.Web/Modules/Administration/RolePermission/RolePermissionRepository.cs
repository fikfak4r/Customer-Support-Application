
namespace CustomerSupport.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.RolePermissionRow;
    using CustomerSupport.BusinessObjects;

    public class RolePermissionRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }


        public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request)
        {

            Check.NotNull(request, "request");
            Check.NotNull(request.RoleID, "roleID");
            Check.NotNull(request.Permissions, "permissions");

            var roleID = request.RoleID.Value;
            var oldList = new HashSet<string>(
                GetExisting(uow.Connection, roleID, request.Module, request.Submodule)
                .Select(x => x.PermissionKey), StringComparer.OrdinalIgnoreCase);


            request.Permissions.Add(Administration.PermissionKeys.Administration);
            //request.Permissions.Add(Administration.PermissionKeys.Location);
            request.Permissions.Add(Administration.PermissionKeys.Security);

            request.Permissions.Add(Administration.PermissionKeys.UserLocation.Read);
            request.Permissions.Add(Administration.PermissionKeys.UserLocation.Insert);
            request.Permissions.Add(Administration.PermissionKeys.UserLocation.Update);
            request.Permissions.Add(Administration.PermissionKeys.UserLocation.Delete);

            request.Permissions.Add(Administration.PermissionKeys.RoleLocation.Read);
            request.Permissions.Add(Administration.PermissionKeys.RoleLocation.Insert);
            request.Permissions.Add(Administration.PermissionKeys.RoleLocation.Update);

            request.Permissions.Add(PermissionKeys.TicketProcess.Read);
            request.Permissions.Add(PermissionKeys.TicketProcess.Insert);
            request.Permissions.Add(PermissionKeys.TicketProcess.Update);

            request.Permissions.Add(PermissionKeys.ActionLog.Read);
            request.Permissions.Add(PermissionKeys.ActionLog.Insert);
            request.Permissions.Add(PermissionKeys.ActionLog.Update);

            request.Permissions.Add(BusinessObjects.PermissionKeys.KbCategory.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KbCategory.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KbCategory.Update);

            request.Permissions.Add(BusinessObjects.PermissionKeys.KnowledgeBase.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KnowledgeBase.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KnowledgeBase.Update);

            request.Permissions.Add(BusinessObjects.PermissionKeys.KbCategoryLocation.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KbCategoryLocation.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KbCategoryLocation.Update);

            request.Permissions.Add(BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Update);

            request.Permissions.Add(BusinessObjects.PermissionKeys.ProductLocation.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.ProductLocation.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.ProductLocation.Update);


            request.Permissions.Add(BusinessObjects.PermissionKeys.TransactionSms.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.TransactionSms.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.TransactionSms.Update);


            request.Permissions.Add(BusinessObjects.PermissionKeys.TransactionDetail.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.TransactionDetail.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.TransactionDetail.Update);

            request.Permissions.Add(BusinessObjects.PermissionKeys.TicketSms.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.TicketSms.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.TicketSms.Update);

            request.Permissions.Add(BusinessObjects.PermissionKeys.CustomerSms.Insert);
            request.Permissions.Add(BusinessObjects.PermissionKeys.CustomerSms.Read);
            request.Permissions.Add(BusinessObjects.PermissionKeys.CustomerSms.Update);




            var newList = new HashSet<string>(request.Permissions.ToList(),
                StringComparer.OrdinalIgnoreCase);

            if (oldList.SetEquals(newList))
                return new SaveResponse();

            foreach (var k in oldList)
            {
                if (newList.Contains(k))
                    continue;

                new SqlDelete(fld.TableName)
                    .Where(
                        new Criteria(fld.RoleId) == roleID &
                        new Criteria(fld.PermissionKey) == k)
                    .Execute(uow.Connection);
            }

            foreach (var k in newList)
            {
                if (oldList.Contains(k))
                    continue;

                uow.Connection.Insert(new MyRow
                {
                    RoleId = roleID,
                    PermissionKey = k
                });
            }

            BatchGenerationUpdater.OnCommit(uow, fld.GenerationKey);
            BatchGenerationUpdater.OnCommit(uow, Entities.UserPermissionRow.Fields.GenerationKey);

            return new SaveResponse();

        }

        private List<MyRow> GetExisting(IDbConnection connection, Int32 roleId, string module, string submodule)
        {
            string prefix = "";
            module = module.TrimToEmpty();
            submodule = submodule.TrimToEmpty();

            if (module.Length > 0)
                prefix = module;


            if (submodule.Length > 0)
                prefix += ":" + submodule;

            return connection.List<MyRow>(q =>
            {
                q.Select(fld.RolePermissionId, fld.PermissionKey)
                    .Where(new Criteria(fld.RoleId) == roleId);

                if (prefix.Length > 0)
                    q.Where(
                        new Criteria(fld.PermissionKey) == prefix |
                        new Criteria(fld.PermissionKey).StartsWith(prefix + ":"));
            });

        }

        public RolePermissionListResponse List(IDbConnection connection, RolePermissionListRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.RoleID, "roleID");

            string prefix = "";
            string module = request.Module.TrimToEmpty();
            string submodule = request.Submodule.TrimToEmpty();

            if (module.Length > 0)
                prefix = module;

            if (submodule.Length > 0)
                prefix += ":" + submodule;

            var response = new RolePermissionListResponse();
            
            response.Entities = GetExisting(connection, request.RoleID.Value, request.Module, request.Submodule)
                                .Select(x => x.PermissionKey).ToList();
   
            return response;
        }
    }
}