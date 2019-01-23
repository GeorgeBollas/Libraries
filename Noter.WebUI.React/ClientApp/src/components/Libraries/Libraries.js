import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { actionCreators } from '../../actions/Libraries';
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

        this.state = {
            isOpen: false,
            loading: false
        };
    }

    handleAddLibraryClick() {
        this.setState({ isOpen: true });
    }

    handleSaveNewLibrary(library) {
        alert(library.name);
        this.setState({ isOpen: false });
    }

    handleCancelNewLibrary() {
        this.setState({ isOpen: false });

    }
    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched(); 
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
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
                    loading={this.props.isLoading}/>
                <CreateLibrary isOpen={this.state.isOpen} />
            </div>
        );
    }


}

export default
    connect(
        state => ({ libraries: state.libraries, isLoading: state.isLoading }),
        dispatch => bindActionCreators(actionCreators, dispatch)
    )(withStyles(styles, { withTheme: true })(Libraries));
