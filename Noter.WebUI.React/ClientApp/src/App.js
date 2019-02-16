import React from 'react';
import { Route } from 'react-router';
import Shell from './containers/Shell';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

export default () => (
    <Shell>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Shell>
);
