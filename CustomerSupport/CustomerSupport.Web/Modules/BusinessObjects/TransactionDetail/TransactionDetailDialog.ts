
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransactionDetailDialog extends Serenity.EntityDialog<TransactionDetailRow, any> {
        protected getFormKey() { return TransactionDetailForm.formKey; }
        protected getIdProperty() { return TransactionDetailRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }
        protected getService() { return TransactionDetailService.baseUrl; }

        protected form = new TransactionDetailForm(this.idPrefix);






        constructor() {
            super();

            this.form.ProductId.changeSelect2(e => {
                //this.form.UnitPrice.value = null;
                //this.form.Amount.value = null;
            })

       

            this.form.Quantity.change(e => {
                this.calculateAmount();
            })

            this.form.UnitPrice.change(e => {
                this.calculateAmount();
            })

            this.form.Discount.change(e => {
                this.calculateAmount();
            })

            

        }//Ends the constructor 








        private calculateAmount() {


            var uomAndPrice = Q.toId(this.form.UnitPrice);
            var quantity = this.form.Quantity.value;
            var discount = this.form.Discount.value;
            var unitPrice = this.form.UnitPrice.value;


           
                if (discount != undefined && discount != 0) {
                    var amount1 = (unitPrice * quantity)
                    var amount2 = (unitPrice * quantity) * (discount / 100)
                    this.form.Amount.value = amount1 - amount2;
                } else
                    this.form.Amount.value = unitPrice * quantity;
            

        }//Ends the calculateAmount



    }
}