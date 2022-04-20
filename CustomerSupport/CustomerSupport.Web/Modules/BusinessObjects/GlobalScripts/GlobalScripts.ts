namespace CustomerSupport.BusinessObjects {
    export class GlobalScripts{

        public static Ticket_Read: string = "Customer Support:Ticket:Read";
        public static Ticket_Insert: string = "Customer Support:Ticket:Insert";
        public static Ticket_Update: string = "Customer Support:Ticket:Update";
        public static Ticket_Delete: string = "Customer Support:Ticket:Delete";

        public static Transaction_Read: string = "Customer Support:Transaction:Read";
        public static Transaction_Insert: string = "Customer Support:Transaction:Insert";
        public static Transaction_Update: string = "Customer Support:Transaction:Update";
        public static Transaction_Delete: string = "Customer Support:Transaction:Delete";

        public static Sms_Read: string = "Customer Support:Sms:Read";
        public static Sms_Insert: string = "Customer Support:Sms:Insert";
        public static Sms_Update: string = "Customer Support:Sms:Update";

        public static Customer_Read: string = "Customer Support:Customer:Read";
        public static Customer_Insert: string = "Customer Support:Customer:Insert";
        public static Customer_Update: string = "Customer Support:Customer:Update";
        public static Customer_Delete: string = "Customer Support:Customer:Delete";

        public static TicketId: number = 0;
        public static TransactionId: number = 0;
        public static CustomerId: number = 0;
        

        /**
         *  GetType
         */
        public static  GetRequestType() {
        
            return [{text:"Enquiry", value:1},
            {text:"Incident", value:2},
            {text:"Problem", value:3},
            {text:"Task", value:4},
            {text:"Complain", value:5},
            {text:"Request", value:6},
            {text:"Transaction", value:7}]
        }

        public static  GetPriority() {

            return [{text:"Low", value:1},
            {text:"Normal", value:2},
            {text:"High", value:3},
            {text:"Urgent", value:4},
            ]
        }

        public static GetStatus(){

            return [{text:"Open", value:1},
            {text:"Pending", value:2},
            {text:"Resolved", value:3},
            {text:"Closed", value:4},
            {text:"Waiting on customer", value:5},
            {text:"Waiting on third party", value:6},
            ]
        }


        public static GetGender() {

            return [{ text: "Female", value: 1 },
                { text: "Male", value: 2 },
            ]
        }

        public static GetVal(arr: any, val: number): string {
            
            for (var x = 0; x < arr.length; x++) {
                if (arr[x].value == val)
                    return arr[x].text
            }

            return "N/A"
        }

    }
}