import * as constants from '../constants/index';

// export function changeCount (count){
//     return{
//         type:constants.COUNTER_CHANGE,
//         payload:count
//     }
// }
// export function incrementCount (count){
//     return{
//         type:constants.INCREMENT,
//         payload:count
//     }
// }
// export function decrementCount (count){
//     return{
//         type:constants.DECREMENT,
//         payload:count
//     }
// }

export const incrementCount = (count) => {
    return (dispatch) => {
        dispatch({
            type: constants.INCREMENT,
            payload: count
        })
    }
}

export const decrementCount = (count) => {
    return (dispatch) => {
        dispatch({
            type: constants.DECREMENT,
            payload: count
        })
    }
}