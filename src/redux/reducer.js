// import {TYPE} from '../index'
// console.log(TYPE)

export const TYPE = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}
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

const initialState = {
    counter: 0
}



export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case TYPE.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state

    }
}

//reset Reducer
export const resetReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TYPE.RESET:
            
            return {
                ...state,
                counter:0
            }
    
        default:
            return state
    }
}

// export default rootReducer