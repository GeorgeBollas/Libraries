import React from "react";

import TextField from '@material-ui/core/TextField';

const Filter = ({ filterText, onFilterTextChange, classes}) => {

    const onKeyDown = (event) => {
        if (event.keyCode === 27) {
            event.preventDefault();
            onFilterTextChange('');
        }
    }

    return (
        <div className={classes.root}>
            <TextField
                id="filterText"
                label="Search"
                className={classes.textField}
                value={filterText}
                onKeyDown={onKeyDown}
                onChange={e => onFilterTextChange(e.target.value)}
                margin="normal"
            />
        </div>
    );
}

export default Filter;