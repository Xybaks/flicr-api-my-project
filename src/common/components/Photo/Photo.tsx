import React, {ChangeEvent, FC, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {addTag, PhotoInStoreType} from "../../../state/photosReducer";
import {useDispatch} from "react-redux";
import {Tag} from "../Tag/Tag";
import {addPhotoToFavorite, addTagToFavoriteTC, removeFavoritePhoto} from "../../../state/favoriteReducer";


type PhotoPropsType = {
    photo: PhotoInStoreType
    isFavorite?: boolean
}
export const Photo: FC<PhotoPropsType> = (props) => {
    const {farm, tags, id, secret, server, title} = props.photo
    const dispatch = useDispatch()
    const [tagInput, setTagInput] = useState("")
    const [error, setError] = useState<string | null>("")

    const inputTagHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTagInput(e.currentTarget.value)
        setError(null)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) setError(null)
        if (e.key === "Enter") addTagHandler()
    }

    const addTagHandler = () => {
        if (tagInput.trim() !== "") {
            dispatch(addTag(id, tagInput))
            if(props.isFavorite){
                dispatch(addTagToFavoriteTC(id,tagInput))
            }
            setTagInput("")
        } else {
            setError("Please, add tag")
        }
    }

    const OnClickHandler = () => {
        if (props.isFavorite===true) {
            dispatch(removeFavoritePhoto(id))
        } else if (props.isFavorite===false){
            dispatch(addPhotoToFavorite(id, props.photo))
        }
    }

    return (
        <div>
            <div style={{
                width: "330px",
                height: "200px",
                backgroundImage: `url(https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg)`
            }}>
            </div>
            <div>{title}</div>
            <Tag
                tags={tags}
                photoId={id}
                isFavorite={props.isFavorite}
            />
            <IconButton onClick={OnClickHandler}
            >{props.isFavorite ? "Remove  It" : "Bookmark  it!"}</IconButton>
            <TextField
                type="text"
                value={tagInput}
                label="new tag"
                onChange={inputTagHandler}
                onKeyPress={onKeyPressHandler}
                variant="standard"
                error={!!error}
                helperText={error}
            />
        </div>
    )
}