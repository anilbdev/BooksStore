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


