import React, { ChangeEvent, useEffect, useState } from 'react'
import { Typography, FormControl, InputLabel, Select, MenuItem, Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Commodity, PlansFilter } from 'services/plans/types'
import { useStores } from 'hooks'
import { useDispatch } from 'react-redux'

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
  }),
)

const PlansLeftFilter: React.FC = () => {
  const classes = useStyles()
  const { plansStore } = useStores()
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
    dispatch(plansStore.fetchAll(filter))
  }, [dispatch, plansStore, commodity, state])

  const commodityChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCommodity(event.target.value as string)
  }

  const stateChange = (event: ChangeEvent<{ value: unknown }>) => {
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
        onChange={commodityChange}
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
        onChange={stateChange}
        label="State"
      >
        <MenuItem value="">
          Any
        </MenuItem>
        <MenuItem value="DC">District Of Columbia</MenuItem>
        <MenuItem value="PA">Pennsylvania</MenuItem>
      </Select>
    </FormControl>
  </>
}

export default PlansLeftFilter
