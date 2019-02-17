import React, { Fragment } from "react";

import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const Filter = ({ filterText, onFilterTextChange, classes }) => {

    const onKeyDown = (event) => {
        if (event.keyCode === 27) {
            event.preventDefault();
            onFilterTextChange('');
        }
    }

    return (
        <Fragment>
            <TextField
                id="filterText"
                label="Search"
                fullWidth
                value={filterText}
                onKeyDown={onKeyDown}
                onChange={e => onFilterTextChange(e.target.value)}
                margin="normal"
            />
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
        </Fragment>
    );
}

export default Filter;