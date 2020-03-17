import { Action } from '@ngrx/store';

import { IApiResponse } from '../../models/data';
import * as EVENTS from './data.events';

export class DataAllRequestAction implements Action {
    readonly type = EVENTS.DATA_ALL_REQUESTED;
    constructor() {}
}

export class DataAllResponseAction implements Action {
    readonly type = EVENTS.DATA_ALL_RECEIVED;
    constructor(public payload: IApiResponse) {}
}

export type DataActions = DataAllRequestAction | DataAllResponseAction;
