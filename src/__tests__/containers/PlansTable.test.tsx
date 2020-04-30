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
import StyledTableCell from 'components/StyledTableCell'

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
  const rows = tbody.find('tr')

  expect(toJson(wrapper)).toMatchSnapshot()
  expect(tbody).toHaveLength(1)
  expect(thead).toHaveLength(1)
  expect(thead.contains('Supplier')).toBeTruthy()
  expect(thead.contains('Term')).toBeTruthy()
  expect(thead.contains('Price per kWh')).toBeTruthy()
  expect(thead.contains('Estimated Savings')).toBeTruthy()
  expect(thead.contains('Green Energy')).toBeTruthy()
  expect(rows).toHaveLength(plans.length)

  rows.forEach((row, i) => {
    const plan = plans[i]
    const cells = row.find(StyledTableCell)

    expect(cells.at(0).text().includes(String(plan.id))).toBeTruthy()
    expect(cells.at(1).text().includes(String(plan.supplier.name))).toBeTruthy()
    expect(cells.at(2).text().includes(String(plan.month))).toBeTruthy()
    expect(cells.at(3).text().includes(String(plan.price))).toBeTruthy()
    expect(cells.at(4).text().includes(String(plan.estimatedSavings))).toBeTruthy()
    expect(cells.at(5).text().includes(String(plan.greenEnergy))).toBeTruthy()
  })
})

