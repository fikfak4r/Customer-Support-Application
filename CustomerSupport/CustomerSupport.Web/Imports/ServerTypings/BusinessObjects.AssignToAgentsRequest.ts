namespace CustomerSupport.BusinessObjects {
    export interface AssignToAgentsRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        GroupId?: number;
        AgentId?: number;
        TicketIds?: number[];
    }
}

