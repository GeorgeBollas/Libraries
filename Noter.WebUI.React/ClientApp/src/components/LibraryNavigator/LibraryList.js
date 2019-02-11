import React from 'react';
import PropTypes from 'prop-types'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import FolderIcon from '@material-ui/icons/Folder';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import LinearProgress from '@material-ui/core/LinearProgress';

//const styles = theme => ({
//    root: {
//        width: '100%',
//        maxWidth: 360,
//        backgroundColor: theme.palette.background.paper,
//    },
//});

const LibraryList = props => {
    const {
        libraries,
        selectedLibraryId,
        onItemClick,
        onItemMenuClick,
        classes, //todo get rid of this and use own styles
    } = props;

    if (libraries) {
        return (
            <div className={classes.root}>
                <List>
                    {libraries.map((lib) => (
                        <ListItem key={lib.libraryId} button
                            selected={selectedLibraryId && selectedLibraryId === lib.libraryId}
                            onClick={event => onItemClick(event, lib.libraryId)} >
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={lib.name} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="options" onClick={event => onItemMenuClick(event, lib.libraryId)} >
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
        return ( <LinearProgress /> )
    }

}

LibraryList.propTypes = {
    onItemClick: PropTypes.func.isRequired,
    onItemMenuClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default LibraryList;

