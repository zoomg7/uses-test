import { AxiosRequestConfig } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { PLANS_ENDPOINT } from 'config/plans'
import plans from 'services/fixtures/plans'
import HttpClient from './HttpClient'
import { HttpStatus } from 'services/http/types'

class HttpMockClient extends HttpClient {

  constructor () {
    super()

    new MockAdapter(this.http)
      .onGet(PLANS_ENDPOINT).reply(this.getPlans)
  }

  getPlans = ({ params }: AxiosRequestConfig) => {
    let data = [...plans]

    console.log(params.filter)

    if (params && params.filter) {
      const { commodity, state } = params.filter
      if (commodity) {
        data = data.filter(item => item.commodity === commodity)
      }
      if (state) {
        data = data.filter(item => item.state === state)
      }
    }

    const total = data.length

    return [HttpStatus.OK, { data, total }]
  }
}

export default HttpMockClient
