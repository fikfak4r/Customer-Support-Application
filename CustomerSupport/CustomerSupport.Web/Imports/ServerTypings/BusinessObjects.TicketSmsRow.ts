namespace CustomerSupport.BusinessObjects {
    export interface TicketSmsRow {
        TicketSmsId?: number;
        TicketId?: number;
        SmsId?: number;
        Sent?: boolean;
        Delivered?: boolean;
        UnDelivered?: boolean;
        TicketSmsDate?: string;
        TicketSmsMessage?: string;
        TicketLocationId?: number;
        TicketDate?: string;
        TicketCustomerId?: number;
        TicketCallDirection?: number;
        TicketProductId?: number;
        TicketType?: number;
        TicketPriority?: number;
        TicketStatus?: number;
        TicketGroupId?: number;
        TicketUserId?: number;
        TicketSubject?: string;
        TicketCreatorId?: number;
        TicketMe?: boolean;
        TicketPhoneNumber?: string;
        TicketNextFollowUpdate?: string;
        TicketFollowUpAction?: string;
    }

    export namespace TicketSmsRow {
        export const idProperty = 'TicketSmsId';
        export const localTextPrefix = 'BusinessObjects.TicketSms';
        export const lookupKey = 'BusinessObjects.TicketSms';

        export function getLookup(): Q.Lookup<TicketSmsRow> {
            return Q.getLookup<TicketSmsRow>('BusinessObjects.TicketSms');
        }

        export namespace Fields {
            export declare const TicketSmsId: string;
            export declare const TicketId: string;
            export declare const SmsId: string;
            export declare const Sent: string;
            export declare const Delivered: string;
            export declare const UnDelivered: string;
            export declare const TicketSmsDate: string;
            export declare const TicketSmsMessage: string;
            export declare const TicketLocationId: string;
            export declare const TicketDate: string;
            export declare const TicketCustomerId: string;
            export declare const TicketCallDirection: string;
            export declare const TicketProductId: string;
            export declare const TicketType: string;
            export declare const TicketPriority: string;
            export declare const TicketStatus: string;
            export declare const TicketGroupId: string;
            export declare const TicketUserId: string;
            export declare const TicketSubject: string;
            export declare const TicketCreatorId: string;
            export declare const TicketMe: string;
            export declare const TicketPhoneNumber: string;
            export declare const TicketNextFollowUpdate: string;
            export declare const TicketFollowUpAction: string;
        }

        ['TicketSmsId', 'TicketId', 'SmsId', 'Sent', 'Delivered', 'UnDelivered', 'TicketSmsDate', 'TicketSmsMessage', 'TicketLocationId', 'TicketDate', 'TicketCustomerId', 'TicketCallDirection', 'TicketProductId', 'TicketType', 'TicketPriority', 'TicketStatus', 'TicketGroupId', 'TicketUserId', 'TicketSubject', 'TicketCreatorId', 'TicketMe', 'TicketPhoneNumber', 'TicketNextFollowUpdate', 'TicketFollowUpAction'].forEach(x => (<any>Fields)[x] = x);
    }
}

