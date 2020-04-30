import { Reducer } from 'redux'
import {
  FETCH_PLANS_ERROR,
  FETCH_PLANS_REQUEST,
  FETCH_PLANS_SUCCESS,
  PlansActionTypes,
  PlansState
} from 'store/plans/types'

const initialState: PlansState = {
  plans: {
    data: [],
    total: 0
  },
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
        loading: true,
        error: ''
      }
    case FETCH_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        plans: action.plans,
        error: ''
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
