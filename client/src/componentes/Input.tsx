import React, { Component } from 'react'
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = (theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing.unit
        },
        cssLabel: {
            '&$cssFocused': {
                color: 'white'
            }
        },
        cssFocused: {},
        cssOutlinedInput: {
            '&$cssFocused $notchedOutline': {
                borderColor: 'white'
            }
        },
        notchedOutline: {}
    })
export interface Props extends WithStyles<typeof styles> {
    label: string
    type?: string
    lines?: number
    onChange?: React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
}
class CustomizedInputs extends Component<Props> {
    render() {
        const {
            classes,
            label,
            type = 'text',
            onChange,
            lines = 1
        } = this.props
        return (
            <div style={{ width: '100%'}}>
                <TextField
                    className={classes.margin}
                    InputLabelProps={{
                        classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused
                        }
                    }}
                    InputProps={{
                        classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline
                        }
                    }}
                    label={label}
                    variant='outlined'
                    id='custom-css-outlined-input'
                    type={type}
                    style={{ width: 'calc(100% - 15px)'}}
                    onChange={onChange}
                    multiline={lines > 1}
                    rows={lines}
                />
            </div>
        )
    }
}
export const Input = withStyles(styles)(CustomizedInputs)
