import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';

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
            <Fragment>
                {/*<NewLibrary />*/}
                <Filter
                    filterText={filterText}
                    onFilterTextChange={setFilterText}
                    classes={classes}
                />
                <LibraryList
                    classes={classes}
                    libraries={libs}
                    librariesLoading={librariesLoading}
                    selectedLibraryId={selectedLibraryId}
                    selectLibrary={selectLibrary}
                    selectLibraryMenu={this.selectLibraryMenu}
                />
            </Fragment>
        )
    };

    selectLibraryMenu = (id, option) => {
        alert(id + ':' + option);
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

