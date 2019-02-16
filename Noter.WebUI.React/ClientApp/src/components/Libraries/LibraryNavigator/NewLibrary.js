import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import * as actions from '../../../actions/LibraryNavigator';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class NewLibrary extends Component {

    render() {
        const {
            classes
        } = this.props;


        return (
            <div className={classes.root}>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

NewLibrary.propTypes = {

}

export default connect(
    state => state.libraryNavigator,
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((NewLibrary))));

