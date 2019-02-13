//handleChipChange = (chips) => {
//    this.formikRef.current.setFieldValue('tags', chips, false);
//}

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/LibraryEditing';


const LibrarySyncs = ({ other}) => ( <div>Syncs</div> );

export default connect(
    state => state.counter,
    dispatch => bindActionCreators(actions, dispatch)
)(LibrarySyncs);
