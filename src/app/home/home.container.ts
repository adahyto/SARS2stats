import { Injector } from '@angular/core';
import { Subscription } from 'rxjs';

import { IStatistics } from '../core/models/data';
import { StatisticsService } from '../core/services/statistics.service';
import { DataFacade } from './../core/store/data/data.facade';

export class HomeContainer {
    subscriptions = new Subscription();
    dataFacade: DataFacade;
    statisticsService: StatisticsService;
    updated: string;
    statistics: IStatistics;

    constructor(injector: Injector) {
        this.dataFacade = injector.get(DataFacade);
        this.subscriptions.add(
            this.dataFacade.ResponseData$.subscribe(res => {
                if (res) {
                    this.dataFacade.calculateStatistics(res.data);
                }
            })
        );
        this.subscriptions.add(this.dataFacade.Statistics$.subscribe(stats => (this.statistics = stats)));
    }
}
