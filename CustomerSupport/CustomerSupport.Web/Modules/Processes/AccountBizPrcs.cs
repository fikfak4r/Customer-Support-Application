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
    public class AccountBizPrcs
    {

        public static List<int> GetLocationIDs(IDbConnection connection, int accountId)
        {
            List<int> ids = new List<int>();
            SqlText sql = new SqlText(connection, String.Format("SELECT LocationID FROM Locations WHERE AccountID = {0}", accountId));

            using (IDataReader reader = sql.ExecuteReader())
            {
                while (reader.Read())
                {
                    ids.Add(Convert.ToInt32(reader["LocationID"]));
                }
            }

            return ids;

        }


        public static String GetLocationIDsAsString(IDbConnection connection, int accountId)
        {
            String ids = "";
            SqlText sql = new SqlText(connection, String.Format("SELECT LocationID FROM Locations WHERE AccountID = {0}", accountId));

            using (IDataReader reader = sql.ExecuteReader())
            {
                if (reader.Read())
                    ids = reader["LocationID"].ToString();

                while (reader.Read())
                {
                    ids += ", " + reader["LocationID"].ToString();
                }
            }

            return ids;

        }

    }
}