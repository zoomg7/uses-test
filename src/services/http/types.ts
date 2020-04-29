export interface HttpClientInterface {
  get<TResponse> (url: string, params?: Object): Promise<TResponse>
}
