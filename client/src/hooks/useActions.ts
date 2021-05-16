import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AuthActionCreator from "../store/actions/auth"


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthActionCreator, dispatch)
}