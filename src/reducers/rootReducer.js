import { combineReducers } from 'redux'

import { hybridsReducer } from './gradsReducer'

export const rootReducer = combineReducers({
    hybrids: hybridsReducer
})