import { PlanCollection, PlanServiceInterface } from 'services/plans/types'
import { HttpClientInterface } from 'services/http/types'

class PlanService implements PlanServiceInterface {

  private readonly http: HttpClientInterface

  constructor (http: HttpClientInterface) {
    this.http = http
  }

  public async fetchAll (): Promise<PlanCollection> {
    const { data } = await this.http.get('/plans', {
      // params: {a: 1000}
    })

    return data
  }

}

export default PlanService
