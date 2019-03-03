import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

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
    sectionMargins: {
        margin: theme.spacing.unit,
        minHeight: "200px"
    }
});

class LibraryEditor extends Component {

      componentDidMount() {
        this.props.fetchLibrary(this.props.libraryId);
    }

    render() {

        const {
            classes
        } = this.props;
        return (
            <div>
                <Paper className={classes.sectionMargins}>
                    Details
                </Paper>
                <Paper className={classes.sectionMargins}>
                    Tags
                </Paper>
                <Paper className={classes.sectionMargins}>
                    Searches
                </Paper>
                <Paper className={classes.sectionMargins}>
                    Syncs
                </Paper>
            </div>
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
)(withStyles(styles, { withTheme: true })(LibraryEditor));

