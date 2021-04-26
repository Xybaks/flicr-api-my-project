import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {Photo} from "../../common/components/Photo/Photo";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {getPhotos, setNewName} from "../../state/photosReducer";
import ProgressIndicator from "../../common/components/ProgressIndicator/ProgressIndicator";
import {MyPaginator} from "../MyPaginator/MyPaginator";
import {isPhotoFavorite} from "../../common/functions/isPhotoFavorite";
import styles from "./FindPage.module.scss"


export const FindPage = () => {
    const state = useSelector<AppRootStateType, AppRootStateType>(state => state)
    const {photos, favorite} = state
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>(photos.newName)
    const [error, setError] = useState<string>(state.photos.someError)

    useEffect(() => {
        setError(photos.someError)
    }, [photos.someError])

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
            dispatch(getPhotos(title, photos.page))
            dispatch(setNewName(title))
        } else {
            setError("Please, add name to find image")
        }
    }

    const onPageChanged = (page: number) => {
        dispatch(getPhotos(title, page))
    }

    if (photos.isGettingPhotosProgress) {
        return <ProgressIndicator/>
    }

    return (
        <div className={styles.findPageContainer}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="stretch"
            >
                <div className={styles.input}>
                    <TextField
                        type="text"
                        value={title}
                        onChange={inputNameHandler}
                        onKeyPress={onKeyPressHandler}
                        variant="outlined"
                        placeholder={"Print your search"}
                        error={error !== ""} // convert sting error to boolean
                        helperText={error}
                        fullWidth={true}
                        size={"medium"}
                    />
                </div>
                <div className={styles.button}>
                    <Button
                        onClick={findPhotoHandler}
                        variant="outlined"
                        color="primary"
                        size="large"
                    >FIND</Button>
                </div>
            </Grid>
            {!photos.isGettingPhotosSuccess && <div>No image here. Would you like to find anything else?</div>}
            <MyPaginator
                currentPage={photos.page}
                /*4000 photos is max for not registered users*/
                pagesCount={photos.pages > 200 ? 200 : photos.pages}
                onPageChanged={onPageChanged}/>
            <div className={styles.photos}>
                {photos.photo.map(ph => <Photo
                        key={ph.id}
                        photo={ph}
                        isFavorite={isPhotoFavorite(ph.id, favorite)}
                    />
                )}
            </div>
        </div>
    )

}