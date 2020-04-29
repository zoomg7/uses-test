export enum Commodity {
  ELECTRICITY,
  GAS
}

export interface Supplier {
  name: string
  logoSrc: string
}

export interface Plan {
  id: number
  commodity: Commodity
  state: string
  utility: string
  zone: string
  rateClass: string
  supplier: Supplier
  month: number
  price: number
  greenEnergy: number
  estimatedSavings: number
}

export interface PlansState {
  plans: Plan[]
  page: number
  pageSize: number
  loading: boolean
  error: string
}

export const FETCH_PLANS_REQUEST = 'FETCH_PLANS_REQUEST'
export const FETCH_PLANS_SUCCESS = 'FETCH_PLANS_SUCCESS'
export const FETCH_PLANS_ERROR = 'FETCH_PLANS_ERROR'

export interface FetchPlansRequestAction {
  type: typeof FETCH_PLANS_REQUEST
}

export interface FetchPlansSuccessAction {
  type: typeof FETCH_PLANS_SUCCESS
  plans: Plan[]
}

export interface FetchPlansErrorAction {
  type: typeof FETCH_PLANS_ERROR
  error: string
}

export type PlansActionTypes =
  FetchPlansRequestAction |
  FetchPlansSuccessAction |
  FetchPlansErrorAction
