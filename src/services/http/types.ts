export enum HttpStatus {
  OK = 200
}

export interface HttpClientInterface {
  get<TResponse> (url: string, params?: Object): Promise<TResponse>
}
