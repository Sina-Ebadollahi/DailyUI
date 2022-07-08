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
    ipData: { ip: ""},
}
export type locationReducerStateType = {
    currentAddress: string | null,
    pastPageAddress: string | null,
    isRedirected: boolean,
    ipData: {ip: string},
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
// auth reducer info
let authInfoReducerState = {
    userID: 1,
    userName: "",
    isAdmin: false,
    other: null,
}
export type authInfoReducerType = {
    userID: number | null;
    userName: string | null;
    isAdmin: boolean | null;
    other: object | null;
}

const authInfoReducer = (state: authInfoReducerType = authInfoReducerState, action: Action): any => {
    switch(action.type){
        case "LOG_IN":
            return {
                ...state
            }
        default:
            return state;
    }
}
type windowSizeReducerType = {
    width: number;
    height: number;
}
const windowSizeReducer = (state: windowSizeReducerType = {width: window.outerWidth, height: window.outerHeight}, action: Action) => {
    switch(action.type){
        case 'CHANGE_WINDOW_SIZE':
            return {
                width: action.payload.width,
                height: action.payload.height
            }
        default:
            return state;    
    }
}

// combining reducers
const combinedReducersList = combineReducers({themeReducer, locationReducer, authInfoReducer, windowSizeReducer})
// root reducer
export const rootReducer = createStore(combinedReducersList);
export type rootListType = {
    themeReducer: any,
    locationReducer: any,
    authInfoReducer: any,
    windowSizeReducer: any
}