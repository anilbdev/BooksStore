import {createStore,combineReducers} from 'redux'

import {cartReducer} from './reducer'


//Root reducer
const rootReducer = combineReducers({
   
    cartReducer
})
const store = createStore(rootReducer)

export default store
