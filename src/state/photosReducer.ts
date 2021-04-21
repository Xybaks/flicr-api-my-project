import {photoAPI, PhotoType} from "../api/api";
import {ActionsType, AppRootStateType, ThunkType} from "./reduxStore";
import {ThunkDispatch} from "redux-thunk";

// for actions names
const SET_PHOTOS = "FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS";
const SET_PHOTOS_IS_GETTING_PROGRESS = "FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS-IS-GETTING-PROGRESS";
const SET_SEARCH_NAME = "FLICR-API-MY-Project/PHOTOS-REDUCER/SET-SEARCH-NAME";

export type InitialStatePhotosReducerType = {
    searchName: string,
    page: number,
    pages: number,
    perpage: number,
    total: string,
    photo: Array<PhotoType>,
    isGettingPhotosSuccess: boolean,
    isGettingPhotosProgress: boolean, // true, if loading of photos is in progress
    gettingPhotosError: string

}

const initialState: InitialStatePhotosReducerType = {
    searchName: "",
    page: 0,
    pages: 0,
    perpage: 0,
    total: "",
    photo: [],
    isGettingPhotosSuccess: false,
    isGettingPhotosProgress: false,
    gettingPhotosError: ""
}


export const photosReducer =
    (state = initialState, action: PhotosReducerActionsType): InitialStatePhotosReducerType => {
        switch (action.type) {
            case SET_PHOTOS:
                return {...state, photo: action.photos}
            case SET_PHOTOS_IS_GETTING_PROGRESS:
                return {...state, isGettingPhotosProgress: action.isGettingPhotosProgress}
            case SET_SEARCH_NAME:
                return {...state, searchName: action.searchName}
            default:
                return state
        }
    }
//ActionCreators

export const setPhotos = (photos: Array<PhotoType>) => ({type: SET_PHOTOS, photos} as const);
export const setIsGettingPhotosProgress = (isGettingPhotosProgress: boolean) =>
    ({type: SET_PHOTOS_IS_GETTING_PROGRESS, isGettingPhotosProgress} as const);
export const setSearchName = (searchName: string) => ({type: SET_SEARCH_NAME, searchName} as const);

//ThunksCreators
export const getPhotos = (text: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
        dispatch(setIsGettingPhotosProgress(true));
        const data = await photoAPI.getPhotos(text);
        if (data.stat === "ok") {
            dispatch(setPhotos(data.photos.photo))
        }
        dispatch(setIsGettingPhotosProgress(false));
    }
//ActionTypes
type setPhotosActionType = ReturnType<typeof setPhotos>
type setIsGettingPhotosProgressActionType = ReturnType<typeof setIsGettingPhotosProgress>
type setSearchNameActionType = ReturnType<typeof setSearchName>

//

// common ActionType of this reducer
export type PhotosReducerActionsType =
    setPhotosActionType | setIsGettingPhotosProgressActionType | setSearchNameActionType
