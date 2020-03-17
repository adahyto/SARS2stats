import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DATA_FEATURE_KEY, IVirusDataState } from './data.reducer';

const dataState = createFeatureSelector<IVirusDataState>(DATA_FEATURE_KEY);

export const getResponse = createSelector(dataState, (state: IVirusDataState) => state.apiResponse);
export const getStatistics = createSelector(dataState, (state: IVirusDataState) => state.statistics);
