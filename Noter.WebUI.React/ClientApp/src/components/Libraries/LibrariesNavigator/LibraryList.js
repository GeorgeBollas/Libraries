import React from "react";

import { withStyles } from '@material-ui/core/styles';

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

import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'

import LinearProgress from '@material-ui/core/LinearProgress';


const styles = {
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
};

const LibraryList = ({
    librariesLoading,
    libraries,
    selectedLibraryId,
    selectLibrary,
    selectLibraryMenu,
    classes }) => {

    const MenuButton = ({ id }) => {

        //todo can we move this to the actions passing the id and the menu option??
        const onMenuSelection = (popState,menu) => {
            popState.close();
            selectLibraryMenu(id,menu)
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
                    <MenuItem onClick={() => onMenuSelection(popupState, 'Details')}>Edit Details</MenuItem>
                    <MenuItem onClick={() => onMenuSelection(popupState,'Tags')}>Manage Tags</MenuItem>
                    <MenuItem onClick={() => onMenuSelection(popupState,'Searches')}>Manage Searches</MenuItem>
                    <MenuItem onClick={() => onMenuSelection(popupState, 'Syncs')}>Manage Syncs</MenuItem>
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
                                <Avatar className={classes.orangeAvatar}>{lib.name.substring(0, 1)}</Avatar>
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

export default withStyles(styles)(LibraryList);