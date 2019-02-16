import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import * as actions from '../../../actions/LibraryNavigator';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class LibraryFilter extends Component {

    render() {
        const {
            filterText,
            setFilterText,
            classes, //todo get rid of this and use own styles
        } = this.props;

        return (
            <div className={classes.root}>
                <TextField
                    id="filterText"
                    label="Search"
                    className={classes.textField}
                    value={filterText}
                    onChange={event => setFilterText(event.target.value)}
                    margin="normal"
                />
            </div>
        )
    }
}

LibraryFilter.propTypes = {
    filterText: PropTypes.string.isRequired,
}

export default connect(
    state => state.libraryNavigator,
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((LibraryFilter))));

