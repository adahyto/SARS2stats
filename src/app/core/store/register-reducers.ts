import { ActionReducerMap } from '@ngrx/store';

import { dataReducer, IDataState } from './data/data.reducer';

export interface AppState {
    data: IDataState;
}

export const reducers: ActionReducerMap<AppState> = {
    data: dataReducer
};
