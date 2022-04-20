
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KnowledgeBaseLocationsEditor extends Common.GridEditorBase<KnowledgeBaseLocationsRow> {
        protected getColumnsKey() { return 'BusinessObjects.KnowledgeBaseLocations'; }
        protected getDialogType() { return KnowledgeBaseLocationsEditorDialog; }
                protected getLocalTextPrefix() { return KnowledgeBaseLocationsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}