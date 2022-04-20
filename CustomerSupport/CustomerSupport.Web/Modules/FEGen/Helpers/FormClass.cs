using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;

namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class FormClass
    {


        private string classType;
        private string className;
        private ObjectParser objPrsr;
        public FormClass(ObjectParser objPrsr, string classType, string className)
        {
            this.classType = classType;
            this.className = className;
            this.objPrsr = objPrsr;
        }




        public string GetClassDefinition(string primaryKey, Observable observ, string kendoDataSource)
        {
            string clss = String.Format(
                @"
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    [

   export class {2} [

 protected observ: kendo.data.ObservableObject;
 protected filterObserv: kendo.data.ObservableObject;
 protected kendoDataSrc: kendo.data.DataSource;
 protected {0}: number;
 private bondClass: any;
 public static MessengerClass: {2};

 constructor(bondClass: any) [
    {2}.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                {1}

    ]



  public GetObservable() [
            return this.observ;
        ]



        public Read(criteria: string, equalityFilter: string, includeColumns: string\[\]) [

            var requestObj = null;

            if (criteria != undefined) [
                requestObj = [ Criteria: criteria, IncludeColumns: includeColumns ];
            ]
            else if (equalityFilter != undefined) [
                requestObj = [ EqualityFilter: equalityFilter, IncludeColumns: includeColumns ];
            ]
            else [
                requestObj = [ IncludeColumns: includeColumns ];
            ]


            if (this.bondClass.BeforeRead('{2}', requestObj)) [
                {3}Service.List(requestObj,
                    res => [
                        this.bondClass.AfterRead('{2}', res);
                    ])
            ]

        ]




        public DetailLoad(entityId: number) [
            if (this.bondClass.BeforeDetailLoad('{2}', entityId)) [
                {3}Service.Retrieve([ EntityId: entityId ],
                    res => [
                        this.GetObservable().setObject(res)
                        this.bondClass.AfterDetailLoad('{2}', res.Entity);
                    ],
                    [ blockUI: false, onError: response => [ this.bondClass.OnError('{2}', 'DetailLoad', response) ] ]
                )
            ]
        ]


   public Create()[
if (this.bondClass.BeforeSave('{2}', this))
this.observ.submit();
]



        public Update() [
            if(this.bondClass.BeforeUpdate('{2}', this))
                {3}Service.Update([ Entity: this.GetObject() ], res => [ alert('Update successful'); this.bondClass.AfterUpdate('{2}', this.GetObject()) ])
        ]




public GetPrimaryKeyId():number[return this.observ.get('{0}')]

    public GetObject(): {3}Row [
            var obj = this.observ.getObject();
            var obj_1 = <BusinessObjects.{3}Row>([
                {4}
            ]);
            return obj_1;
        ]


{5}




public GetKendoDataSource(): kendo.data.DataSource [
    return this.kendoDataSrc;
]



]

]

",              
                
                primaryKey, 
                observ.GetObservable(classType, className),
                VariableNamings.GetFirstLevelMessengerName(classType, className),
                className,
                observ.GetClassRowObj(),
                kendoDataSource

                );


            return ObjectParser.FormatOutput(clss);
        }

    }
}