//creating a store
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'

//create a function that takes in the reducers and default state
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);