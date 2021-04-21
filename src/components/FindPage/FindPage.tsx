import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/reduxStore";
import {Photo} from "./Photo/Photo";
import React, {ChangeEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {getPhotos, InitialStatePhotosReducerType} from "../../state/photosReducer";
import ProgressIndicator from "../../common/components/ProgressIndicator";


export const FindPage = () => {
    const photoPage = useSelector<AppRootStateType, InitialStatePhotosReducerType>(state => state.photos)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>("Please, add name to find image")


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
            dispatch(getPhotos(title))
        } else {
            setError("Please, add name to find image")
        }
    }

    if(photoPage.isGettingPhotosProgress){
        return <ProgressIndicator/>
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
            {!photoPage.isGettingPhotosSuccess && <div>not found</div>}

            {photoPage.photo.map(ph =>
                <Photo
                    key={ph.id}
                    photo={ph}/>
            )}
        </div>
    )

}