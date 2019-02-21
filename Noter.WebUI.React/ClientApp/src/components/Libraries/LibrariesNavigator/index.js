﻿import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import RefreshIcon from '@material-ui/icons/Refresh';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import * as navigatorActions from '../../../actions/LibraryNavigator';
import * as librariesActions from '../../../actions/Libraries';

import Filter from './Filter';
import LibraryList from './LibraryList';
import CreatLibraryDialog from './CreateLibraryDialog';

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

class LibrariesNavigator extends Component {

    constructor(props) {
        super(props);
        //this.onCreateLibrarySubmit = this.onCreateLibrarySubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchLibraries();
    }

    render() {

        const {
            history,
            libraries,
            librariesLoading,
            filterText,
            setFilterText,
            selectedLibraryId,
            selectLibrary,
            fetchLibraries,
            createLibraryDialogOpen,
            isCreateLibraryDialogOpen,
            classes, //todo get rid of this and use own styles
        } = this.props;

        var libs = libraries.filter(l => l.name.toLowerCase().includes(filterText.trim().toLowerCase()));

        return (
            <Paper>
                <div className={classes.header} >
                    <IconButton aria-label="Refresh" onClick={fetchLibraries} className={classes.refreshIcon}>
                        <RefreshIcon />
                    </IconButton>
                    <Filter
                        filterText={filterText}
                        onFilterTextChange={setFilterText}
                        classes={classes.grow}
                    />
                    <IconButton aria-label="Refresh" onClick={() => createLibraryDialogOpen(true)} className={classes.refreshIcon}>
                        <AddIcon />
                    </IconButton>
                </div>
                <LibraryList
                    classes={classes}
                    libraries={libs}
                    librariesLoading={librariesLoading}
                    selectedLibraryId={selectedLibraryId}
                    selectLibrary={this.selectLibrary}
                    selectLibraryMenu={this.selectLibraryMenu}
                />
                <CreatLibraryDialog
                    isCreateLibraryDialogOpen={isCreateLibraryDialogOpen}
                    classes={classes}
                    onCreateLibrarySubmit={this.onCreateLibrarySubmit}
                />
            </Paper>
        )
    };

    onCreateLibrarySubmit = (name, tags) => {

        // 1. submit
        // 2. check for errors and set them on the display
        // 3. - if ok then call onCreateLibrarySuccess function to do what is next (close form navigate etc)
        const { history, createLibraryRequestSuccess, createLibraryDialogOpen } = this.props;

        this.props.requestCreateLibrary(name, tags)
            .then(result => {
                history.push('/search/' + result.data.libraryId);
                createLibraryRequestSuccess(result.data.libraryId);
                createLibraryDialogOpen(false)
                // close the dialog in here or in 
            })
    }

    //onCreateLibrarySuccess = (id) => {
    //    // close dialog
    //    this.props.createLibraryDialogOpen(false);
    //    // 
    //}

    selectLibrary = (id) => {
        this.props.history.push('/search/' + id);
    }

    selectLibraryMenu = (id, option) => {
    }
}


LibrariesNavigator.propTypes = {
    libraries: PropTypes.array.isRequired,
    selectedLibraryId: PropTypes.number.isRequired,
    selectLibrary: PropTypes.func.isRequired,
    selectLibraryMenu: PropTypes.func.isRequired,
}

export default connect(
    state => (
        {
            librariesLoading: state.librariesModule.loading,
            libraries: state.librariesModule.libraries,
            filterText: state.libraryNavigator.filterText,
            selectedLibraryId: state.libraryNavigator.selectedLibraryId,
        }),
    dispatch => bindActionCreators({ ...librariesActions, ...navigatorActions }, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((LibrariesNavigator))));

