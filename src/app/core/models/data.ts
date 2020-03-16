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
  province?: string;
  country: string;
  lastUpdate: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}
