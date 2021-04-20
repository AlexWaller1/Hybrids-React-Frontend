// react-redux, redux, thunk

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import { rootReducer } from './reducers/rootReducer'

// need to create a store for redux => 1. reducer 2. dev tools

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

    ReactDOM.render(
        <Provider store={store}>
            <Router>
            <App />
            </Router>
            
        </Provider>,
        document.getElementById('root')
    )

    // we're inserting our App into the root <div> of the DOM so we can
    // use it in the browser