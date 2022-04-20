
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KbCategoryDialog extends Serenity.EntityDialog<KbCategoryRow, any> {
        protected getFormKey() { return KbCategoryForm.formKey; }
        protected getIdProperty() { return KbCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return KbCategoryRow.localTextPrefix; }
        protected getNameProperty() { return KbCategoryRow.nameProperty; }
        protected getService() { return KbCategoryService.baseUrl; }

        protected form = new KbCategoryForm(this.idPrefix);

    }
}