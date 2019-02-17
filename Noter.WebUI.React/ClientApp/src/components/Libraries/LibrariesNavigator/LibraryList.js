import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import LinearProgress from '@material-ui/core/LinearProgress';

const LibraryList = ({ librariesLoading, libraries, selectedLibraryId, selectLibrary, classes }) => {

    if (librariesLoading === false) {
        return (
            <div className={classes.root}>
                <List>
                    {libraries.map((lib) => (
                        <ListItem key={lib.libraryId} button
                            selected={selectedLibraryId === lib.libraryId}
                            onClick={event => selectLibrary(lib.libraryId)} >
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={lib.name} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="options" 
                                    aria-haspopup="true">
                                    <MoreVertIcon />
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
};

export default LibraryList;