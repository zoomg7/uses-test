import { HttpClientInterface } from 'services/http/types'
import { PlansServiceInterface } from 'services/plans/types'
import PlansStore from 'store/plans/PlansStore'

export interface DiContainerInterface {
  readonly httpClient: HttpClientInterface
  readonly plansService: PlansServiceInterface
  readonly plansStore: PlansStore
}
