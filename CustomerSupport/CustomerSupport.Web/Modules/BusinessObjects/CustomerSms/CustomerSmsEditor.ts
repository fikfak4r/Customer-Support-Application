
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CustomerSmsEditor extends Common.GridEditorBase<CustomerSmsRow> {
        protected getColumnsKey() { return 'BusinessObjects.CustomerSms'; }
        protected getDialogType() { return CustomerSmsEditorDialog; }
                protected getLocalTextPrefix() { return CustomerSmsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}