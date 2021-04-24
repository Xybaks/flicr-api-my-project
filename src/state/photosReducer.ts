import {photoAPI, PhotoType} from "../api/api";
import {ActionsType, AppRootStateType, ThunkType} from "./reduxStore";
import {ThunkDispatch} from "redux-thunk";

// for actions names
const SET_PHOTOS = "FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS";
const SET_PHOTOS_IS_GETTING_PROGRESS = "FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS-IS-GETTING-PROGRESS";
const SET_SEARCH_NAME = "FLICR-API-MY-Project/PHOTOS-REDUCER/SET-SEARCH-NAME";
const ADD_TAG = "FLICR-API-MY-Project/PHOTOS-REDUCER/ADD-TAG";
const DELETE_TAG = "FLICR-API-MY-Project/PHOTOS-REDUCER/DELETE-TAG";
const SET_PAGE = "FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PAGE";


export type PhotoInStoreType = {
    farm: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
    tags: Array<string>
}

export type InitialStatePhotosReducerType = {
    searchName: string,
    page: number,
    pages: number,
    perpage: number,
    total: string,
    photo: Array<PhotoInStoreType>,
    isGettingPhotosSuccess: boolean,
    isGettingPhotosProgress: boolean, // true, if loading of photos is in progress
    gettingPhotosError: string // is not used
}

const initialState: InitialStatePhotosReducerType = {
    searchName: "",
    page: 1,
    pages: 0,
    perpage: 0,
    total: "",
    photo: [],
    isGettingPhotosSuccess: true,
    isGettingPhotosProgress: false,
    gettingPhotosError: ""
}


export const photosReducer =
    (state = initialState, action: PhotosReducerActionsType): InitialStatePhotosReducerType => {
        switch (action.type) {
            case SET_PHOTOS:
                return {
                    ...state,
                    page: action.page,
                    pages: action.pages,
                    photo: action.photos.map(p => ({...p, tags: []})),
                    isGettingPhotosSuccess: action.photos.length !== 0
                }

            case SET_PHOTOS_IS_GETTING_PROGRESS:
                return {...state, isGettingPhotosProgress: action.isGettingPhotosProgress}

            case SET_SEARCH_NAME:
                return {...state, searchName: action.searchName}

            case ADD_TAG:
                return {
                    ...state,
                    photo: state.photo.map(
                        p => (
                            (p.id === action.id && !p.tags.includes(action.tag)) // check for  adding duplicate tag
                                ?
                                {
                                    ...p,
                                    tags: [...p.tags, action.tag]
                                }
                                : p)
                    )
                }

            case DELETE_TAG:
                return {
                    ...state,
                    photo: state.photo.map(
                        p => {
                            if (p.id === action.id) {
                                let tagIndex = p.tags.indexOf(action.tag, 0) // to find index of tag
                                let newtags = [...p.tags] // copy for splice
                                if (tagIndex > -1)    // no possibility to use 2 several same tags
                                    newtags.splice(tagIndex, 1)
                                return {
                                    ...p
                                    ,
                                    tags: newtags
                                }
                            } else return p
                        }
                    )
                }
            case SET_PAGE:
                return {
                    ...state,
                    page: action.page}

            default:
                return state
        }
    }
//ActionCreators

export const setPhotos = (photos: Array<PhotoType>, page: number, pages: number) => (
    {type: SET_PHOTOS, photos, page, pages} as const);
export const setIsGettingPhotosProgress = (isGettingPhotosProgress: boolean) =>
    ({type: SET_PHOTOS_IS_GETTING_PROGRESS, isGettingPhotosProgress} as const);
export const setSearchName = (searchName: string) => ({type: SET_SEARCH_NAME, searchName} as const);
export const addTag = (id: string, tag: string) => ({type: ADD_TAG, id, tag} as const);
export const deleteTag = (id: string, tag: string) => ({type: DELETE_TAG, id, tag} as const);
export const setPage = (page: number) => ({type: SET_PAGE, page} as const);

//ThunksCreators
export const getPhotos = (text: string, page: number): ThunkType =>
    async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
        dispatch(setIsGettingPhotosProgress(true));
        dispatch(setPage(page));
         const data = await photoAPI.getPhotos(text, page);
        if (data.stat === "ok") {
            dispatch(setPhotos(data.photos.photo, data.photos.page, data.photos.pages))
        }
        dispatch(setIsGettingPhotosProgress(false));
    }

//ActionTypes
type setPhotosActionType = ReturnType<typeof setPhotos>
type setIsGettingPhotosProgressActionType = ReturnType<typeof setIsGettingPhotosProgress>
type setSearchNameActionType = ReturnType<typeof setSearchName>
type addTagActionType = ReturnType<typeof addTag>
type deleteTagActionType = ReturnType<typeof deleteTag>
type setPageActionType = ReturnType<typeof setPage>


// common ActionsType of this reducer
export type PhotosReducerActionsType =
    setPhotosActionType | setIsGettingPhotosProgressActionType | setSearchNameActionType | addTagActionType
    | deleteTagActionType | setPageActionType
