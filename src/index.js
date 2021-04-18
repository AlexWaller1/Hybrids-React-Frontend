// react-redux, redux, thunk

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// need to create a store for redux => 1. reducer 2. dev tools

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware))
