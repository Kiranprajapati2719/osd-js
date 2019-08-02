import React from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Login from '../components/login/Login';
import Bookview from '../components/bookview/Bookview';
import Listview from '../components/bookview/Listview';
import Homepage from '../components/homepage/Homepage';

export default AppRouter => (
    <Router>
        <Switch>
            <Route exact path='/' render={()=><Homepage/>}/>
            <Route path='/login' render={()=><Login/>}/>
            <Route path='/book' render={()=><Bookview/>}/>
            <Route path='/search' render={()=><Listview/>}/>
        </Switch>
    </Router>
);