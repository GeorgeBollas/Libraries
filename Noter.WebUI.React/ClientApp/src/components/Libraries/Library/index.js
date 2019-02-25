import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import * as libraryEditingActions from '../../../actions/Libraries';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        display: 'flex',
    },
    grow: {
        flex: 1,
    },
    fab: {
        margin: theme.spacing.unit,
    },
});

class LibraryEditor extends Component {

    state = {
        value: 2,
    };

    componentDidMount() {
        this.props.fetchLibrary(this.props.libraryId);
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const {
            history,
            classes, //todo get rid of this and use own styles
        } = this.props;

        return (
            <Paper>
                <Tabs value={this.state.value} indicatorColor="primary" textColor="primary" onChange={this.handleChange}>
                    <Tab label="Details" />
                    <Tab label="Tags" />
                    <Tab label="Syncs" />
                    <Tab label="Searches" />
                </Tabs>
            </Paper>
        )
    };

}


LibraryEditor.propTypes = {
    //libraries: PropTypes.array.isRequired,
    //selectedLibraryId: PropTypes.number.isRequired,
    //selectLibrary: PropTypes.func.isRequired,
    //selectLibraryMenu: PropTypes.func.isRequired,
}

export default connect(
    state => (
        {
            libraryId: state.libraryEditing.libraryId,
            library: state.libraryEditing.library,
        }),
    dispatch => bindActionCreators(libraryEditingActions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((LibraryEditor))));

