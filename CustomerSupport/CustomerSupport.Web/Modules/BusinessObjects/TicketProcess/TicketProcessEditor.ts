
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TicketProcessEditor extends Common.GridEditorBase<TicketProcessRow> {
        protected getColumnsKey() { return 'BusinessObjects.TicketProcess'; }
        protected getDialogType() { return TicketProcessEditorDialog; }
                protected getLocalTextPrefix() { return TicketProcessRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
            
           
        }
        private _isReply: boolean;

        protected addButtonClick(){
            alert('add')
            this._isReply = true;
            
        }
protected onclick(ev: MouseEvent){
    alert('Yep')
}

          protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            var fld = BusinessObjects.TicketProcessRow.Fields

            // adding a specific css class to UnitPrice column, 
            // to be able to format cell with a different background
            //Q.first(columns, x => x.field == fld.Description).cssClass += " fld-subscription";

            return columns;
        }

 protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.rowHeight = 90;
            
            //opt.autoHeight=true

            return opt;
        }

    // protected getItemCssClass(item: BusinessObjects.TicketProcessRow, index: number): string {
    //         let klass: string = " fld-subscription-one";


    //         return Q.trimToNull(klass);
    //     }

            protected getAddButtonCaption():string{
                
                return "Reply";
            }

        protected getButtons():Serenity.ToolButton[]{
            var btns = super.getButtons();
			$("#CustomerSupport_BusinessObjects_TicketThreadDialog37_TicketProcess > div.grid-container > div.slick-pane > div.slick-viewport > div > div a").css("font-size","50px")
            // btns.push({
            //     cssClass:'add-note-button',
            //     title:'Internal note',
            //     onClick:() => {
            //          this._isReply = false;
            //         this.editItem(<TicketProcessRow>{
            //                 ReplyComment: ReplyComment.Comment
            //         });  
                     
            //     }
            // })

            return btns;
            
        }

        protected validateEntity(row: TicketProcessRow, id: number) {
if (!super.validateEntity(row, id))
return false;
if(row.ReplyComment == ReplyComment.Comment)
row.ReplyComment = ReplyComment.Comment
else
 row.ReplyComment = ReplyComment.Reply

//row.UserUsername = Authorization.userDefinition.Username;


Q.notifyInfo("Please click the Update button to save to Database")

return true;
}




    }
}