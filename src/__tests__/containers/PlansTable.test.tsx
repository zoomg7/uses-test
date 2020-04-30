import PlansTable from 'containers/plans/PlansList/PlansTable'
import { StoreProvider } from 'providers'
import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { configure, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'
import { rootReducer, StoreContainer } from 'store'
import plans from 'services/fixtures/plans'
import { Plan } from 'services/plans/types'

configure({
  adapter: new Adapter()
})

const store = createStore(
  rootReducer,
  {
    plans: {
      plans: {
        data: plans as Plan[],
        total: 0
      },
      loading: false,
      error: '',
    }
  },
  applyMiddleware(thunk)
)

const storeContainer = new StoreContainer()

it('PlansTable should render correctly', async () => {
  const wrapper = mount(
    <StoreProvider storeContainer={storeContainer}>
      <Provider store={store}>
        <PlansTable/>
      </Provider>
    </StoreProvider>
  )

  const thead = wrapper.find('thead')
  const tbody = wrapper.find('tbody')
  const tr = tbody.find('tr')

  expect(toJson(wrapper)).toMatchSnapshot()
  expect(tbody).toHaveLength(1)
  expect(thead).toHaveLength(1)
  expect(thead.contains('Supplier')).toBeTruthy()
  expect(thead.contains('Term')).toBeTruthy()
  expect(thead.contains('Price per kWh')).toBeTruthy()
  expect(thead.contains('Estimated Savings')).toBeTruthy()
  expect(thead.contains('Green Energy')).toBeTruthy()
  expect(tr).toHaveLength(plans.length)
})

