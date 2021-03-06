import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import HybridsList from '../components/HybridsList'
import About from '../components/About'


const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/about' component={About} />
           <Route path='/Hybrids' component={HybridsList} />
       </Switch>
    );
};

export default Router;