// Actions
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const MULTIPLY = "MULTIPLY"
export const DEVIDE = "DEVIDE"
export const NEW_COUNTER = 'NEW_COUNTER'


//Action Creator
export const incrementCount = (index) => {
    return {
        type:INCREMENT,
        payload:{index}
    }
}

export const decrementCount = (index) => {
    return {
        type:DECREMENT,
        payload:{index}
    }
}

// export const multiplyCount = () => {
//     return{
//         type:MULTIPLY
//     }
// }

// export const devideCount = () => {
//     return {
//         type:DEVIDE
//     }
// }

export const newCounter = (name) => {
    return{
        type:NEW_COUNTER,
        payload:{ name }
    }
}