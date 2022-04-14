import * as constants from '../constants/index';

const initialState = {
    count: 0
}

const countReducer = (state = initialState.count,action) =>{

    switch(action.type){
        case constants.COUNTER_CHANGE:
            return{
                ...state,
                count:action.payload
            };
            break;
        case constants.INCREMENT:
            return  state + action.payload;
            break;
        case constants.DECREMENT:
            return  state - action.payload;
            break;
        default:
            return state;    
    }
}


export default countReducer;

