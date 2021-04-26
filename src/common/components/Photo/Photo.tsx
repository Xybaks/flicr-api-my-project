import React, {ChangeEvent, FC, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {addTag, PhotoInStoreType} from "../../../state/photosReducer";
import {useDispatch} from "react-redux";
import {Tags} from "../Tag/Tags";
import {addPhotoToFavorite, addTagToFavoriteTC, removeFavoritePhoto} from "../../../state/favoriteReducer";
import styles from "./Photo.module.scss"

type PhotoPropsType = {
    photo: PhotoInStoreType
    isFavorite?: boolean
}
export const Photo: FC<PhotoPropsType> = React.memo((props) => {
    const {farm, tags, id, secret, server} = props.photo
    const dispatch = useDispatch()
    const [tagInput, setTagInput] = useState("")
    const [error, setError] = useState<string>("")

    const inputTagHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length < 16) {
            setTagInput(e.currentTarget.value)
            setError("")
        } else {
            setError("long tag")
        }
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== "") setError("")
        if (e.key === "Enter") addTagHandler()
    }

    const addTagHandler = () => {
        if (tagInput.trim() !== "") {
            dispatch(addTag(id, tagInput))
            if (props.isFavorite) {
                dispatch(addTagToFavoriteTC(id, tagInput))
            }
            setTagInput("")
        } else {
            setError("Please, add tag")
        }
    }

    const OnClickHandler = () => {
        if (props.isFavorite) {
            dispatch(removeFavoritePhoto(id))
        } else {
            dispatch(addPhotoToFavorite(id, props.photo))
        }
    }

    const imgSrc = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg)`
    console.log("new Photo was rendered")
    return (
        <div className={styles.photoContainer}>
            <img className={styles.photoImage} src={imgSrc} alt="img is loading :)"/>
            <div className={styles.button}>
                <Button
                    onClick={OnClickHandler}
                    variant="outlined"
                    color="primary"
                >
                    {props.isFavorite ? "Remove  It!" : "Bookmark  it!"}</Button>
            </div>
            <Tags
                tags={tags}
                photoId={id}
                isFavorite={props.isFavorite}
            />
            <TextField className={styles.button}
                       type="text"
                       value={tagInput}
                       label="some tags?"
                       onChange={inputTagHandler}
                       onKeyPress={onKeyPressHandler}
                       variant="outlined"
                       error={!!error}
                       helperText={error}
            />
        </div>
    )
})