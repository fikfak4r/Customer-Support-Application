using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using System.ComponentModel;


namespace CustomerSupport.BusinessObjects
{

    [EnumKey("ReplyCommentStart")]
    public enum ReplyCommentStart
    {
        [Description("Starts ticket")]
        StartsTicket = 1,

        [Description("Reply")]
        Reply = 2,

        [Description("Comment")]
        Comment = 3

    }



}