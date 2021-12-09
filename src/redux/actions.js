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
export const addToCart = () => ({
    type: TYPE.ADD_TO_CART
})
export const removeFromCart = ()=>({
    type:TYPE.REMOVE_FROM_CART
})


