import { PlansCollection } from 'services/plans/types'

export interface PlansState {
  plans: PlansCollection
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
  plans: PlansCollection
}

export interface FetchPlansErrorAction {
  type: typeof FETCH_PLANS_ERROR
  error: string
}

export type PlansActionTypes =
  FetchPlansRequestAction |
  FetchPlansSuccessAction |
  FetchPlansErrorAction
