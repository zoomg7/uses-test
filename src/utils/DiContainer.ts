import { DiContainerInterface } from 'utils/types'
import { HttpClientInterface } from 'services/http/types'
import { HttpMockClient } from 'services/http'
import { PlansServiceInterface } from 'services/plans/types'
import { PlanService } from 'services/plans'
import { PlansStore } from 'store/plans'

class DiContainer implements DiContainerInterface {

  private _httpClient?: HttpClientInterface
  private _plansService?: PlansServiceInterface
  private _plansStore?: PlansStore

  get httpClient (): HttpClientInterface {
    if (!this._httpClient) {
      this._httpClient = new HttpMockClient()
    }
    return this._httpClient
  }

  get plansService (): PlansServiceInterface {
    if (!this._plansService) {
      this._plansService = new PlanService(this.httpClient)
    }
    return this._plansService
  }

  get plansStore (): PlansStore {
    if (!this._plansStore) {
      this._plansStore = new PlansStore(this.plansService)
    }
    return this._plansStore
  }

}

export default DiContainer
