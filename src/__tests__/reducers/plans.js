import { initialState, plansReducer } from 'store/plans/reducer'
import { FETCH_PLANS_ERROR, FETCH_PLANS_REQUEST, FETCH_PLANS_SUCCESS } from 'store/plans/types'
import plans from 'services/fixtures/plans'

it('should return the initial state', () => {
  expect(plansReducer(undefined, {})).toEqual(initialState)
})

it(`should handle ${FETCH_PLANS_REQUEST}`, () => {
  expect(plansReducer(initialState, { type: FETCH_PLANS_REQUEST }))
    .toEqual({
      ...initialState,
      loading: true,
      error: ''
    })
})

it(`should handle ${FETCH_PLANS_SUCCESS}`, () => {
  const newPlans = {
    data: plans,
    total: plans.length
  }

  expect(plansReducer(initialState, {
    type: FETCH_PLANS_SUCCESS,
    plans: newPlans
  }))
    .toEqual({
      ...initialState,
      plans: newPlans
    })
})

it(`should handle ${FETCH_PLANS_ERROR}`, () => {
  const error = 'Something wrong'
  expect(plansReducer(initialState, { type: FETCH_PLANS_ERROR, error }))
    .toEqual({
      ...initialState,
      error
    })
})
