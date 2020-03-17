import { ActionReducerMap } from '@ngrx/store';

import { dataReducer, IVirusDataState } from './data/data.reducer';

export interface AppState {
    data: IVirusDataState;
}

export const reducers: ActionReducerMap<AppState> = {
    data: dataReducer
};
