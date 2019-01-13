import LibraryItem from './LibraryItem';
import React from 'react';

export const LibraryList = props => {
    return (
        <div>
            {
                props.libraries.map(library => <LibraryItem library={library} key={library.libraryId} /> )
            }
        </div>
    );
};
