import { DEVIDE } from "../actions";

const devideReducer = (state=100,action) =>{

    switch(action.type){
        case DEVIDE:
            return state / 2
            break;

        default:
         return state;   
    }
}

export default devideReducer;