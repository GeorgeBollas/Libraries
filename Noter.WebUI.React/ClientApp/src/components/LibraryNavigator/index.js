import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Redirect } from 'react-router-dom';

import LibraryFilter from './LibraryFilter';
import LibraryList from './LibraryList';
//import CreateLibrary from '../Libraries/CreateLibrary';

import * as libraryNavigatorActionCreators from '../../actions/LibraryNavigator';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class Libraries extends React.Component {

    //this.props.createLibraryDialogOpen();

    componentDidMount() {
        // This method is called when the component is first added to the document
        this.props.fetchLibraries();
        this.selectLibraryMenu = this.selectLibraryMenu.bind(this);

    }
       
    render() {
        const {
            classes,
            libraries,
            selectedLibraryId,
            selectLibrary,
            //selectLibraryMenu,
            filterText,
        } = this.props;

        //  history.push('library-editor');

        return (
            <div>
                <LibraryFilter filterText={filterText} classes={classes} />

                <LibraryList
                    libraries={libraries && libraries.filter(l => l.name.includes(filterText))}
                    selectedLibraryId={selectedLibraryId}
                    onItemClick={selectLibrary}
                    onItemMenuClick={this.selectLibraryMenu}
                    classes={classes}
                />
            </div>
        );
    }

    //todo do this in redux way somhow
    selectLibraryMenu() {
        this.props.history.push('/library-editor')
    }


}

LibraryList.propTypes = {
    libraries: PropTypes.object.isRequired,
};

export default
    connect(
        state => state.libraryNavigatorModule,
        dispatch => bindActionCreators(libraryNavigatorActionCreators, dispatch)
    )(withStyles(styles, { withTheme: true })(withRouter((Libraries))));
