import { FetchAllRequest, PlansServiceInterface } from 'services/plans/types'
import { fetchPlansError, fetchPlansRequest, fetchPlansSuccess } from 'store/plans/actions'
import { AppThunk } from 'store/types'

class PlansStore {

  private plansService: PlansServiceInterface

  constructor (plansService: PlansServiceInterface) {
    this.plansService = plansService
  }

  fetchAll = (request: FetchAllRequest = {}): AppThunk => async dispatch => {
    try {
      dispatch(fetchPlansRequest())
      const plansCollection = await this.plansService.fetchAll(request)
      dispatch(fetchPlansSuccess(plansCollection))
    } catch (e) {
      dispatch(fetchPlansError(e.message))
    }
  }

}

export default PlansStore
