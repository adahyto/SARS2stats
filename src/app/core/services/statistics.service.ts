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
                  lastUpdated: data.lastChecked,
                  byRegion: data.covid19Stats,
                  worldStats: this.worldStats(data.covid19Stats)
              }
            : {
                  lastUpdated: 'no data',
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
