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

export default LibraryTags;
