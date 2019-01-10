import React from 'react';

const LibraryItem = props => {
    const lib = props.library;
    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{lib.name}</p>
            </div>
        </div>
    );
};

export default LibraryItem;