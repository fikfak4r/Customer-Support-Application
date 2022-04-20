namespace CustomerSupport.BusinessObjects {
    export interface ActionsSettingsRequest extends Serenity.ServiceRequest {
        Priority?: number;
        Status?: number;
        Type?: number;
        LocationId?: number;
        GroupId?: number;
        AgentId?: number;
        TicketIds?: number[];
    }
}

