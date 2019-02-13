import React from 'react';
import PropTypes from 'prop-types'

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

