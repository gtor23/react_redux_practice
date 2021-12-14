//combining reducers
import {combineReducers} from 'redux'
import accountReducer from './accountReducer'

//create a function that takes in all the reducers that will be combined
//takes in a key/value pair
const reducers = combineReducers({
    account: accountReducer
});

export default reducers;