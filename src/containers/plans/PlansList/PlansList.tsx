import React from 'react'
import { Grid, Paper, Snackbar } from '@material-ui/core'
import PlansLeftFilter from 'containers/plans/PlansList/PlansLeftFilter'
import PlansTable from 'containers/plans/PlansList/PlansTable'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'
import { useSelector } from 'react-redux'
import { RootState } from 'store/types'

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
  }),
)

const PlansList: React.FC = () => {
  const classes = useStyles()
  const { error } = useSelector((state: RootState) => state.plans)
  const hasError = !!error

  return (
    <div className={classes.root}>
      <Snackbar
        open={hasError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert elevation={6} variant="filled" severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <PlansLeftFilter/>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <PlansTable/>
        </Grid>
      </Grid>
    </div>
  )
}

export default PlansList
