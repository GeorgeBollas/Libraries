import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import * as librariesActionCreators from '../../actions/Libraries';
import LibraryList from './LibraryList';
import CreateLibrary from './CreateLibrary';

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class Libraries extends Component {
    constructor(props) {
        super(props);

        this.handleAddLibraryClick = this.handleAddLibraryClick.bind(this);
        this.handleSaveNewLibrary = this.handleSaveNewLibrary.bind(this);
        this.handleCancelNewLibrary = this.handleCancelNewLibrary.bind(this);
    }

    handleAddLibraryClick() {
        this.props.createLibraryDialogOpen();
    }

    handleSaveNewLibrary(library) {
        alert(library.name);
    }

    handleCancelNewLibrary() {

    }

    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched(); 
    }

    componentDidUpdate() {
        //this.ensureDataFetched();
    }

    ensureDataFetched() {
        this.props.fetchLibraries();
    }

    render() {
        return (
            <div>
                <h1>Libraries {this.props.isLoading}</h1>
                <Fab color='primary' className={this.props.classes.fab} onClick={this.handleAddLibraryClick}>
                    <AddIcon />
                </Fab>
                <LibraryList
                    libraries={this.props.libraries}
                    loading={this.props.isLoading} />
                <CreateLibrary />
            </div>
        );
    }


}

export default
    connect(
        state => state.libraries,
        dispatch => bindActionCreators(librariesActionCreators, dispatch)
    )(withStyles(styles, { withTheme: true })(Libraries));
