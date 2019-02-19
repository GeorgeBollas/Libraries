﻿import React from "react";

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

import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'

import LinearProgress from '@material-ui/core/LinearProgress';

const LibraryList = ({ librariesLoading, libraries, selectedLibraryId, selectLibrary, selectLibraryMenu, classes }) => {

    const MenuButton = ({ id }) => {

        //todo can we move this to the actions passing the id and the menu option??
        const onRename = (popState) => {
            popState.close();
            selectLibraryMenu(id,'rename')
        }
        const onTags = (popState) => {
            popState.close();
            selectLibraryMenu(id,'tags')
        }
        const onSyncs = (popState) => {
            popState.close();
            selectLibraryMenu(id,'syncs')
        }
        const onSearches = (popState) => {
            popState.close();
            selectLibraryMenu(id,'searches')
        }
        const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
        return (
            <div>
                <IconButton aria-label="options"
                    variant="contained" {...bindTrigger(popupState)}
                    aria-haspopup="true">
                    <MoreVertIcon />
                </IconButton>
                <Menu {...bindMenu(popupState)} >
                    <MenuItem onClick={() => onRename(popupState)}>Rename</MenuItem>
                    <MenuItem onClick={() => onTags(popupState)}>Tags</MenuItem>
                    <MenuItem onClick={() => onSyncs(popupState)}>Syncs</MenuItem>
                    <MenuItem onClick={() => onSearches(popupState)}>Searches</MenuItem>
                </Menu>
            </div>
        )
    };

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
                                <MenuButton id={lib.libraryId} />
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