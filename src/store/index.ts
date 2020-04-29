import { combineReducers } from 'redux'
import { plansReducer } from 'store/plans/reducer'
import { PlansState } from 'store/plans/types'

export interface RootState {
  plans: PlansState
}

export const rootReducer = combineReducers<RootState>({
  plans: plansReducer,
})
