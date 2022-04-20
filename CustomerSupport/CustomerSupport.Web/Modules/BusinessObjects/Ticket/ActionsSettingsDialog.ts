namespace CustomerSupport.BusinessObjects{

    @Serenity.Decorators.registerClass()
    export class ActionsSettingsDialog extends Serenity.PropertyDialog<any, any>{

        protected getFormKey() { return ActionsSettingsForm.formKey }
        
        protected form = new ActionsSettingsForm(this.idPrefix)
        private groupId:string = "0";
        private locationId:string = "0";
        private userId:string = "0";
        private typeId:string = "0"
        private statusId:string = "0"
        private priorityId:string = "0";

        constructor(){
            super();

            this.dialogTitle = "Please select some value";
            

              this.form.Type.changeSelect2(e => {
                  if(this.form.Type.value != "")
                        this.typeId = this.form.Type.value
                  else
                        this.typeId = "0"
            });


              this.form.Status.changeSelect2(e => {
                  if(this.form.Status.value != "")
                        this.statusId = this.form.Status.value
                  else
                        this.statusId = "0"
            });


              this.form.Priority.changeSelect2(e => {
                  if(this.form.Priority.value != "")
                        this.priorityId = this.form.Priority.value
                  else
                        this.priorityId = "0"
            });

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


        get typeID(){
            return this.typeId;
        }

        get statusID(){
            return this.statusId;
        }

        get priorityID(){
            return this.priorityId;
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