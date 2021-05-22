import {authAction, authActionTypes, authState} from "../../types/auth";


const initialState: authState = {
    loading: false,
    error: null,
    id: null,
    token: null,
    theme: 0,
    language: {
        index: 0,
        lan: 'ru',
    },
}


export const authReducer = (state = initialState, action: authAction): authState => {
    switch (action.type) {
        case authActionTypes.LOGIN_USER_START:
            return {...state, loading: true}
        case authActionTypes.LOGIN_USER_ERROR:
            return {...state, loading: false, error: action.payload}
        case authActionTypes.LOGIN_USER_SUCCESS:
            return {...state, loading: false, id: action.payload.id , token: action.payload.token}
        case authActionTypes.LOGOUT_USER:
            return initialState
        case authActionTypes.CHANGE_THEME:
            return {...state, theme: action.payload}
        case authActionTypes.CHANGE_LANGUAGE:
            return {...state, language: {index: action.payload.index, lan: action.payload.lan}}
        default:
            return {...state}
    }
}