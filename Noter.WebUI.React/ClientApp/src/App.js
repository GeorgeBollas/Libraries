import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Libraries from './components/Libraries/Libraries';
import LibraryEditor from './components/Libraries/LibraryEditor';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/libraries' component={Libraries} />
        <Route path='/library-editor' component={LibraryEditor} />
    </Layout>
);
