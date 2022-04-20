
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KbCategoryLocationsDialog extends Serenity.EntityDialog<KbCategoryLocationsRow, any> {
        protected getFormKey() { return KbCategoryLocationsForm.formKey; }
        protected getIdProperty() { return KbCategoryLocationsRow.idProperty; }
        protected getLocalTextPrefix() { return KbCategoryLocationsRow.localTextPrefix; }
        protected getService() { return KbCategoryLocationsService.baseUrl; }

        protected form = new KbCategoryLocationsForm(this.idPrefix);

    }
}