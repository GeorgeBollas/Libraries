import React, { Component } from 'react';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const styles = theme => ({

    wrapper: {
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});


const SaveCancel = ({ handleSave, handleCancel, saveEnabled, canceEnabled, classes }) => {
    return (
        <div className={classes.wrapper} >
            <Button variant="contained" color="primary"  size="small" className={classes.button}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save
            </Button>
            <Button variant="contained" color="secondary" size="small" className={classes.button}>
                <CancelIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
                Cancel
            </Button>
        </div>
    );
}


export default withStyles(styles)(SaveCancel);