import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {Photo} from "../../common/components/Photo/Photo";
import React, {ChangeEvent, useEffect, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {getPhotos, setNewName} from "../../state/photosReducer";
import ProgressIndicator from "../../common/components/ProgressIndicator/ProgressIndicator";
import {MyPaginator} from "../MyPaginator/MyPaginator";


export const FindPage = () => {
    const state = useSelector<AppRootStateType, AppRootStateType>(state => state)
    const photoPage = state.photos
    const favoritePhotosPage = state.favorite
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>(photoPage.newName)
    const [error, setError] = useState<string>(state.photos.someError)

    useEffect(()=>{
        setError(state.photos.someError)
    },[state.photos.someError])

    const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError("")
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== "") setError("")
        if (e.key === "Enter") findPhotoHandler()
    }

    const findPhotoHandler = () => {
        if (title.trim() !== "") {
            dispatch(getPhotos(title, photoPage.page))
            dispatch(setNewName(title))
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
                return favoritePhotosPage?.favorite.some(fP => fP.favoritePhotoId === id)
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
                error={error !== ""} // convert sting error to boolean
                helperText={error}
            />

            <IconButton onClick={findPhotoHandler}>FIND</IconButton>
            {/*error of empty result of search*/}
            {!photoPage.isGettingPhotosSuccess && <div>No image here. Would you like to find anything else?</div>}

            <MyPaginator
                currentPage={photoPage.page}
                /*4000 photos is max for not registered users*/
                pagesCount={photoPage.pages > 200 ? 200 : photoPage.pages}
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