import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

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

import * as libraryNavigatorActionCreators from '../../actions/LibraryNavigator';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class LibraryList extends React.Component {

    handleListItemClick = (event, libraryId) => {
        this.props.selectLibrary(libraryId);  //todo acttion
    };

    render() {
        const { classes, libraries, loading, selectedLibraryId } = this.props;

        if (loading) {
            return (<LinearProgress />)
        }

        return (
            <div className={classes.root}>
                <List>
                    {libraries.map((lib) => (
                        <ListItem key={lib.libraryId}> button
                            selected={selectedLibraryId && selectedLibraryId === lib.libraryId}
                            onClick={event => this.handleListItemClick(event, lib.libraryId)}
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={lib.name} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="options">
                                    <MenuIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }


}

LibraryList.propTypes = {
    libraries: PropTypes.object.isRequired,
};

export default
    connect(
    state => state.libraryNavigatorModule,
    dispatch => bindActionCreators(libraryNavigatorActionCreators, dispatch)
    )(withStyles(styles, { withTheme: true })(LibraryList));
