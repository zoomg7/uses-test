import {
  FETCH_PLANS_ERROR,
  FETCH_PLANS_REQUEST,
  FETCH_PLANS_SUCCESS,
  FetchPlansErrorAction,
  FetchPlansRequestAction,
  FetchPlansSuccessAction,
  Plan
} from 'store/plans/types'

export function fetchPlansRequest (): FetchPlansRequestAction {
  return {
    type: FETCH_PLANS_REQUEST
  }
}

export function fetchPlansSuccess (plans: Plan[]): FetchPlansSuccessAction {
  return {
    type: FETCH_PLANS_SUCCESS,
    plans
  }
}

export function fetchPlansError (error: string): FetchPlansErrorAction {
  return {
    type: FETCH_PLANS_ERROR,
    error
  }
}
