namespace CustomerSupport.BusinessObjects {
    export enum CallDirection {
        Complain = 1,
        Request = 2,
        Enquiry = 3,
        Transaction = 4
    }
    Serenity.Decorators.registerEnum(CallDirection, 'BusinessObjects.CallDirection');
}

