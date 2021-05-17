import {applyMiddleware, createStore, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/authReducer";
import {videoReducer} from "./reducers/videoReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    video: videoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
