namespace CustomerSupport.BusinessObjects {
    export enum Priority {
        Low = 1,
        Normal = 2,
        High = 3,
        Urgent = 4
    }
    Serenity.Decorators.registerEnum(Priority, 'BusinessObjects.Priority');
}

