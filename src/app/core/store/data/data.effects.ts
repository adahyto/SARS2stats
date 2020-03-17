import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import * as actions from './data.actions';
import * as EVENTS from './data.events';
import { StatisticsService } from '../../services/statistics.service';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataEffects {
    constructor(
        private dataService: DataService,
        private statisticsService: StatisticsService,
        private actions$: Actions
    ) {}

    @Effect() fetchAllData = this.actions$.pipe(
        ofType<actions.DataAllRequestAction>(EVENTS.DATA_ALL_REQUESTED),
        switchMap(() =>
            this.dataService.getAllCountriesData().pipe(map(response => new actions.DataAllResponseAction(response)))
        )
    );

    @Effect() setStatistics = this.actions$.pipe(
        ofType<actions.DataStatisticsRequestAction>(EVENTS.DATA_STATISTICS_REQUESTED),
        switchMap(({ data }) =>
            of(this.statisticsService.setStats(data)).pipe(
                map(response => new actions.DataStatisticsResponseAction(response))
            )
        )
    );
}
