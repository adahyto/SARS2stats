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
                  worldStats: this.worldStats(data.covid19Stats),
                  byCountry: this.statsByCountry(data.covid19Stats)
              }
            : {
                  lastUpdated: 'no data',
                  byRegion: [],
                  worldStats: null,
                  byCountry: []
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

    statsByCountry(records: IRecord[]) {
        let byCountry: IRecord[] = [];
        records.forEach(rec => {
            const ifExists: IRecord[] = byCountry.filter(countryRec => countryRec.country === rec.country);
            if (!ifExists[0]) {
                byCountry.push({
                    country: rec.country,
                    confirmed: rec.confirmed,
                    deaths: rec.deaths,
                    recovered: rec.recovered
                });
            } else {
                byCountry = byCountry.map((datum: IRecord) =>
                    datum.country === ifExists[0].country
                        ? {
                              country: ifExists[0].country,
                              confirmed: ifExists[0].confirmed + rec.confirmed,
                              deaths: ifExists[0].deaths + rec.deaths,
                              recovered: ifExists[0].deaths + rec.recovered
                          }
                        : datum
                );
            }
        });
        return byCountry;
    }
}
