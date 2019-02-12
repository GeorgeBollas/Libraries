import React from 'react';
import PropTypes from 'prop-types'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Paper from '@material-ui/core/Paper';

import DraftsIcon from '@material-ui/icons/Drafts';



//const styles = theme => ({
//    root: {
//        width: '100%',
//        maxWidth: 360,
//        backgroundColor: theme.palette.background.paper,
//    },
//});



const Navs = props => {
    const {
        classes, //todo get rid of this and use own styles
        handleListItemClick,
        selectedIndex,
    } = props;

    return (


        //<Paper className={classes.paper}>
            <Paper>
            <List component="nav">
                <ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
                    <ListItemIcon><DraftsIcon /></ListItemIcon>
                    <ListItemText primary="Details" />
                </ListItem>
                <ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
                    <ListItemIcon><DraftsIcon /></ListItemIcon>
                    <ListItemText primary="Tags" />
                </ListItem>
                <ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2)}>
                    <ListItemIcon><DraftsIcon /></ListItemIcon>
                    <ListItemText primary="Syncs" />
                </ListItem>
                <ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3)}>
                    <ListItemIcon><DraftsIcon /></ListItemIcon>
                    <ListItemText primary="Searches" />
                </ListItem>
            </List>
        </Paper>
    )
}

Navs.propTypes = {
}

export default Navs;




