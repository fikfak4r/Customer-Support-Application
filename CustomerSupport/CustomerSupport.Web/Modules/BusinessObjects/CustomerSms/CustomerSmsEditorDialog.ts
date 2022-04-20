
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerSmsEditorDialog extends Common.GridEditorDialog<CustomerSmsRow> {
        protected getFormKey() { return CustomerSmsForm.formKey; }
                protected getLocalTextPrefix() { return CustomerSmsRow.localTextPrefix; }
        protected form = new CustomerSmsForm(this.idPrefix);
    }
}