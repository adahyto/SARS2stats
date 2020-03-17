import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DATA_FEATURE_KEY, IDataState } from './data.reducer';

const dataState = createFeatureSelector<IDataState>(DATA_FEATURE_KEY);

export const getAllData = createSelector(dataState, (state: IDataState) => state.virusData);
