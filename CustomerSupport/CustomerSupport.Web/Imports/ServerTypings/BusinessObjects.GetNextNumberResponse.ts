﻿namespace CustomerSupport.BusinessObjects {
    export interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}

