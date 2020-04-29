import { PlansCollection, PlansServiceInterface } from 'services/plans/types'
import { HttpClientInterface } from 'services/http/types'

class PlansService implements PlansServiceInterface {

  private readonly http: HttpClientInterface

  constructor (http: HttpClientInterface) {
    this.http = http
  }

  public async fetchAll (): Promise<PlansCollection> {
    const { data } = await this.http.get('/plans', {
      // params: {a: 1000}
    })

    return data
  }

}

export default PlansService
