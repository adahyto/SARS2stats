import { IData } from '../../models/data';
import { DataActions } from './data.actions';
import * as EVENTS from './data.events';

export const DATA_FEATURE_KEY = 'data';

export interface IDataState {
    virusData: IData;
}

export interface IDataPartialState {
    readonly [DATA_FEATURE_KEY]: IDataState;
}

export const initialState: IDataState = {
    virusData: null
};

export function dataReducer(state: IDataState = initialState, action: DataActions): IDataState {
    switch (action.type) {
        case EVENTS.DATA_ALL_RECEIVED: {
            const virusData: IData = action.payload.data;
            return Object.assign({}, state, { virusData });
        }
        default:
            return state;
    }
}
