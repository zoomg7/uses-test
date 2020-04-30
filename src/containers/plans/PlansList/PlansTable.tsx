import React, { useEffect } from 'react'
import { Chip, Table, TableBody, TableHead, TableRow } from '@material-ui/core'
import StyledTableCell from 'components/StyledTableCell'
import { PrimaryButton, SecondaryButton } from 'components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/types'
import { useStores } from 'hooks'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      borderCollapse: 'separate',
      borderSpacing: '0 15px',
    },
    firstColumn: {
      position: 'relative',
      paddingRight: 20,
      '&:after': {
        display: 'block',
        content: '\'\'',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto auto auto 0',
        height: 28,
        width: 0,
        borderRight: '1px solid #D3D5DC',
      }
    },
    idColumn: {
      fontWeight: 'bold',
      color: '#17192C',
    },
    supplierColumn: {
      fontWeight: 'bold',
      color: '#17192C',
    },
    termColumnChip: {
      backgroundColor: '#F7F8FA',
      borderRadius: 5,
      color: '#000000',
      fontWeight: 600,
    },
    priceColumnChip: {
      backgroundColor: '#E9F1F8',
      borderRadius: 5,
      color: '#2E74B9',
      fontWeight: 600,
    },
    savingsColumnChip: {
      backgroundColor: '#F6FCF5',
      borderRadius: 5,
      color: '#59BA49',
      fontWeight: 600,
    },
    greenEnergyColumnChip: {
      backgroundColor: '#E9F1F8',
      borderRadius: 5,
      color: '#2E74B9',
      fontWeight: 600,
    },
    lgMargin: {
      marginLeft: theme.spacing(4),
    },
    smMargin: {
      marginLeft: theme.spacing(1),
    },
  }),
)

const PlansTable: React.FC = () => {
  const classes = useStyles()
  const { plans } = useSelector((state: RootState) => state.plans)
  const { plansStore } = useStores()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(plansStore.fetchAll())
  }, [dispatch, plansStore])

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <StyledTableCell>#</StyledTableCell>
          <StyledTableCell>Supplier</StyledTableCell>
          <StyledTableCell>Term</StyledTableCell>
          <StyledTableCell>Price per kWh</StyledTableCell>
          <StyledTableCell>Estimated Savings</StyledTableCell>
          <StyledTableCell>Green Energy</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {plans.data.map((plan) => (
          <TableRow key={plan.id}>
            <StyledTableCell component="th" scope="row" className={classes.idColumn}>
              <div className={classes.firstColumn}>
                {plan.id}
              </div>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row" className={classes.supplierColumn}>
              <img src={plan.supplier.logoSrc} alt="" height={20}/>
              <div>{plan.supplier.name}</div>
            </StyledTableCell>
            <StyledTableCell>
              <Chip label={`${plan.month} months`} className={classes.termColumnChip}/>
            </StyledTableCell>
            <StyledTableCell>
              <Chip label={`$${plan.price}`} className={classes.priceColumnChip}/>
            </StyledTableCell>
            <StyledTableCell>
              <Chip label={`$${plan.estimatedSavings}`} className={classes.savingsColumnChip}/>
            </StyledTableCell>
            <StyledTableCell>
              <Chip label={`${plan.greenEnergy}%`} className={classes.greenEnergyColumnChip}/>
              <PrimaryButton className={classes.lgMargin}>
                Select plan
              </PrimaryButton>
              <SecondaryButton variant="outlined" size="large" className={classes.smMargin}>
                Details
              </SecondaryButton>
            </StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PlansTable
