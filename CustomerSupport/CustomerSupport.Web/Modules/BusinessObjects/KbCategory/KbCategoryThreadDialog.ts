
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KbCategoryThreadDialog extends Serenity.EntityDialog<KbCategoryRow, any> {
        protected getFormKey() { return KbCategoryThreadForm.formKey; }
        protected getIdProperty() { return KbCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return KbCategoryRow.localTextPrefix; }
        protected getNameProperty() { return KbCategoryRow.nameProperty; }
        protected getService() { return KbCategoryService.baseUrl; }

        protected form = new KbCategoryForm(this.idPrefix);

    }
}