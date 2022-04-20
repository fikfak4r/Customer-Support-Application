namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class NoteDialog extends Serenity.TemplatedDialog<any> {

        private textEditor: Serenity.HtmlContentEditor;
        private callDirectionEditor: BusinessObjects.CallDirectionEditor;
        constructor() {
            super();

            this.textEditor = new Serenity.HtmlNoteContentEditor(this.byId('Text'));
            this.callDirectionEditor = new CallDirectionEditor(this.byId('CallDirection'));

        }
//"<select style='padding:3px;margin-bottom:12px'><option value=''>Select action</option><option value='In-coming'>In-coming</option><option value='Out-going'>Out-going</option></select>"+
        protected getTemplate() {
            return (
                "<form id='~_Form' class='s-Form'>" +
                    "<input id='~_CallDirection' class='required' />" +
                    "<div style='padding:6px'></div>" +
                    "<textarea id='~_Text' class='required' style='margin-top:6px'></textarea>" +
                "</form>");
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();

            opt.buttons = [{
                text: Q.text('Dialogs.OkButton'),
                click: () => {
                    if (!this.validateForm()) {
                        return;
                    }

                    this.okClick && this.okClick();
                }
            }, {
                    text: Q.text('Dialogs.CancelButton'),
                    click: () => this.dialogClose()
                }
            ];

            return opt;
        }


        get text(): string {
            return this.textEditor.value;
        }

        set text(value: string) {
            this.textEditor.value = value;
        }


        get callDirection()
        {
            return this.callDirectionEditor.value
        }

        set callDirection(value: string){
            this.callDirectionEditor.value = value
        }

        public okClick: () => void;
    }
}