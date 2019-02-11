import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import * as librariesActionCreators from '../../actions/LibraryNavigator';

const styles = theme => ({
});

class LibraryEditor extends Component {

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
        state => state.librariesModule, //todo dont need this
        dispatch => bindActionCreators(librariesActionCreators, dispatch)
    )(withStyles(styles, { withTheme: true })(LibraryEditor));
