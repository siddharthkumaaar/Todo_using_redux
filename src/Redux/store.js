import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import authReducer from './authReducer'

import reducer, {initState} from './reducer'

const rootReducer = combineReducers({app:reducer,auth:authReducer})

const logger = () => next => action => {
    console.log("logger 1 dispatching action:", action)
    return next(action)
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer,
    composeEnhancer(applyMiddleware(logger))
    )