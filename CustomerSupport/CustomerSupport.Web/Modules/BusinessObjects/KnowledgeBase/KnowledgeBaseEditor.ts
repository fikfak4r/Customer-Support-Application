
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KnowledgeBaseEditor extends Common.GridEditorBase<KnowledgeBaseRow> {
        protected getColumnsKey() { return 'BusinessObjects.KnowledgeBase'; }
        protected getDialogType() { return KnowledgeBaseEditorDialog; }
                protected getLocalTextPrefix() { return KnowledgeBaseRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
    
        }

       protected addButtonClick(){
            alert('add')
        }

protected onclick(ev: MouseEvent){
    alert('Yep')
}


            protected getAddButtonCaption():string{
                return "New knowledge base";
            }

    }
}