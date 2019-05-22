import React, { Component } from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing.unit,
        },
        cssLabel: {
            '&$cssFocused': {
                color: 'gray',
            },
        },
        cssFocused: {},
        cssOutlinedInput: {
            '&$cssFocused $notchedOutline': {
                borderColor: '#d3d3d3',
            },
        },
        notchedOutline: {},
    })
export interface Props extends WithStyles<typeof styles> {
    label: string
    type: string
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}
class CustomizedInputs extends Component<Props> {
    render() {
        const { classes, label, type, onChange } = this.props
        return <div style={{ width: '100%' }}>
            <TextField
                className={classes.margin}
                InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    },
                }}
                InputProps={{
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                    },
                }}
                label={label}
                variant="outlined"
                id="custom-css-outlined-input"
                type={type}
                style={{ width: 'calc(100% - 15px)' }}
                onChange={onChange}
            />
        </div>
    }
}
export const Input = withStyles(styles)(CustomizedInputs);