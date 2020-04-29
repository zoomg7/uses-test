import { DiContainerInterface } from 'utils/types'
import { HttpClientInterface } from 'services/http/types'
import { HttpMockClient } from 'services/http'
import { PlanServiceInterface } from 'services/plans/types'
import { PlanService } from 'services/plans'

class DiContainer implements DiContainerInterface {

  private client?: HttpClientInterface
  private plan?: PlanServiceInterface

  get httpClient (): HttpClientInterface {
    if (!this.client) {
      this.client = new HttpMockClient()
    }
    return this.client
  }

  get planService (): PlanServiceInterface {
    if (!this.plan) {
      this.plan = new PlanService(this.httpClient)
    }
    return this.plan
  }
}

export default DiContainer
