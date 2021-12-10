import {TYPE} from '..'

//action creator

export const addToCart = (book) => ({
    type: TYPE.ADD_TO_CART,
    payload:book
})
export const removeFromCart = (book)=>({
    type:TYPE.REMOVE_FROM_CART,
    payload:book
})


