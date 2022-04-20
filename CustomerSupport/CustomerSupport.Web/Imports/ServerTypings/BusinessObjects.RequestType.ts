namespace CustomerSupport.BusinessObjects {
    export enum RequestType {
        Question = 1,
        Incident = 2,
        Problem = 3,
        Task = 4,
        Complain = 5,
        Request = 6,
        Transaction = 7
    }
    Serenity.Decorators.registerEnum(RequestType, 'BusinessObjects.RequestType');
}

