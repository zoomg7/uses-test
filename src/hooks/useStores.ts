import { useContext } from 'react'
import { storeContext } from 'providers/StoreProvider'
import { StoreContainerInterface } from 'store/types'

const useStores = () => useContext<StoreContainerInterface>(storeContext)

export default useStores
