//handleChipChange = (chips) => {
//    this.formikRef.current.setFieldValue('tags', chips, false);
//}

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChipInput from 'material-ui-chip-input'

import * as actions from '../../actions/LibraryEditing';


const LibraryTags = ({ other, handleChipChange }) => (
    <ChipInput
        {...other} // to pass down to TextField
        label="Tags"
        onChange={(chips) => this.handleChipChange(chips)}
    />
);

export default connect(
    state => state.counter,
    dispatch => bindActionCreators(actions, dispatch)
)(LibraryTags);
