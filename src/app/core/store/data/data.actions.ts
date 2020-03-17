import { Action } from '@ngrx/store';

import { IApiResponse, IStatistics, IData } from '../../models/data';
import * as EVENTS from './data.events';

export class DataAllRequestAction implements Action {
    readonly type = EVENTS.DATA_ALL_REQUESTED;
    constructor() {}
}

export class DataAllResponseAction implements Action {
    readonly type = EVENTS.DATA_ALL_RECEIVED;
    constructor(public payload: IApiResponse) {}
}

export class DataStatisticsRequestAction implements Action {
    readonly type = EVENTS.DATA_STATISTICS_REQUESTED;
    constructor(public data: IData) {}
}

export class DataStatisticsResponseAction implements Action {
    readonly type = EVENTS.DATA_STATISTICS_RECEIVED;
    constructor(public payload: IStatistics) {}
}

export type DataActions =
    | DataAllRequestAction
    | DataAllResponseAction
    | DataStatisticsRequestAction
    | DataStatisticsResponseAction;
