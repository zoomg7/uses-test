import { Reducer } from 'redux'
import {
  FETCH_PLANS_ERROR,
  FETCH_PLANS_REQUEST,
  FETCH_PLANS_SUCCESS,
  PlansActionTypes,
  PlansState
} from 'store/plans/types'

const initialState: PlansState = {
  plans: [],
  page: 1,
  pageSize: 10,
  loading: false,
  error: '',
}

export const plansReducer: Reducer<PlansState> = (
  state: PlansState = initialState,
  action: PlansActionTypes
) => {
  switch (action.type) {
    case FETCH_PLANS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        plans: action.plans
      }
    case FETCH_PLANS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
