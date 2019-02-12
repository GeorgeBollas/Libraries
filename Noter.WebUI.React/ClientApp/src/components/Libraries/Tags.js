import React from 'react';
import PropTypes from 'prop-types'


//const styles = theme => ({
//    root: {
//        width: '100%',
//        maxWidth: 360,
//        backgroundColor: theme.palette.background.paper,
//    },
//});

const Tags = props => {
    const {
        classes, //todo get rid of this and use own styles
    } = props;

    return (
        <div className={classes.root}>Tags go here</div>
    )
}

Tags.propTypes = {
}

export default Tags;

