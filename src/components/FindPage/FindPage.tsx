import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {Photo} from "../../common/components/Photo/Photo";
import React, {ChangeEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {getPhotos, InitialStatePhotosReducerType} from "../../state/photosReducer";
import ProgressIndicator from "../../common/components/ProgressIndicator/ProgressIndicator";
import {MyPaginator} from "../MyPaginator/MyPaginator";
import { InitialStateFavoriteReducerType} from "../../state/favoriteReducer";



export const FindPage = () => {

    const photoPage = useSelector<AppRootStateType, InitialStatePhotosReducerType>(state => state.photos)
    const favoritePhotosPage=useSelector<AppRootStateType, InitialStateFavoriteReducerType>(state => state.favorite)
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string | null>("")

    const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) setError(null)
        if (e.key === "Enter") findPhotoHandler()
    }

    const findPhotoHandler = () => {
        if (title.trim() !== "") {
            dispatch(getPhotos(title, photoPage.page))
        } else {
            setError("Please, add name to find image")
        }
    }

    const onPageChanged = (page: number) => {
        dispatch(getPhotos(title, page))
    }

    if (photoPage.isGettingPhotosProgress) {
        return <ProgressIndicator/>
    }
     const isPhotoFavorite = (id: string) => {
        try {
            if (favoritePhotosPage)
                return favoritePhotosPage.favorite.some(fP => fP.favoritePhotoId === id)
        } catch {
            return false
        }
    }
    return (
        <div>
            <TextField
                type="text"
                value={title}
                onChange={inputNameHandler}
                onKeyPress={onKeyPressHandler}
                variant="outlined"
                placeholder={"Print your search"}
                error={!!error} // convert sting error to boolean
                helperText={error}
            />

            <IconButton onClick={findPhotoHandler}>FIND</IconButton>
            {/*error of empty result of search*/}
            {!photoPage.isGettingPhotosSuccess && <div>No image here. Would you like to find anything else?</div>}

            <MyPaginator
                currentPage={photoPage.page}
                pagesCount={photoPage.pages}
                onPageChanged={onPageChanged}/>

            {photoPage.photo.map(ph => <Photo
                    key={ph.id}
                    photo={ph}
                    isFavorite={isPhotoFavorite(ph.id)}
                />
            )}
        </div>
    )

}