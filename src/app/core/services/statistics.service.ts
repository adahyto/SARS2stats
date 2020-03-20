import { Injectable } from '@angular/core';

import { IData, IRecord, IStatistics } from './../models/data';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    constructor() {}

    setStats(data: IData): IStatistics {
        this.byRegion(data.covid19Stats);
        return data
            ? {
                  lastUpdated: data.lastChecked.replace('T', ' '),
                  byRegion: this.byRegion(data.covid19Stats),
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

    byRegion(records: IRecord[]): IRecord[] {
        return records.map(rec => this.newRec(rec, true));
    }

    worldStats(records: IRecord[]): IRecord {
        const worldStats: IRecord = {
            country: 'all',
            confirmed: 0,
            deaths: 0,
            recovered: 0,
            lastUpdate: ''
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
                byCountry.push(this.newRec(rec));
            } else {
                byCountry = byCountry.map((datum: IRecord) =>
                    datum.country === ifExists[0].country ? this.bindRec(ifExists[0], rec) : datum
                );
            }
        });
        return byCountry;
    }

    newRec(rec: IRecord, province = false): IRecord {
        return province
            ? {
                  country: rec.country,
                  province: rec.province,
                  confirmed: rec.confirmed,
                  deaths: rec.deaths,
                  recovered: rec.recovered,
                  lastUpdate: rec.lastUpdate.replace('T', ' ')
              }
            : {
                  country: rec.country,
                  confirmed: rec.confirmed,
                  deaths: rec.deaths,
                  recovered: rec.recovered,
                  lastUpdate: rec.lastUpdate.replace('T', ' ')
              };
    }

    bindRec(old: IRecord, toAdd: IRecord): IRecord {
        return {
            country: old.country,
            confirmed: old.confirmed + toAdd.confirmed,
            deaths: old.deaths + toAdd.deaths,
            recovered: old.deaths + toAdd.recovered,
            lastUpdate: old.lastUpdate
        };
    }
}
