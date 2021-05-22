

export interface authState {
    loading: boolean;
    error: null | string;
    id: null | number;
    token: null |string;
    theme: number;
    language: {
        index: number,
        lan: string
    }
}

export enum authActionTypes {
    LOGIN_USER_START= "LOGIN_USER_START",
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
    LOGOUT_USER = "LOGOUT_USER",
    CHANGE_THEME = "CHANGE_THEME",
    CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}

export interface ILoginUserStartAction {
    type: authActionTypes.LOGIN_USER_START
}

export interface IChangeTheme {
    type: authActionTypes.CHANGE_THEME;
    payload: number
}

export interface IChangeLanguage {
    type: authActionTypes.CHANGE_LANGUAGE,
    payload: {
        index: number,
        lan: string
    }
}


export interface ILoginUserSuccessAction {
    type: authActionTypes.LOGIN_USER_SUCCESS;
    payload: any
}

export interface ILoginUserErrorAction {
    type: authActionTypes.LOGIN_USER_ERROR;
    payload: string
}

export interface ILogoutUserAction {
    type: authActionTypes.LOGOUT_USER
}

export type authAction =
    ILogoutUserAction |
    ILoginUserErrorAction |
    ILoginUserStartAction |
    ILoginUserSuccessAction |
    IChangeTheme |
    IChangeLanguage

