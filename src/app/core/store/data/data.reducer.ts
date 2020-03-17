import { IApiResponse, IStatistics } from '../../models/data';
import { DataActions } from './data.actions';
import * as EVENTS from './data.events';

export const DATA_FEATURE_KEY = 'data';

export interface IVirusDataState {
    apiResponse: IApiResponse;
    statistics: IStatistics;
}

export interface IDataPartialState {
    readonly [DATA_FEATURE_KEY]: IVirusDataState;
}

const initialState: IVirusDataState = {
    apiResponse: null,
    statistics: null
};

export function dataReducer(state: IVirusDataState = initialState, action: DataActions): IVirusDataState {
    switch (action.type) {
        case EVENTS.DATA_ALL_RECEIVED: {
            const apiResponse: IApiResponse = action.payload;
            return Object.assign({}, state, { apiResponse });
        }
        case EVENTS.DATA_STATISTICS_RECEIVED: {
            const statistics: IStatistics = action.payload;
            return Object.assign({}, state, { statistics });
        }
        default:
            return state;
    }
}
