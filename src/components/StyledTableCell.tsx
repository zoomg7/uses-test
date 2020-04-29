import { createStyles, Theme, withStyles } from '@material-ui/core/styles'
import { TableCell } from '@material-ui/core'

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

export default StyledTableCell
