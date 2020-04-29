import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { rootReducer } from 'store'
import { PlansStore } from 'store/plans'

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export interface StoreContainerInterface {
  readonly plansStore: PlansStore
}
