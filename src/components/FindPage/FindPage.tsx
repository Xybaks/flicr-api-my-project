import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {Photo} from "./Photo/Photo";
import React, {ChangeEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {getPhotos, InitialStatePhotosReducerType, setSearchName} from "../../state/photosReducer";


export const FindPage = () => {
    const photoPage = useSelector<AppRootStateType, InitialStatePhotosReducerType>(state => state.photos)
    const dispatch = useDispatch()
    let [title, setTitle] = useState("")

    const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // if (error !== null) setError(null)
        if (e.key === "Enter") findPhotoHandler()
    }

    const findPhotoHandler = () => {
        if (title.trim() !== "") {
            dispatch(getPhotos(title))
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
            />
            <IconButton onClick={findPhotoHandler}>FIND</IconButton>
            {photoPage.photo.map(ph =>
                <Photo photo={ph}/>)}
        </div>
    )

}