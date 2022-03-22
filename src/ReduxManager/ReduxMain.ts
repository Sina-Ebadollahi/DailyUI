import { createStore, combineReducers } from 'redux'
// global action interface
type Action = {
    type: string,
    payload: any
}
// theme reducer
const themeReducer = (state: string = 'Light', action: Action): string => {
    switch(action.type){
        case 'CHANGE_THEME':
            return action.payload;
        default:
            return state;
    }
}
// current web location reducer
let locationReducerState = {
    currentAddress: null,
    pastPageAddress: null,
    isRedirected: false,
    ipData: null,
}
type locationReducerStateType = {
    currentAddress: string | null,
    pastPageAddress: string | null,
    isRedirected: boolean,
    ipData: object | null,
}
const locationReducer = (state: locationReducerStateType = locationReducerState , action: Action ): any => {
    switch(action.type){
        case 'CHANGE_CURRENT_ADDRESS':
            return {
                currentAddress: action.payload.currentAddress,
                pastPageAddress: action.payload.pastPageAddress,
                isRedirected: action.payload.isRedirected,
            }
        case 'CHANGE_IP':
            return{
                ...state,
                ipData: action.payload
            }    
        default:
            return state;
    }
}




// combining reducers
const combinedReducersList = combineReducers({themeReducer, locationReducer})
// root reducer
export const rootReducer = createStore(combinedReducersList);
export type rootListType = {
    themeReducer: any,
    locationReducer: any
}