namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class SendSmsDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey() { return SendSmsForm.formKey }

        protected form = new SendSmsForm(this.idPrefix)
        private messageId:string = "0";
        private locationId:string = "0";
        private messageRef:any = "0"        


        constructor() {
            super();

            this.dialogTitle = "Please select some value";
            

              this.form.LocationId.changeSelect2(e => {
                  if(this.form.LocationId.value != "")
                        this.locationId = this.form.LocationId.value
                  else
                        this.locationId = "0"
            });


    

            this.messageRef = this.form.Message;
            // this.form.Message.changeSelect2(e => {
            //     if(this.form.Message.value != "")
            //         this.messageId = this.form.Message.value
            //     else
            //         this.messageId = "0"
            // });
            
        }


        get locationID(){
            return this.locationId;
        }

        get messageID(){
            return this.messageId;
        }

        get message()
        {
            return this.messageRef.value
        }

        get phoneNumbers()
        {
            if(this.form.LocationId.value != "")
                return this.form.PhoneNumber.value;
            else
                return "";
        }
       

    }
}