import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import * as librariesActionCreators from '../../actions/Libraries';

const styles = theme => ({
});

class LibraryEditor extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // This method is called when the component is first added to the document
        //this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        //this.ensureDataFetched();
    }

    ensureDataFetched() {
    }

    render() {
        return (
            <div>
                <h1>Edit Library </h1>
            </div>
        );
    }


}

export default
    connect(
        state => state.libraries,
        dispatch => bindActionCreators(librariesActionCreators, dispatch)
    )(withStyles(styles, { withTheme: true })(LibraryEditor));
