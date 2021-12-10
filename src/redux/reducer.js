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
            return state.filter(item => item.title !== action.payload.title)
        default:
            return state
    }
}
