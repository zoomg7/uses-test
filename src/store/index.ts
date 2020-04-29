import { combineReducers } from 'redux'
import { plansReducer } from 'store/plans/reducer'

export const rootReducer = combineReducers({
  plans: plansReducer,
})

export { default as StoreContainer } from './StoreContainer'

