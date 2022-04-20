
namespace CustomerSupport.Administration.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Extensibility;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Reflection;
    using MyRow = Entities.UserPermissionRow;

    public class UserPermissionRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");
            Check.NotNull(request.Permissions, "permissions");

            var userID = request.UserID.Value;
            int userIdInt = Convert.ToInt32(userID);
            var oldList = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
            foreach (var p in GetExisting(uow.Connection, userID, request.Module, request.Submodule))
                oldList[p.PermissionKey] = p.Granted.Value;




            
            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.Administration, true));
            //request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.Location);
            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.Security, true));

            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.UserLocation.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.UserLocation.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.UserLocation.Update, true));
            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.UserLocation.Delete, true));

            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.RoleLocation.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.RoleLocation.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, Administration.PermissionKeys.RoleLocation.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TicketProcess.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TicketProcess.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TicketProcess.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.ActionLog.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.ActionLog.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.ActionLog.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KbCategory.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KbCategory.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KbCategory.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KnowledgeBase.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KnowledgeBase.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KnowledgeBase.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KbCategoryLocation.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KbCategoryLocation.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KbCategoryLocation.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.ProductLocation.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.ProductLocation.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.ProductLocation.Update, true));


            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TransactionSms.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TransactionSms.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TransactionSms.Update, true));

            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TransactionDetail.Read, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TransactionDetail.Insert, true));
            request.Permissions.Add(GetMyRow(userIdInt, BusinessObjects.PermissionKeys.TransactionDetail.Update, true));

           






            var newList = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
            foreach (var p in request.Permissions)
                newList[p.PermissionKey] = p.Granted ?? false;

            if (oldList.Count == newList.Count &&
                oldList.All(x => newList.ContainsKey(x.Key) && newList[x.Key] == x.Value))
                return new SaveResponse();

            foreach (var k in oldList.Keys)
            {
                if (newList.ContainsKey(k))
                    continue;

                new SqlDelete(fld.TableName)
                    .Where(
                        new Criteria(fld.UserId) == userID &
                        new Criteria(fld.PermissionKey) == k)
                    .Execute(uow.Connection);
            }

            foreach (var k in newList.Keys)
            {
                if (!oldList.ContainsKey(k))
                {
                    uow.Connection.Insert(new MyRow
                    {
                        UserId = userID,
                        PermissionKey = k,
                        Granted = newList[k]
                    });
                }
                else if (oldList[k] != newList[k])
                {
                    new SqlUpdate(fld.TableName)
                        .Where(
                            fld.UserId == userID &
                            fld.PermissionKey == k)
                        .Set(fld.Granted, newList[k])
                        .Execute(uow.Connection);
                }
            }

            BatchGenerationUpdater.OnCommit(uow, fld.GenerationKey);

            return new SaveResponse();
        }

        private List<MyRow> GetExisting(IDbConnection connection, Int32 userId, string module, string submodule)
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
                q.Select(fld.UserPermissionId, fld.PermissionKey, fld.Granted)
                    .Where(new Criteria(fld.UserId) == userId);

                if (prefix.Length > 0)
                    q.Where(~(
                        new Criteria(fld.PermissionKey) == prefix |
                        new Criteria(fld.PermissionKey).StartsWith(prefix + ":")));
            });
        }

        public ListResponse<UserPermissionRow> List(IDbConnection connection, UserPermissionListRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");

            string prefix = "";
            string module = request.Module.TrimToEmpty();
            string submodule = request.Submodule.TrimToEmpty();

            if (module.Length > 0)
                prefix = module;

            if (submodule.Length > 0)
                prefix += ":" + submodule;

            var response = new ListResponse<UserPermissionRow>();

            response.Entities = GetExisting(connection, request.UserID.Value, request.Module, request.Submodule);

            return response;
        }

        public ListResponse<string> ListRolePermissions(IDbConnection connection, UserPermissionListRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");

            string prefix = "";
            var module = request.Module.TrimToEmpty();
            var submodule = request.Submodule.TrimToEmpty();

            if (module.Length > 0)
                prefix = module;

            if (submodule.Length > 0)
                prefix += ":" + submodule;

            var rp = RolePermissionRow.Fields.As("rp");
            var ur = UserRoleRow.Fields.As("ur");

            var query = new SqlQuery()
                .From(rp)
                .Select(rp.PermissionKey)
                .Distinct(true)
                .OrderBy(rp.PermissionKey);

            query.Where(rp.RoleId.In(
                query.SubQuery()
                    .From(ur)
                    .Select(ur.RoleId)
                    .Where(ur.UserId == request.UserID.Value)
            ));

            return new ListResponse<string>
            {
                Entities = connection.Query<string>(query).ToList()
            };
        }

        private void ProcessAttributes<TAttr>(HashSet<string> hash, MemberInfo member, Func<TAttr, string> getPermission)
            where TAttr : Attribute
        {
            foreach (var attr in member.GetCustomAttributes<TAttr>())
            {
                var permission = getPermission(attr);
                if (!permission.IsEmptyOrNull())
                    hash.Add(permission);
            }
        }

        public ListResponse<string> ListPermissionKeys()
        {
            return LocalCache.Get("Administration:PermissionKeys", TimeSpan.Zero, () =>
            {
                var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
                {
                    foreach (var attr in assembly.GetCustomAttributes<PermissionAttributeBase>())
                        if (!attr.Permission.IsEmptyOrNull())
                            result.Add(attr.Permission);

                    foreach (var type in assembly.GetTypes())
                    {
                        ProcessAttributes<PageAuthorizeAttribute>(result, type, x => x.Permission);
                        ProcessAttributes<PermissionAttributeBase>(result, type, x => x.Permission);
                        ProcessAttributes<ServiceAuthorizeAttribute>(result, type, x => x.Permission);

                        foreach (var member in type.GetMethods(BindingFlags.Instance | BindingFlags.Public))
                        {
                            ProcessAttributes<PageAuthorizeAttribute>(result, member, x => x.Permission);
                            ProcessAttributes<PermissionAttributeBase>(result, member, x => x.Permission);
                            ProcessAttributes<ServiceAuthorizeAttribute>(result, member, x => x.Permission);
                        }
                    }
                }

                result.Remove(Administration.PermissionKeys.Account);
                result.Remove(Administration.PermissionKeys.General);
                result.Remove(Administration.PermissionKeys.Administration);
                result.Remove(Administration.PermissionKeys.Location);
                result.Remove(Administration.PermissionKeys.Client);
                result.Remove(Administration.PermissionKeys.ClientOfClient);
                result.Remove(Administration.PermissionKeys.GetCode);
                result.Remove(Administration.PermissionKeys.Translation);
                result.Remove(Administration.PermissionKeys.Security);

   //                "Permission.Administration:": "Administration0",
   //"Permission.Administration:General": "General1",

                

                result.Remove(Administration.PermissionKeys.RoleLocation.Read);
                result.Remove(Administration.PermissionKeys.RoleLocation.Insert);
                result.Remove(Administration.PermissionKeys.RoleLocation.Update);
                result.Remove(Administration.PermissionKeys.RoleLocation.Delete);


                result.Remove(Administration.PermissionKeys.UserLocation.Read);
                result.Remove(Administration.PermissionKeys.UserLocation.Insert);
                result.Remove(Administration.PermissionKeys.UserLocation.Update);
                result.Remove(Administration.PermissionKeys.UserLocation.Delete);

                result.Remove(BusinessObjects.PermissionKeys.KbCategory.Read);
                result.Remove(BusinessObjects.PermissionKeys.KbCategory.Insert);
                result.Remove(BusinessObjects.PermissionKeys.KbCategory.Update);
                result.Remove(BusinessObjects.PermissionKeys.KbCategory.Delete);

                result.Remove(BusinessObjects.PermissionKeys.KbCategoryLocation.Read);
                result.Remove(BusinessObjects.PermissionKeys.KbCategoryLocation.Insert);
                result.Remove(BusinessObjects.PermissionKeys.KbCategoryLocation.Update);
                result.Remove(BusinessObjects.PermissionKeys.KbCategoryLocation.Delete);



                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBase.Read);
                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBase.Insert);
                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBase.Update);
                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBase.Delete);

                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Read);
                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Insert);
                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Update);
                result.Remove(BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Delete);


                result.Remove(BusinessObjects.PermissionKeys.Call.Read);
                result.Remove(BusinessObjects.PermissionKeys.Call.Insert);
                result.Remove(BusinessObjects.PermissionKeys.Call.Update);
                result.Remove(BusinessObjects.PermissionKeys.Call.Delete);


                result.Remove(BusinessObjects.PermissionKeys.CallProcess.Read);
                result.Remove(BusinessObjects.PermissionKeys.CallProcess.Insert);
                result.Remove(BusinessObjects.PermissionKeys.CallProcess.Update);
                result.Remove(BusinessObjects.PermissionKeys.CallProcess.Delete);

                result.Remove(BusinessObjects.PermissionKeys.TicketProcess.Read);
                result.Remove(BusinessObjects.PermissionKeys.TicketProcess.Insert);
                result.Remove(BusinessObjects.PermissionKeys.TicketProcess.Update);
                result.Remove(BusinessObjects.PermissionKeys.TicketProcess.Delete);

                result.Remove(BusinessObjects.PermissionKeys.ActionLog.Read);
                result.Remove(BusinessObjects.PermissionKeys.ActionLog.Insert);
                result.Remove(BusinessObjects.PermissionKeys.ActionLog.Update);
                result.Remove(BusinessObjects.PermissionKeys.ActionLog.Delete);

                result.Remove(BusinessObjects.PermissionKeys.ProductLocation.Read);
                result.Remove(BusinessObjects.PermissionKeys.ProductLocation.Insert);
                result.Remove(BusinessObjects.PermissionKeys.ProductLocation.Update);
                result.Remove(BusinessObjects.PermissionKeys.ProductLocation.Delete);

                //result.Remove(BusinessObjects.PermissionKeys.Sms.Read);
                //result.Remove(BusinessObjects.PermissionKeys.Sms.Insert);
                //result.Remove(BusinessObjects.PermissionKeys.Sms.Update);
                result.Remove(BusinessObjects.PermissionKeys.Sms.Delete);

                result.Remove(BusinessObjects.PermissionKeys.TicketSms.Read);
                result.Remove(BusinessObjects.PermissionKeys.TicketSms.Insert);
                result.Remove(BusinessObjects.PermissionKeys.TicketSms.Update);
                result.Remove(BusinessObjects.PermissionKeys.TicketSms.Delete);


                result.Remove(BusinessObjects.PermissionKeys.SmsLocation.Read);
                result.Remove(BusinessObjects.PermissionKeys.SmsLocation.Insert);
                result.Remove(BusinessObjects.PermissionKeys.SmsLocation.Update);
                result.Remove(BusinessObjects.PermissionKeys.SmsLocation.Delete);


                result.Remove(BusinessObjects.PermissionKeys.CustomerSms.Read);
                result.Remove(BusinessObjects.PermissionKeys.CustomerSms.Insert);
                result.Remove(BusinessObjects.PermissionKeys.CustomerSms.Update);
                result.Remove(BusinessObjects.PermissionKeys.CustomerSms.Delete);

                result.Remove(BusinessObjects.PermissionKeys.TransactionSms.Read);
                result.Remove(BusinessObjects.PermissionKeys.TransactionSms.Insert);
                result.Remove(BusinessObjects.PermissionKeys.TransactionSms.Update);
                result.Remove(BusinessObjects.PermissionKeys.TransactionSms.Delete);

                result.Remove(BusinessObjects.PermissionKeys.TransactionDetail.Read);
                result.Remove(BusinessObjects.PermissionKeys.TransactionDetail.Insert);
                result.Remove(BusinessObjects.PermissionKeys.TransactionDetail.Update);
                result.Remove(BusinessObjects.PermissionKeys.TransactionDetail.Delete);


                result.Remove("*");
                result.Remove("?");

                return new ListResponse<string>
                {
                    Entities = new List<string>(result)
                };
            });
        }


        //Fikoli defined
        public MyRow GetMyRow(int? userID, string permissionKey, bool granted){
            return new MyRow
                       {
                           UserId = userID,
                           PermissionKey = permissionKey,
                           Granted = granted
                       };
           
        }

    }
}