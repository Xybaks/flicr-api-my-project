import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {InitialStateFavoriteReducerType} from "../../state/favoriteReducer";
import {Photo} from "../../common/components/Photo/Photo";
import {isPhotoFavorite} from "../../common/functions/isPhotoFavorite";
import styles from "./FavofitesPage.module.scss"
import React from "react";

export const FavoritesPage = () => {

    const favoritePhotosPage = useSelector<AppRootStateType, InitialStateFavoriteReducerType>(state => state.favorite)

    return (
        <div className={styles.favoritePageContainer}>
            <div className={styles.photos}>
                {favoritePhotosPage.favorite.map(photo =>
                    <Photo key={photo.favoritePhotoId}
                           photo={photo.favoritePhoto}
                           isFavorite={isPhotoFavorite(photo.favoritePhotoId, favoritePhotosPage)}
                    />
                )}
            </div>
        </div>
    )

}