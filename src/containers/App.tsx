import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Button
} from '@material-ui/core'
import { RootState } from 'store'
import { FETCH_PLANS_SUCCESS, Plan } from 'store/plans/types'
import { useDiContainer } from 'hooks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: 10,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#17192C',
    },
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

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: 'none',
    },
    head: {
      color: '#93979B',
      fontSize: 13,
      paddingBottom: 0,
      padding: '20px 10px',
    },
    body: {
      fontSize: 14,
      backgroundColor: '#FFFFFF',
      padding: '16px 10px',
      '&:first-child': {
        width: '1%',
        paddingLeft: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      '&:last-child': {
        paddingRight: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
      },
    },
  }),
)(TableCell)

const PrimaryButton = withStyles((theme: Theme) => ({
  root: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#59BA49',
    backgroundColor: '#FFFFFF',
    border: '#59BA49 1px solid',
    borderRadius: 6,
    textTransform: 'none',
    padding: '10px 17px',
    '&:hover': {
      backgroundColor: '#59BA49',
      color: '#FFFFFF',
    },
  },
}))(Button)

const SecondaryButton = withStyles((theme: Theme) => ({
  root: {
    color: '#93979B',
    border: 'none',
    padding: '11px 18px',
    '&:hover': {
      backgroundColor: '#F7F8FA',
      color: '#93979B',
    },
  },
}))(PrimaryButton)

function App () {
  const classes = useStyles()
  const { plans } = useSelector((state: RootState) => state.plans)
  const { planService } = useDiContainer()
  const dispatch = useDispatch()

  useEffect(() => {
    planService.fetchAll()
      .then(collection => {
        dispatch({
          type: FETCH_PLANS_SUCCESS,
          plans: collection.data
        })
      })
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography component="h2" className={classes.header}>
              Quote
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={9}>
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
              {plans.map((plan: Plan) => (
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
        </Grid>
      </Grid>
    </div>
  )
}

export default App
