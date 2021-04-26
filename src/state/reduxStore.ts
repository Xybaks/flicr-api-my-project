import thunk, {ThunkAction} from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {photosReducer, PhotosReducerActionsType} from "./photosReducer";
import {favoriteReducer, FavoriteReducerActionsType} from "./favoriteReducer";

const rootReducer = combineReducers({
    photos: photosReducer,
    favorite:favoriteReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type ActionsType =PhotosReducerActionsType | FavoriteReducerActionsType

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

