import thunk, {ThunkAction} from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {photosReducer, PhotosReducerActionsType} from "./photosReducer";

const rootReducer = combineReducers({
    photos: photosReducer,
    // login: loginReducer,
    // register: registerReducer,
    // recover: recoverReducer,
    // profile: profileReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type ActionsType =PhotosReducerActionsType

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

// @ts-ignore
window.store = store;