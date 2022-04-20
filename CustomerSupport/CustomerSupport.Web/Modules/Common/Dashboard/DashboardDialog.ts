namespace CustomerSupport.BusinessObjects{
     @Serenity.Decorators.panel()
    export class DashboardDialog extends Serenity.EntityDialog<any, any>{
       
        protected getFormKey(){ return DashboardForm.formKey}

        private form = new DashboardForm(this.idPrefix);

        constructor(){
            super();
            this.element.addClass('flex-layout');
            
        }

        protected getToolbarButtons(): Serenity.ToolButton[]{
            var btns = []; //super.getToolbarButtons();
            btns.push({
                title : 'Refresh',
                cssClass : 'refresh-button',
                onClick: callMe
            })

        return btns;
        }

    }
}