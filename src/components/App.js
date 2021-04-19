import React from 'react';

import Router from './Router'
import HybridsContainer from './HybridsContainer'



const App = () => {
    return (
        <div>
        
            <HybridsContainer />
            <Router />
        </div>
    );
};

export default App;

// make sure to place nav links in the <div>