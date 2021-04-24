import { store} from "../../state/reduxStore";
import {FavoritePhotoType} from "../../state/favoriteReducer";




// function to check "is photo Favorite?"
export const isPhotoFavorite = (id: string) => {
    const favoritePhotosPage:Array<FavoritePhotoType> =store.getState().favorite.favorite
    try {
        if (favoritePhotosPage)
            return favoritePhotosPage.some(fP => fP.favoritePhotoId === id)
    } catch {
        return false
    }
}