import { INCREMENT,DECREMENT,MULTIPLY,NEW_COUNTER } from "../actions/index";


const counterReducer = (state = [], action) => {
    switch(action.type){
        case INCREMENT:
            return state.map((count,i) => {
                if(action.payload.index === i){
                    count.value += 1
                }
                return count;
            })
            break;

        case DECREMENT:
            return state.map((count,i) => {
                if(action.payload.index === i){
                    count.value -= 1
                }
                return count;
            })
            break;

        // case MULTIPLY:
        //     return state * state;
        //     break;   

        case NEW_COUNTER:
            return [...state, {name:action.payload,value : 0}]
            break;

        default:
            return state;

    }
}

export default counterReducer;