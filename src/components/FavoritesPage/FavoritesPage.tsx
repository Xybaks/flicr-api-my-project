import { useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import { InitialStateFavoriteReducerType} from "../../state/favoriteReducer";
import {Photo} from "../../common/components/Photo/Photo";


export const FavoritesPage = () => {

    const favoritePhotosPage = useSelector<AppRootStateType, InitialStateFavoriteReducerType>(state => state.favorite)
    function isPhotoFavorite  (id: string, favoritePhotosPage: InitialStateFavoriteReducerType) {
                return favoritePhotosPage?.favorite.some(fP => fP.favoritePhotoId === id)
    }
    return (
        <div>
            {favoritePhotosPage.favorite.map(photo => <Photo key={photo.favoritePhotoId}
                                                    photo={photo.favoritePhoto}
                                                    isFavorite={isPhotoFavorite(photo.favoritePhotoId, favoritePhotosPage)}
                />
            )}
        </div>
    )

}