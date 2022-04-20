namespace CustomerSupport.BusinessObjects {
    export interface AssignToAgentsResponse extends Serenity.ServiceResponse {
        Reply?: string;
        LocationId?: number;
        GroupId?: number;
        AgentId?: number;
        TicketIds?: number[];
    }
}

