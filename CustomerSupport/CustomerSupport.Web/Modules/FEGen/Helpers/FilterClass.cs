using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;

namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class FilterClass
    {


        private string classType;
        private string className;
        private ObjectParser objPrsr;
        public FilterClass(ObjectParser objPrsr, string classType, string className)
        {
            this.classType = classType;
            this.className = className;
            this.objPrsr = objPrsr;
        }


        public string GetClassDefinition(FilterObservable filterObserv, string kendoDataSource)
        {

            string clss = String.Format(
                @"
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    [

   export class {0} [

     protected filterObserv: kendo.data.ObservableObject;
     protected kendoDataSrc: kendo.data.DataSource;
     private bondClass: BondClass;
     public static MessengerClass: {0};



 constructor(bondClass: BondClass) [
    {0}.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                {1}

    ]




   protected GetFilterObservable() [
           return this.filterObserv;
       ]


   public GetFilterValues(): string\[\] [
       return this.GetFilterObservable().getRequestCriteriaObject();
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


            if (this.bondClass.BeforeRead('Filter-{0}', requestObj)) [
                {3}Service.List(requestObj,
                    res => [
                        this.bondClass.AfterRead('Filter-{0}', res);
                    ])
            ]

        ]//Ends the read method




     private KendoDataSourceRead_1(criteria: string\[\])
     [

            if (criteria.length >= 1) [

                var criteria_1 = (criteria.length == 1) ? criteria\[0\] : criteria
                if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', [ Criteria: criteria_1 ])) [
                    this.kendoDataSrc.read([ Criteria: criteria_1 ])
                ]

            ]
            else [
                if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', null)) [
                    this.kendoDataSrc.read()
                ]
            ]

        ]



       public KendoDataSourceRead()
       [
            this.KendoDataSourceRead_1(this.GetFilterValues())
       ]






{2}



public GetKendoDataSource(): kendo.data.DataSource [
    return this.kendoDataSrc;
]



]

]

",
                VariableNamings.GetFilterMessengerName(classType, className),
                filterObserv.GetObservable("Row", className),
                kendoDataSource,
                className
                
                );


            return ObjectParser.FormatOutput(clss);
        }

    }
}