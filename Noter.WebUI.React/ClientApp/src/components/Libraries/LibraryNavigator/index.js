import React, { Fragment } from "react";

import LibraryFilter from './LibraryFilter';
import LibraryList from './LibraryList'
import NewLibrary from "./NewLibrary";

export default function LibraryNavigator() {
    return (
        <Fragment>
            <NewLibrary />
            <LibraryFilter />
            <LibraryList />
        </Fragment>
    );
}