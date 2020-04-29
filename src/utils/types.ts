import { HttpClientInterface } from 'services/http/types'
import { PlanServiceInterface } from 'services/plans/types'

export interface DiContainerInterface {
  readonly httpClient: HttpClientInterface
  readonly planService: PlanServiceInterface
}
