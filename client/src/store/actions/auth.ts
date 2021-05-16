import {Dispatch} from "redux";
import {
    authAction,
    authActionTypes,
    IChangeLanguage,
    IChangeTheme,
    ILoginUserErrorAction,
    ILoginUserStartAction,
    ILoginUserSuccessAction,
    ILogoutUserAction
} from "../../types/auth";


export const fetchLogin = () => async (dispatch:Dispatch<authAction>) => {
    try {
        dispatch(loginUserStart())

    } catch (e) {

    }
}

export const logoutUser = ():ILogoutUserAction => ({
    type: authActionTypes.LOGOUT_USER
})

export const changeTheme = (payload: number): IChangeTheme => ({
    type: authActionTypes.CHANGE_THEME,
    payload
})

export const changeLanguage = (payload: number) : IChangeLanguage => ({
    type: authActionTypes.CHANGE_LANGUAGE,
    payload
})

const loginUserStart = ():ILoginUserStartAction => ({
    type: authActionTypes.LOGIN_USER_START
})

const loginUserSuccess = (payload: any): ILoginUserSuccessAction => ({
    type: authActionTypes.LOGIN_USER_SUCCESS,
    payload,
})

const loginUserError = (payload: string): ILoginUserErrorAction => ({
    type: authActionTypes.LOGIN_USER_ERROR,
    payload,
})