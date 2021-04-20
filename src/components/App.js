// root component of our application

import React from 'react';

import Router from './Router'
import HybridsContainer from './HybridsContainer'
import Header from './Header'



const App = () => {
    return (
        <div>
            <Header />
            <HybridsContainer />
            <Router />
        </div>
    );
};

export default App;

