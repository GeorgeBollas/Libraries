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

const LibraryFilter = props => {
    const {
        filterText,
        classes, //todo get rid of this and use own styles
    } = props;

        return (
            <div className={classes.root}>{filterText}
            </div>
        )
}

LibraryFilter.propTypes = {
    filterText: PropTypes.string.isRequired,
}

export default LibraryFilter;

