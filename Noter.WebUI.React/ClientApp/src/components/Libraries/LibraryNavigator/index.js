import React, { Fragment } from "react";

import LibraryFilter from './LibraryFilter';
import LibraryList from './LibraryList'

export default function LibraryNavigator() {
    return (
        <Fragment>
            <LibraryFilter />
            <LibraryList />
        </Fragment>
    );
}