import {InitialStateFavoriteReducerType} from "../../state/favoriteReducer";



 export const isPhotoFavorite =  (id: string, favoritePhotosPage: InitialStateFavoriteReducerType)=> {
    return favoritePhotosPage?.favorite.some(fP => fP.favoritePhotoId === id)
}