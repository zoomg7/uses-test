import { PlansCollection, PlansFilter, PlansServiceInterface } from 'services/plans/types'
import { HttpClientInterface } from 'services/http/types'

class PlansService implements PlansServiceInterface {

  private readonly http: HttpClientInterface

  constructor (http: HttpClientInterface) {
    this.http = http
  }

  public async fetchAll (filter?: PlansFilter): Promise<PlansCollection> {
    const { data } = await this.http.get('/plans', { filter })

    return data
  }

}

export default PlansService
