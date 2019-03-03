import React from 'react';
import { Route } from 'react-router';
import Shell from './containers/Shell';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Search from './components/Search'
import EditLibrary from './components/Libraries/Library'
import LibraryDetails from './components/Libraries/LibraryDetails'

export default () => (
    <Shell>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/search/:id' component={Search} />
        <Route path='/library/:id' component={EditLibrary} />
        <Route path='/library-details/:id' component={LibraryDetails} />
    </Shell>
);
