import {photoAPI, PhotoType} from "../api/api";
import {ActionsType, AppRootStateType, ThunkType} from "./reduxStore";
import {ThunkDispatch} from "redux-thunk";
import {PhotoInStoreType} from "./photosReducer";


// for actions names
const SET_PHOTO_TO_FAVORITE = "FLICR-API/FAVORITE-REDUCER/SET_F_PHOTO";
const DELETE_PHOTO_FROM_FAVORITE = "FLICR-API/FAVORITE-REDUCER/DELETE-F-PHOTO";


export type FavoritePhotoType = {
    favoritePhotoId: string,
    favoritePhoto: PhotoInStoreType
}

export type InitialStateFavoriteReducerType = {
    favorite: Array<FavoritePhotoType>
}

const initialState:InitialStateFavoriteReducerType = {
   favorite:[]
}


export const favoriteReducer =
    (state = initialState, action: FavoriteReducerActionsType): InitialStateFavoriteReducerType => {
        switch (action.type) {

            case SET_PHOTO_TO_FAVORITE:
                return {
                    ...state,
                    favorite: [...state.favorite,{favoritePhotoId:action.id,favoritePhoto:action.photoInfo}
                        ]
                   }
                return {
                    ...state,
                    favorite:  state.favorite.filter(favPhoto=>favPhoto.favoritePhotoId!==action.id)
                }

            default:
                return state
        }
    }
//ActionCreators

export const setPhotoToFavorite = ( id: string, photoInfo: PhotoInStoreType) => (
    {type: SET_PHOTO_TO_FAVORITE, id, photoInfo} as const);
export const deletePhotoFromFavorite = ( id: string) => (
    {type: DELETE_PHOTO_FROM_FAVORITE, id} as const);

//ThunksCreators
// export const getPhotos = (text: string): ThunkType =>
//     async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
//         dispatch(setIsGettingPhotosProgress(true));
//         const data = await photoAPI.getPhotos(text);
//         if (data.stat === "ok") {
//             dispatch(setPhotos(data.photos.photo))
//         }
//         dispatch(setIsGettingPhotosProgress(false));
//     }
//ActionTypes

type SetPhotoToFavoriteActionType = ReturnType<typeof setPhotoToFavorite>


// common ActionsType of this reducer
export type FavoriteReducerActionsType =
    SetPhotoToFavoriteActionType
