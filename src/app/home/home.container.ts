import { Injector } from '@angular/core';
import { Subscription } from 'rxjs';

import { IData, IStatistics } from '../core/models/data';
import { StatisticsService } from '../core/services/statistics.service';
import { DataFacade } from './../core/store/data/data.facade';

export class HomeContainer {
    subscriptions = new Subscription();
    dataFacade: DataFacade;
    statisticsService: StatisticsService;
    statistics: IStatistics;

    constructor(injector: Injector) {
        this.dataFacade = injector.get(DataFacade);
        this.subscriptions.add(
            this.dataFacade.Data$.subscribe((res: IData) => {
                this.statistics = this.statisticsService.setStats(res);
            })
        );
    }
}
