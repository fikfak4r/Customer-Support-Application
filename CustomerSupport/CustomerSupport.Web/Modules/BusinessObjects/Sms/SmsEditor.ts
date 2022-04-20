
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SmsEditor extends Common.GridEditorBase<SmsRow> {
        protected getColumnsKey() { return 'BusinessObjects.Sms'; }
        protected getDialogType() { return SmsEditorDialog; }
                protected getLocalTextPrefix() { return SmsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}