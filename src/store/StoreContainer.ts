import { HttpClientInterface } from 'services/http/types'
import { HttpMockClient } from 'services/http'
import { PlansServiceInterface } from 'services/plans/types'
import { PlanService } from 'services/plans'
import { PlansStore } from 'store/plans'
import { StoreContainerInterface } from 'store/types'

class StoreContainer implements StoreContainerInterface {

  private _httpClient?: HttpClientInterface
  private _plansService?: PlansServiceInterface
  private _plansStore?: PlansStore

  get plansStore (): PlansStore {
    if (!this._plansStore) {
      this._plansStore = new PlansStore(this.plansService)
    }
    return this._plansStore
  }

  private get httpClient (): HttpClientInterface {
    if (!this._httpClient) {
      this._httpClient = new HttpMockClient()
    }
    return this._httpClient
  }

  private get plansService (): PlansServiceInterface {
    if (!this._plansService) {
      this._plansService = new PlanService(this.httpClient)
    }
    return this._plansService
  }
}

export default StoreContainer
