import { Injectable } from '@angular/core';

import { IRecord } from '../models/data';
import { IData, IStatistics } from './../models/data';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    constructor() {}

    setStats(data: IData): IStatistics {
        return data
            ? {
                  byRegion: data.COVID19Stats,
                  worldStats: this.worldStats(data.COVID19Stats)
              }
            : {
                  byRegion: [],
                  worldStats: null
              };
    }

    worldStats(records: IRecord[]): IRecord {
        const worldStats: IRecord = {
            country: 'all',
            confirmed: 0,
            deaths: 0,
            recovered: 0
        };
        for (const key in records) {
            if (records.hasOwnProperty(key)) {
                worldStats.confirmed += records[key].confirmed;
                worldStats.deaths += records[key].deaths;
                worldStats.recovered += records[key].recovered;
            }
        }
        return worldStats;
    }
}
