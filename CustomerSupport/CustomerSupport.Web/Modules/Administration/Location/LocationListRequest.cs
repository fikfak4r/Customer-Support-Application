using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;

namespace CustomerSupport.Modules
{
    public class LocationListRequest : ListRequest
    {
        public List<int> LocationList { get; set; }
    }
}