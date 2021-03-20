import {createStore} from "redux"

const state ={
    counter:5
}
function reducers(state,action){
switch(action.type){
        case "Increase":
            return {counter:state.counter+1}
        case "Decrease":
            return{counter:state.counter-1}
        default :
        return state    
    }
}
export default createStore (reducers,state);


