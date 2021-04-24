import React, {ChangeEvent, FC, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {addTag, PhotoInStoreType} from "../../../state/photosReducer";
import {useDispatch} from "react-redux";
import {Tag} from "../../../common/components/Tag/Tag";
import {addPhotoToFavorite, removeFavoritePhoto, setPhotoToFavorite} from "../../../state/favoriteReducer";


type PhotoPropsType = {
    photo: PhotoInStoreType
}
export const Photo: FC<PhotoPropsType> = (props) => {
    const {farm,tags, id, isfamily, isfriend, ispublic, owner, secret, server, title} = props.photo

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
            dispatch(addTag(id,tagInput))
            setTagInput("")
        } else {
            setError("Please, add tag")
        }
    }

    const PhotoToFavoriteHandler =()=>{
        dispatch(removeFavoritePhoto(id))
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
            />
            <IconButton onClick={ ()=>{
                console.log("Add tag to memory")
            }
            }>Bookmark it!</IconButton>
                <TextField
                    type="text"
                    value={tagInput}
                    label="new tag"
                    onChange={inputTagHandler}
                    onKeyPress={onKeyPressHandler}
                    variant="standard"
                    // placeholder={"Add tag here"}
                    error={!!error} // convert sting error to boolean
                    helperText={error}
                />


        </div>
    )
}