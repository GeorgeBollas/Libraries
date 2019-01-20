import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import LibraryItem from './LibraryItem';

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class LibraryList extends Component {

    componentWillMount() {
        //this.props.fetchLibraries();
    }

    renderLibraries(libraries) {
        return libraries.map((l) => {
            return (
                <LibraryItem library={l} key={l.libraryId} />
            );
        });
    }

    render() {
        const { libraries, loading, error } = this.props.libraries;

        if (loading) {
            return <div className="container"><h3>Loading...</h3></div>
        } else if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

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



