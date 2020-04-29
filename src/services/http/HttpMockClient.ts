import { AxiosRequestConfig } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { PLANS_ENDPOINT } from 'config/plans'
import plans from 'fixtures/plans'
import HttpClient from './HttpClient'

class HttpMockClient extends HttpClient {

  constructor () {
    super()

    new MockAdapter(this.http)
      .onGet(PLANS_ENDPOINT).reply(this.getPlans)
  }

  getPlans = (config: AxiosRequestConfig) => {
    return [
      200,
      {
        data: [...plans],
        total: plans.length
      }
    ]
  }
}

export default HttpMockClient
