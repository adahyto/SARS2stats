export interface IApiResponse {
    error: boolean;
    statusCode: number;
    message: string;
    data: IData;
}

export interface IData {
    lastChecked: string;
    covid19Stats: IRecord[];
}

export interface IRecord {
    country: string;
    province?: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    lastUpdate?: string;
}

export interface IStatistics {
    lastUpdated?: string;
    worldStats: IRecord;
    byRegion: IRecord[];
    byCountry: IRecord[];
}
