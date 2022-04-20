
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SmsLocationEditor extends Common.GridEditorBase<SmsLocationRow> {
        protected getColumnsKey() { return 'BusinessObjects.SmsLocation'; }
        protected getDialogType() { return SmsLocationEditorDialog; }
                protected getLocalTextPrefix() { return SmsLocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}