import LibraryItem from './LibraryItem';
import React from 'react';

export const LibraryList = props => {
    return (
        <div>
            {
                props.libraries.map(library => {
                    return (
                        <LibraryItem
                            library={library}
                            key={library.id} />
                    );
                })
            }
        </div>
    );
};
