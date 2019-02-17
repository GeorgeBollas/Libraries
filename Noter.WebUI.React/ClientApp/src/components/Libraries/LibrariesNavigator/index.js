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

import * as navigatorActions from '../../../actions/LibraryNavigator';
import * as librariesActions from '../../../actions/Libraries';

import Filter from './Filter';
import LibraryList from './LibraryList';

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
});

class LibrariesNavigator extends Component {

    componentDidMount() {
        this.props.fetchLibraries();
    }

    render() {
        const {
            libraries,
            librariesLoading,
            filterText,
            setFilterText,
            selectedLibraryId,
            selectLibrary,
            classes, //todo get rid of this and use own styles
        } = this.props;

        var libs = libraries.filter(l => l.name.toLowerCase().includes(filterText.trim().toLowerCase()));

        return (
            <Paper>
                {/*<NewLibrary />*/}
                <div className={classes.header} >
                    <IconButton aria-label="Refresh" onClick={this.props.fetchLibraries} className={classes.refreshIcon}>
                        <RefreshIcon />
                    </IconButton>
                    <Filter
                        filterText={filterText}
                        onFilterTextChange={setFilterText}
                        classes={classes.grow}
                    />
                </div>
                <LibraryList
                    classes={classes}
                    libraries={libs}
                    librariesLoading={librariesLoading}
                    selectedLibraryId={selectedLibraryId}
                    selectLibrary={this.selectLibrary}
                    selectLibraryMenu={this.selectLibraryMenu}
                />
            </Paper>
        )
    };


    selectLibrary = (id) => {
        //this.props.history.push('/search/' + id);
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

