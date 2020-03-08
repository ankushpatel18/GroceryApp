export interface ServiceResponse {
    result: string;
    payload: any;
    error?: string;
}

export interface Action {
    type: string;
    payload: any;
    error?: string
}

export enum LoggingLevel {
    ERROR = 0,
    INFO = 1,
    WARNING = 2,
    VERBOSE = 3,
    DEBUG = 4
};

export interface SaveOrder{
    product: any,
    totalAmount: string,
    orderStatus: string
}
