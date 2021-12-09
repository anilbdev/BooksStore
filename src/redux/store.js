import {createStore,combineReducers} from 'redux'

import {counterReducer,resetReducer} from './reducer'


//Root reducer
const rootReducer = combineReducers({
    counterReducer,
    resetReducer
})
const store = createStore(rootReducer)

export default store
