import { useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {FavoritePhotoType} from "../../state/favoriteReducer";
import {Photo} from "../../common/components/Photo/Photo";


export const FavoritesPage = () => {

    const favoritePhotosPage = useSelector<AppRootStateType, Array<FavoritePhotoType>>(state => state.favorite.favorite)

    return (
        <div>
            {favoritePhotosPage.map(photo => <Photo key={photo.favoritePhotoId}
                                                    photo={photo.favoritePhoto}
                                                    isFavorite={true}
                />
            )}
        </div>
    )

}