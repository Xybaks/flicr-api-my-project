import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {InitialStatePhotosReducerType} from "../../state/photosReducer";
import {FavoritePhotoType} from "../../state/favoriteReducer";
import {Photo} from "../FindPage/Photo/Photo";


export const FavoritesPage =()=>{
    const favoritePhotosPage = useSelector<AppRootStateType, Array<FavoritePhotoType>>(state => state.favorite.favorite)
    const dispatch = useDispatch()
    return(
        <div>
            {favoritePhotosPage.map(photo=> <Photo key={photo.favoritePhotoId}
                    photo={photo.favoritePhoto}
                    onlyFavoritePhoto={true}
                    />
            )}
        </div>
    )

}