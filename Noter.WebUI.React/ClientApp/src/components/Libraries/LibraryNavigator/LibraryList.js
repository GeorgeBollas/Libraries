import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import FolderIcon from '@material-ui/icons/Folder';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import LinearProgress from '@material-ui/core/LinearProgress';

import * as actions from '../../../actions/LibraryNavigator';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class LibraryList extends Component {

    componentWillMount() {
        this.props.fetchLibraries();
    }

    render() {
        const {
            libraries,
            selectedLibraryId,
            selectLibrary,
            selectLibraryMenu,
            filterText,
            classes, //todo get rid of this and use own styles
        } = this.props;

        var libs = libraries.filter(l => l.name.toLowerCase().includes(filterText.trim().toLowerCase()));

        if (libs.length !== 0) {
            return (
                <div className={classes.root}>
                    <List>
                        {libs.map((lib) => (
                            <ListItem key={lib.libraryId} button
                                selected={selectedLibraryId === lib.libraryId}
                                onClick={event => selectLibrary(lib.libraryId)} >
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText primary={lib.name} />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="options" onClick={event => selectLibrary(lib.libraryId)} >
                                        <MenuIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            )
        }
        else {
            return (<LinearProgress />)
        }
    }
}

LibraryList.propTypes = {
    libraries: PropTypes.array.isRequired,
    selectedLibraryId: PropTypes.number.isRequired,
    selectLibrary: PropTypes.func.isRequired,
    selectLibraryMenu: PropTypes.func.isRequired,
}

export default connect(
    state => state.libraryNavigator,
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((LibraryList))));

