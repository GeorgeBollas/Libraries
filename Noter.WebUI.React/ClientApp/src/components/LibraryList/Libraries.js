import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/LibraryList';
import { LibraryList } from '../../components/LibraryList/LibraryList';

class Libraries extends Component {
    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        this.props.requestLibraryList();
    }

    render() {
        return (
            <div>
                <h1>Libraries</h1>
                <LibraryList libraries={this.props.libraries} />
            </div>
        );
    }

}

export default connect(
    state => state.libraries,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Libraries);
