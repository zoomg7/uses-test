import React, { createContext, ReactNode } from 'react'
import { DiContainerInterface } from 'utils/types'

interface Props {
  children: ReactNode
  diContainer: DiContainerInterface
}

export const diContext = createContext<DiContainerInterface>({} as DiContainerInterface)

const Provider = diContext.Provider

const DiProvider: React.FC<Props> = ({
  children,
  diContainer
}) => {
  return <Provider value={diContainer} children={children}/>
}

export default DiProvider
