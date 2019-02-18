import React, { Fragment } from "react";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Details from './Details';
import Tags from './Tags'
import Searches from "./Searches";
import Syncs from "./Syncs";

// get data from librariesModule store

const LibraryOptions = ({ selectedOptionScreen, library }) => {
    return (
        <Fragment>
            <div>
                <h2>Library {library.name}</h2>
                <List className='left'>
                    <ListItem>
                        <Link >Details</Link>
                    </ListItem>
                    <ListItem>
                        <Link >Tags</Link>
                    </ListItem>
                    <ListItem>
                        <Link >Searches</Link>
                    </ListItem>
                    <ListItem>
                        <Link >Syncs</Link>
                    </ListItem>
                </List>
            </div>
            {/* one possible way */}
            {/* This would be in affect dynamically */}
            <div className='right'>
                {selectedOptionScreen === 0 && <Details />}
                {selectedOptionScreen === 1 && <Tags />}
                {selectedOptionScreen === 2 && <Searches />}
                {selectedOptionScreen === 2 && <Syncs />}
            </div>
        </Fragment>
    );
}

export default LibraryOptions;