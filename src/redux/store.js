import {createStore,combineReducers} from 'redux'

import {counterReducer,resetReducer,cartReducer} from './reducer'


//Root reducer
const rootReducer = combineReducers({
    counterReducer,
    resetReducer,
    cartReducer
})
const store = createStore(rootReducer)

export default store
