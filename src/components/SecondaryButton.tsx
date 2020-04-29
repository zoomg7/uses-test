import { Theme, withStyles } from '@material-ui/core/styles'
import PrimaryButton from './PrimaryButton'

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

export default SecondaryButton
