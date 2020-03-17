import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { IData } from '../../models/data';
import * as actions from './data.actions';
import { IDataPartialState } from './data.reducer';
import * as selectors from './data.selectors';

@Injectable()
export class DataFacade {
    ResponseData$ = this.store.pipe(select(selectors.getResponse));
    Statistics$ = this.store.pipe(select(selectors.getStatistics));

    constructor(private store: Store<IDataPartialState>) {}

    fetchData = (): void => {
        this.store.dispatch(new actions.DataAllRequestAction());
    }

    calculateStatistics = (data: IData): void => {
        this.store.dispatch(new actions.DataStatisticsRequestAction(data));
    }
}
