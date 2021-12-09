import { TYPE } from '../stringConstants/actions'
const initialState = {
    counter: 0
}
//cart reducer
export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case TYPE.ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        case TYPE.REMOVE_FROM_CART:
            return state.filter(item => item !== action.payload)
        default:
            return state
    }
}
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case TYPE.INCREMENT:
            return state+1
            // {
            //     ...state,
            //     counter: state.counter + 1
            // }
        case TYPE.DECREMENT:
            return  state-1
            // {
            //     ...state,
            //     counter: state.counter - 1
            // }
        default:
            return state
    }
}
//reset Reducer
export const resetReducer = (state = 0, action) => {
    switch (action.type) {
        case TYPE.RESET:
            return state=0
            //  {
            //     ...state,
            //     counter: 0
            // }
        default:
            return state
    }
}
// export default rootReducer