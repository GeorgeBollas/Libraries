import React, { Fragment } from "react";

const Search = (props) => {
    return (
        <div>
            Searching for library {props.match.params.id}
        </div>
    );
}

export default Search;