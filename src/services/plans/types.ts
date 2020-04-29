import { Collection } from 'services/types'

export enum Commodity {
  ELECTRICITY = 'ELECTRICITY',
  GAS = 'GAS',
}

export interface Supplier {
  name: string
  logoSrc: string
}

export interface Plan {
  id: number
  commodity: Commodity
  state: string
  utility: string
  zone: string
  rateClass: string
  supplier: Supplier
  month: number
  price: number
  greenEnergy: number
  estimatedSavings: number
}

export interface PlansFilter {
  commodity?: Commodity,
  state?: string
}

export type PlansCollection = Collection<Plan>

export interface PlansServiceInterface {
  fetchAll (filter?: PlansFilter): Promise<PlansCollection>
}

