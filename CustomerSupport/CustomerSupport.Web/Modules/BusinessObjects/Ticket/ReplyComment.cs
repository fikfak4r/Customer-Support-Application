using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using System.ComponentModel;


namespace CustomerSupport.BusinessObjects
{

    [EnumKey("ReplyComment")]
    public enum ReplyComment
    {
        //[Description("Starts ticket")]
        //StartsTicket = 1,

        [Description("Reply")]
        Reply = 1,

        [Description("Comment")]
        Comment = 2

    }



}