import {TYPE} from '..'

//action creator
export const increment = () => ({
    type: TYPE.INCREMENT
})
export const decrement = () => ({
    type: TYPE.DECREMENT
})
export const reset = () => ({
    type: TYPE.RESET
})
export const addToCart = (book) => ({
    type: TYPE.ADD_TO_CART,
    payload:book
})
export const removeFromCart = (book)=>({
    type:TYPE.REMOVE_FROM_CART,
    payload:book
})


