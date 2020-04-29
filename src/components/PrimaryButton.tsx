import { Theme, withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

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

export default PrimaryButton
