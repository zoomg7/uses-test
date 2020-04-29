import { useContext } from 'react'
import { DiContainerInterface } from 'utils/types'
import { diContext } from 'providers/DiProvider'

const useDiContainer = () => useContext<DiContainerInterface>(diContext)

export default useDiContainer
