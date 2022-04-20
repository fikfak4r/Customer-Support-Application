namespace CustomerSupport.BusinessObjects {
    export enum Status {
        Open = 1,
        Pending = 2,
        Resolved = 3,
        Closed = 4,
        WaitingOnCustomer = 5,
        WaitingOnThirdParty = 6
    }
    Serenity.Decorators.registerEnum(Status, 'BusinessObjects.Status');
}

