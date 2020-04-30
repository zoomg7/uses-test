import { HttpMockClient } from 'services/http'
import { PlanService } from 'services/plans'

const plansService = new PlanService(new HttpMockClient())

it('testing without filter', async () => {
  const collection = await plansService.fetchAll()

  expect(collection).toHaveProperty('data')
  expect(collection).toHaveProperty('total')
})

it('testing filtering', async () => {
  const commodity = 'ELECTRICITY'
  const collection = await plansService.fetchAll({ filter: { commodity } })

  expect(collection).toHaveProperty('data')
  expect(collection).toHaveProperty('total')

  const { data } = collection

  expect(data.every(item => item.commodity === commodity)).toBeTruthy()
})

it('testing an error', async () => {
  expect.assertions(1)

  try {
    await plansService.fetchAll({ filter: { state: 'ERROR' } })
  } catch (e) {
    expect(e).toHaveProperty('message')
  }
})
