import {ActionsType, AppRootStateType, ThunkType} from "./reduxStore";
import {ThunkDispatch} from "redux-thunk";
import {PhotoInStoreType} from "./photosReducer";

// for actions names
const SET_PHOTO_TO_FAVORITE = "FLICR-API/FAVORITE-REDUCER/SET_F_PHOTO";
const DELETE_PHOTO_FROM_FAVORITE = "FLICR-API/FAVORITE-REDUCER/DELETE-F-PHOTO";
const ADD_TAG_TO_FAVORITE = "FLICR-API/FAVORITE-REDUCER/ADD-TAG-TO-FAVORITE";
const DELETE_TAG_FROM_FAVORITE = "FLICR-API/FAVORITE-REDUCER/DELETE-TAG-F-FAVORITE";

export type FavoritePhotoType = {
    favoritePhotoId: string,
    favoritePhoto: PhotoInStoreType
}

export type InitialStateFavoriteReducerType = {
    favorite: Array<FavoritePhotoType>
}


// function to set initial state from localeStorage
const getInfoFromLocalStorage = (): InitialStateFavoriteReducerType => {
    let storageInitialState: InitialStateFavoriteReducerType = {favorite: []}
    try {
        let keys: Array<string> = Object.keys(localStorage)
        let i = keys.length;
        while (i--) {
            let value = JSON.parse(localStorage.getItem(keys[i]) as string);
            let k: string = keys[i]
            storageInitialState.favorite.push({favoritePhotoId: k, favoritePhoto: value})
        }
    } catch {
        console.log("The app can't get data from localeStorage")
    }
    return storageInitialState;
}

const initialState: InitialStateFavoriteReducerType = getInfoFromLocalStorage()

export const favoriteReducer =
    (state = initialState, action: FavoriteReducerActionsType): InitialStateFavoriteReducerType => {
        switch (action.type) {

            case SET_PHOTO_TO_FAVORITE:
                return {
                    ...state,
                    favorite: [
                        ...state.favorite, {
                            favoritePhotoId: action.favoritePhotoId,
                            favoritePhoto: action.favoritePhoto
                        }
                    ]
                }
            case DELETE_PHOTO_FROM_FAVORITE:
                return {
                    ...state,
                    favorite: state.favorite.filter(favPhoto => favPhoto.favoritePhotoId !== action.id)
                }
            case ADD_TAG_TO_FAVORITE:
                return {
                    ...state,
                    favorite: state.favorite.map(favPhoto => (favPhoto.favoritePhotoId !== action.id)
                        ? favPhoto
                        : {
                            ...favPhoto, favoritePhoto:
                                {...favPhoto.favoritePhoto, tags: [...favPhoto.favoritePhoto.tags, action.tag]}
                        }
                    )
                }
            case DELETE_TAG_FROM_FAVORITE:

                return {
                    ...state,
                    favorite: state.favorite.map(favPhoto => (favPhoto.favoritePhotoId !== action.id)
                        ? favPhoto
                        : {
                            ...favPhoto, favoritePhoto:
                                {
                                    ...favPhoto.favoritePhoto,
                                    tags: [...favPhoto.favoritePhoto.tags.filter(t => t !== action.tag ? 1 : -1)]
                                }
                        }
                    )
                }
            default:
                return state
        }
    }

//ActionCreators
export const setPhotoToFavorite = (favoritePhotoId: string, favoritePhoto: PhotoInStoreType) => (
    {type: SET_PHOTO_TO_FAVORITE, favoritePhotoId, favoritePhoto} as const);
export const deletePhotoFromFavorite = (id: string) => (
    {type: DELETE_PHOTO_FROM_FAVORITE, id} as const);
export const addTagToFavorite = (id: string, tag: string) => (
    {type: ADD_TAG_TO_FAVORITE, id, tag} as const);
export const deleteTagFromFavorite = (id: string, tag: string) => (
    {type: DELETE_TAG_FROM_FAVORITE, id, tag} as const);

// ThunksCreators
export const addPhotoToFavorite = (favoritePhotoId: string, favoritePhoto: PhotoInStoreType): ThunkType =>
    (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
        dispatch(setPhotoToFavorite(favoritePhotoId, favoritePhoto));
        try {
            localStorage.setItem(favoritePhotoId, JSON.stringify(favoritePhoto))
        } catch {
            console.log("image can't be added to LocaleStorage")
        }
    }

export const removeFavoritePhoto = (favoritePhotoId: string): ThunkType =>
    (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
        dispatch(deletePhotoFromFavorite(favoritePhotoId));
        try {
            localStorage.removeItem(favoritePhotoId)
        } catch {
            console.log("image can't be deleted from LocaleStorage")
        }
    }

export const addTagToFavoriteTC = (id: string, tag: string): ThunkType =>
    (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
        dispatch(addTagToFavorite(id, tag));
        try {
            let favoritePhoto: PhotoInStoreType = JSON.parse(localStorage.getItem(id) as string)
            favoritePhoto = {...favoritePhoto, tags: [...favoritePhoto.tags, tag]}
            localStorage.setItem(id, JSON.stringify(favoritePhoto))
        } catch {
            console.log("tag can't be added to LocaleStorageTS")
        }
    }

export const deleteTagFromFavoriteTC = (id: string, tag: string): ThunkType =>
    (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
        console.log("dddds")
        dispatch(deleteTagFromFavorite(id, tag));
        try {
            let favoritePhoto: PhotoInStoreType = JSON.parse(localStorage.getItem(id) as string)
            favoritePhoto = {...favoritePhoto, tags: [...favoritePhoto.tags.filter(t => t !== tag ? 1 : -1)]}
            localStorage.setItem(id, JSON.stringify(favoritePhoto))
        } catch {
            console.log("tag can't be deleted from LocaleStorageTS")
        }
    }

//ActionTypes
type SetPhotoToFavoriteActionType = ReturnType<typeof setPhotoToFavorite>
type DeletePhotoFromFavoriteActionType = ReturnType<typeof deletePhotoFromFavorite>
type AddTagToFavoriteActionType = ReturnType<typeof addTagToFavorite>
type DeleteTagFromFavoriteActionType = ReturnType<typeof deleteTagFromFavorite>


// common ActionsType of this reducer
export type FavoriteReducerActionsType =
    SetPhotoToFavoriteActionType | DeletePhotoFromFavoriteActionType
    | AddTagToFavoriteActionType | DeleteTagFromFavoriteActionType
