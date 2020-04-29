import axios, { AxiosInstance } from 'axios'
import { HttpClientInterface } from 'services/http/types'

class HttpClient implements HttpClientInterface{
  protected http: AxiosInstance

  constructor () {
    this.http = axios.create()
  }

  get<TResponse> (url: string, params: Object = {}): Promise<TResponse> {
    return this.http.get(url, { params })
  }
}

export default HttpClient
