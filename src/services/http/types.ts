export enum HttpStatus {
  OK = 200,
  SERVER_ERROR = 500
}

export interface HttpClientInterface {
  get<TResponse> (url: string, params?: Object): Promise<TResponse>
}
