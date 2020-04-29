import React, { createContext, ReactNode } from 'react'
import { StoreContainerInterface } from 'store/types'

interface Props {
  children: ReactNode
  storeContainer: StoreContainerInterface
}

export const storeContext = createContext<StoreContainerInterface>({} as StoreContainerInterface)

const Provider = storeContext.Provider

const StoreProvider: React.FC<Props> = ({
  children,
  storeContainer
}) => {
  return <Provider value={storeContainer} children={children}/>
}

export default StoreProvider
