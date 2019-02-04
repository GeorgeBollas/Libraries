import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import LibraryItem from './LibraryItem';

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class LibraryList extends Component {

    renderLibraries(libraries) {
        return libraries.map((l) => {
            return (
                <LibraryItem library={l} key={l.libraryId} />
            );
        });
    }

    render() {
        const { libraries, loading } = this.props;

        if (loading) {
            return <LinearProgress />
        }

        //else if (error) {
        //    return <div className="alert alert-danger">Error: {error.message}</div>
        //}

        return (
            <div className="container">
                <ul className="list-group">
                    {this.renderLibraries(libraries)}
                </ul>
            </div>
        );
    }
}


export default (withStyles(styles, { withTheme: true }))(LibraryList);



