import { PlansFilter, PlansServiceInterface } from 'services/plans/types'
import { fetchPlansSuccess } from 'store/plans/actions'
import { AppThunk } from 'store/types'

class PlansStore {

  private plansService: PlansServiceInterface

  constructor (plansService: PlansServiceInterface) {
    this.plansService = plansService
  }

  fetchAll = (filter?: PlansFilter): AppThunk => async dispatch => {
    try {
      const plansCollection = await this.plansService.fetchAll(filter)
      dispatch(fetchPlansSuccess(plansCollection))
    } catch (e) {

    } finally {

    }
  }

}

export default PlansStore
