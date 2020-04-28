export enum Commodity {
  ELECTRICITY,
  GAS
}

export type Supplier = {
  name: string
  logoSrc: string
}

export type Plan = {
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
