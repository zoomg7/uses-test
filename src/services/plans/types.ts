enum Commodity {
  ELECTRICITY,
  GAS
}

interface Supplier {
  name: string
  logoSrc: string
}

interface Plan {
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

export interface PlanCollection {
  data: Plan[]
  total: number
}

export interface PlanServiceInterface {
  fetchAll (): Promise<PlanCollection>
}

