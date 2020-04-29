import { PlansServiceInterface } from 'services/plans/types'
import { fetchPlansSuccess } from 'store/plans/actions'
import { AppThunk } from 'store/types'

class PlansStore {

  private plansService: PlansServiceInterface

  constructor (plansService: PlansServiceInterface) {
    this.plansService = plansService
  }

  fetchAll = (): AppThunk => async dispatch => {
    try {
      const plansCollection = await this.plansService.fetchAll()
      dispatch(fetchPlansSuccess(plansCollection.data))
    } catch (e) {

    } finally {

    }
  }

}

export default PlansStore
