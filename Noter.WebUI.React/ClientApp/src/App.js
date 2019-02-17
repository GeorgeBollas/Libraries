import React from 'react';
import { Route } from 'react-router';
import Shell from './containers/Shell';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Search from './components/Search'

export default () => (
    <Shell>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/search/:id' component={Search} />
    </Shell>
);
