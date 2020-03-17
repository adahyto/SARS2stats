import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as actions from './data.actions';
import { IDataPartialState } from './data.reducer';
import * as selectors from './data.selectors';

@Injectable()
export class DataFacade {
    Data$ = this.store.pipe(select(selectors.getAllData));

    constructor(private store: Store<IDataPartialState>) {}

    fetchData = (): void => {
      this.store.dispatch(new actions.DataAllRequestAction());
    }

}
