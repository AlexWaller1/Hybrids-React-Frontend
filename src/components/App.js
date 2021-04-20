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

// an arrow function is a compact alternative to a traditional function
// but is limited and can't be used in all situations
// Arrow function does binding autmoatically and does not require 'this'
// Arrow function has an implied (built-in) 'return' where 'return must be
// explicitly expressed in a regular function
// an arrow function is 'anonymous' which means it can't be called back
// or used again. Only used when you need to use a function one time
// In regular functions the 'this' keyword represents the object that
// called the function, which could be the window, the document, a button, or whatever
// With arrow functions the 'this' keyword always represents the object that
// defined the arrow function.