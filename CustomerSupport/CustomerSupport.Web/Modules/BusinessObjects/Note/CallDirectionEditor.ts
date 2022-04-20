namespace CustomerSupport.BusinessObjects {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [CallDirectionEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class CallDirectionEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            // add option accepts a key (id) value and display text value
            this.addOption("In-coming-call", "In-coming call");
            this.addOption("Out-going-call", "Out-going call");
			this.addOption("Reply", "Reply");
			this.addOption("Comment", "Comment");
			this.addOption("Note", "Note");
			this.addOption("Complain", "Complain");

            
        }

        protected emptyItemText():string{
            return "Select an action";
        }

    }
}