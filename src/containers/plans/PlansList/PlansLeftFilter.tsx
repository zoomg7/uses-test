import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Theme,
  Divider,
  CircularProgress
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Commodity, PlansFilter } from 'services/plans/types'
import { useStores } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#17192C',
    },
    divider: {
      margin: '20px 0'
    }
  }),
)

const PlansLeftFilter: React.FC = () => {
  const classes = useStyles()
  const { plansStore } = useStores()
  const { plans, loading } = useSelector((state: RootState) => state.plans)
  const dispatch = useDispatch()
  const [commodity, setCommodity] = useState<string>('')
  const [state, setState] = useState<string>('')

  useEffect(() => {
    const filter: PlansFilter = {}
    if (commodity) {
      filter.commodity = commodity as Commodity
    }
    if (state) {
      filter.state = state
    }

    dispatch(plansStore.fetchAll({
      filter
    }))
  }, [dispatch, plansStore, commodity, state])

  const onCommodityChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCommodity(event.target.value as string)
  }

  const onStateChange = (event: ChangeEvent<{ value: unknown }>) => {
    setState(event.target.value as string)
  }

  return <>
    <Typography component="h2" className={classes.header}>
      Quote
    </Typography>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>Commodity</InputLabel>
      <Select
        value={commodity}
        onChange={onCommodityChange}
        label="Commodity"
      >
        <MenuItem value="">
          Any
        </MenuItem>
        <MenuItem value={Commodity.ELECTRICITY}>Electricity</MenuItem>
        <MenuItem value={Commodity.GAS}>Gas</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>State</InputLabel>
      <Select
        value={state}
        onChange={onStateChange}
        label="State"
      >
        <MenuItem value="">
          Any
        </MenuItem>
        <MenuItem value="DC">District Of Columbia</MenuItem>
        <MenuItem value="PA">Pennsylvania</MenuItem>
        <MenuItem value="AL">Alabama</MenuItem>
        <MenuItem value="ERROR">Call Error</MenuItem>
      </Select>
    </FormControl>
    <Divider className={classes.divider}/>
    {
      loading ?
        <CircularProgress size={20}/> :
        <Typography component="h4">Total: {plans.total}</Typography>
    }

  </>
}

export default PlansLeftFilter
