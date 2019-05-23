import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles'
import Btn from '@material-ui/core/Button'

const styles = (theme: Theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
export interface Props extends WithStyles<typeof styles> {
  label: string
  path?: string
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
}
class _Button extends Component<Props>{
  render() {
    const { classes, label, onClick, path } = this.props
    return <Link to={path || '#'} style={{ width: '100%', textDecoration: 'none' }}>
      <Btn
        variant="contained"
        className={classes.button}
        onClick={onClick}
        style={{ width: '95%' }}
      >
        {label}
      </Btn>
    </Link>
  }
}
export const Button = withStyles(styles)(_Button);