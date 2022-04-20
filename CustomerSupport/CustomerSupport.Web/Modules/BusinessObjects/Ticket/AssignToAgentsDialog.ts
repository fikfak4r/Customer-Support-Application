namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class AssignToAgentsDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey() { return AssignToAgentsForm.formKey }

        protected form = new AssignToAgentsForm(this.idPrefix)
        private groupId:string = "0";
        private locationId:string = "0";
        private userId:string = "0";


        constructor() {
            super();

            this.dialogTitle = "Please select some value";
            

              this.form.LocationId.changeSelect2(e => {
                  if(this.form.LocationId.value != "")
                        this.locationId = this.form.LocationId.value
                  else
                        this.locationId = "0"
            });

            this.form.GroupId.changeSelect2(e => {
                if(this.form.GroupId.value != "")
                    this.groupId = this.form.GroupId.value
                else
                    this.groupId = "0"
            });

              this.form.UserId.changeSelect2(e => {
                  if(this.form.UserId.value != "")
                        this.userId = this.form.UserId.value
                  else
                        this.userId = "0"
            });
            
        }

        get locationID(){
            return this.locationId;
        }

        get groupID(){
            return this.groupId;
        }

        get agentID(){
            return this.userId;
        }

       

    }
}