using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using CustomerSupport.Administration.Entities;
using CustomerSupport.Membership;
using CustomerSupport.Administration.Repositories;
using CustomerSupport.BusinessObjects.Entities;
using System.Data.Common;
using System.Data;

namespace CustomerSupport.Processes
{
    public class CustomerBizPrcs
    {

        public void CreateCustomer()
        {

        }

        public static List<CustomerRow> GetCustomerList(System.Data.IDbConnection connection, List<int> customerIds)
        {
            return connection.List<CustomerRow>(new Criteria("CustomerId").In(customerIds));
        }


        public static List<CustomerRow> GetCustomerListFromTicketIdList(System.Data.IDbConnection connection, List<int> ticketIds)
        {
            var ticketFlds = TicketRow.Fields.As("ticketRow");
            var customer = CustomerRow.Fields;


            SqlQuery query = new SqlQuery();
            
            //query
            //.From(ticketFlds)
            //.Select(ticketFlds.CustomerId)
       
            //.Distinct(true)
            //.Where(new Criteria(ticketFlds.TicketId).In(new Int32[] { 1, 2 }));
            //query.ExecuteReader(connection);

            query
                .From(customer)
                .Select(customer.CustomerId)
                .Select(customer.PhoneNumber)

                   .Where(new Criteria(customer.CustomerId).In(
                           query
                           .SubQuery()
                           .From(ticketFlds)

                           .Select(ticketFlds.CustomerId)
                           .Where(new Criteria(ticketFlds.TicketId).In(ticketIds))

                   ));
            return connection.Query<CustomerRow>(query).ToList();
           // query.SetParam("@param", ticketIds);





            //return connection.List<CustomerRow>(new Criteria(customer.CustomerId).In(query));

        }




        public static String StringifyPhoneNumberSeperatedByCommas(System.Data.IDbConnection connection, List<int> customerIds)
        {

            List<CustomerRow> customers = GetCustomerList(connection, customerIds);

            return StringifyPhoneNumberSeperatedByCommas(customers);
        }

        public static HashSet<string> PhoneNumberList(List<CustomerRow> customers)
        {

            HashSet<string> phoneNumberSet = new HashSet<string>();

            foreach (CustomerRow customer in customers)
            {
                if (!String.IsNullOrEmpty(customer.PhoneNumber) && customer.PhoneNumber != "undefined")
                    phoneNumberSet.Add(customer.PhoneNumber);
            }

            return phoneNumberSet;

        }



        public static String StringifyPhoneNumberSeperatedByCommas(List<CustomerRow> customers)
        {

            HashSet<string> phoneNumberSet = new HashSet<string>();

            foreach (CustomerRow customer in customers)
            {
                if (!String.IsNullOrEmpty(customer.PhoneNumber) && customer.PhoneNumber != "undefined")
                    phoneNumberSet.Add(customer.PhoneNumber);
            }

            string[] phoneNumberStringSet = phoneNumberSet.ToArray();


            string phoneNumbers = "";

            if (phoneNumberStringSet != null && phoneNumberSet.Count >= 1)
                for (int x = 0; x < phoneNumberStringSet.Length; x++)
                {

                    if (String.IsNullOrEmpty(phoneNumbers))
                        phoneNumbers = phoneNumberStringSet[x];
                    else
                        phoneNumbers = String.Format("{0},{1}", phoneNumbers, phoneNumberStringSet[x]);

                }//Ends the for loop

            return phoneNumbers;
        }


        public static void CreateCustomerWithUserReference(SignUpRequest request, string accountID, List<LocationRow> locationList, System.Data.IDbConnection connection, out string username, out int userId)
        {
            string salt = null;
            var hash = UserRepository.GenerateHash(request.Password, ref salt);
            var displayName = request.FullName.TrimToEmpty();
            var email = request.Email;
            username = request.Email;


            var customerFld = CustomerRow.Fields;
            var customerId = (int)new SqlInsert(customerFld.TableName)
                              .Set(customerFld.FullName, request.FullName)
                               .Set(customerFld.Date, DateTime.Now)
                               .ExecuteAndGetID(connection);

            //Creates User
            var fld = UserRow.Fields;
            userId = (int)new SqlInsert(fld.TableName)
                    .Set(fld.Username, username)
                    .Set(fld.Source, "sign")
                    .Set(fld.DisplayName, displayName)
                    .Set(fld.Email, email)
                    .Set(fld.PasswordHash, hash)
                    .Set(fld.PasswordSalt, salt)
                    .Set(fld.IsActive, 0)
                    .Set(fld.InsertDate, DateTime.Now)
                    .Set(fld.InsertUserId, 1)
                    .Set(fld.LastDirectoryUpdate, DateTime.Now)
                    .Set(fld.AccountId, accountID)
                    .Set(fld.CustomerId, customerId)
                    .ExecuteAndGetID(connection);

            //Creates UserLocation
            foreach (LocationRow location in locationList)
            {
                CreateUserLocation(connection, userId, location);
            }

            var role = connection.Single<RoleRow>(new Criteria("AccountId") == accountID && new Criteria("RoleName") == RoleRow.ClientOfClient);
            
            //Creates UserRole
            var userRoleFlds = UserRoleRow.Fields;
            new SqlInsert(userRoleFlds.TableName)
                .Set(userRoleFlds.UserId, userId)
                .Set(userRoleFlds.RoleId, role.RoleId)
                .Execute(connection);
        }


        private static void CreateUserLocation(System.Data.IDbConnection connection, int userId, LocationRow location)
        {
            var userLocFlds = UserLocationRow.Fields;
            var userLocationID = (int)new SqlInsert(userLocFlds.TableName)
                .Set(userLocFlds.UserId, userId)
                .Set(userLocFlds.LocationId, location.LocationId)
                .ExecuteAndGetID(connection);
            
        }


        public static List<int> GetLocationIDs(IDbConnection connection, int userId)
        {
            List<int> ids = new List<int>();
            SqlText sql = new SqlText(connection, String.Format("SELECT LocationID FROM UsersLocations WHERE UserId = {0}", userId));

            using (IDataReader reader = sql.ExecuteReader())
            {
                while (reader.Read())
                {
                    ids.Add(Convert.ToInt32(reader["LocationID"]));
                }
            }

            return ids;

        }


    }
}