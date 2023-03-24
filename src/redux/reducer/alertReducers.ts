import { Action } from "../actions/actions";

export interface MessageState {
    message : {message: string, type: string, isVisible: boolean, color?: string, values?: any}
}

const initialState = {
    message : {message : '', type: '', isVisible: false}
}


export const alertReducers = (state: MessageState = initialState, action: Action) =>{
    switch(action.type){
        case "SHOW_ALERT" :{
            return {...state, message: action.payload}
        }
        default:
            return state;
    }
}