// namespace CustomerSupport.BusinessObjects{

//      @Serenity.Decorators.registerClass()
//     export class ForwardAsMailDialog extends Serenity.PropertyDialog<any, any>{

//         protected getFormKey(){ ForwardAsMailForm.formKey; }

//         protected form = new ForwardAsMailForm(this.idPrefix);
//         constructor(){
//             super();
//         }

//     }
// }

namespace CustomerSupport.BusinessObjects{

    @Serenity.Decorators.registerClass()
    export class ForwardAsMailDialog extends Serenity.PropertyDialog<any, any>{

        protected getFormKey() { return ForwardAsMailForm.formKey }
        
        protected form = new ForwardAsMailForm(this.idPrefix)

        constructor(){
            super();
        }
    }

}