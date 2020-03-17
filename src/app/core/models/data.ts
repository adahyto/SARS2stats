export interface IApiResponse {
    error: boolean;
    statusCode: number;
    message: string;
    data: IData;
}

export interface IData {
    lastChecked: string;
    COVID19Stats: IRecord[];
}

export interface IRecord {
    province?: string;
    country: string;
    lastUpdate?: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    flag?: string;
    locale?: any;
}

export interface IStatistics {
    worldStats: IRecord;
    byRegion: IRecord[];
}

