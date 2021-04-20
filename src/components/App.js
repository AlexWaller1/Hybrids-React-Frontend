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
// component is a piece of the UI
// components built separately to make complex interfaces simpler and better organized
// App.js is the root component, parent of the other components
// There is essentially a tree of components
// state is data we want displayed when the component is rendered
// render resposible for describing what UI should look like
// virtual DOM vs. Real DOM
// No longer have to manipulate the DOM
// So no more querySelectors or eventListeners
// just have to change state of react components
// React is a library for building user interfaces
// React is V in MVC
// JSX - JavaScript Syntax Extension
// There are hook components and class components
// hook components use functions
// the html looking language rendered by components is JSX
// props are basically attributes
// Components can have "state" which is an object that determines how
// a component renders and behaves