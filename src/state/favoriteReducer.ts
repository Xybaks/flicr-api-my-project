import {photoAPI, PhotoType} from "../api/api";
import {ActionsType, AppRootStateType, ThunkType} from "./reduxStore";
import {ThunkDispatch} from "redux-thunk";

// for actions names

const SET_PHOTO_TO_FAVORITE = "FLICR-API-MY-Project/FAVORITE-REDUCER/ADD-PHOTO_TO-FAVORITE";


export type favoritePhotoType = {
    favoritePhotoId: string
    tags: Array<string>

}

export type InitialStateFavoriteReducerType = {
    favoriteIDs: Array<string>
  }

const initialState: InitialStateFavoriteReducerType = {
   favoriteIDs: []
}


export const favoriteReducer =
    (state = initialState, action: FavoriteReducerActionsType): InitialStateFavoriteReducerType => {
        switch (action.type) {

            case SET_PHOTO_TO_FAVORITE:
                return {
                    ...state,
                   }

            default:
                return state
        }
    }
//ActionCreators

export const setPhotoToFavorite = (id: string, tag: string) => ({type: SET_PHOTO_TO_FAVORITE, id, tag} as const);

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


// common ActionType of this reducer
export type FavoriteReducerActionsType =
    SetPhotoToFavoriteActionType
