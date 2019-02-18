import React from 'react';

import ChipInput from 'material-ui-chip-input'



const LibraryTags = ({ other }) => (
    <ChipInput
        {...other} // to pass down to TextField
        label="Tags"
        onChange={(chips) => this.handleChipChange(chips)}
    />
);

//todo implement handleChipChange
const handleChipChange = (chips) => {
    this.formikRef.current.setFieldValue('tags', chips, false);
}

export default LibraryTags;
