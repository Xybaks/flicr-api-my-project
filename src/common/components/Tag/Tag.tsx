import React from "react";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deleteTag} from "../../../state/photosReducer";
import {deleteTagFromFavoriteTC} from "../../../state/favoriteReducer";

type TagPropsType = {
    photoId: string
    tags: Array<string>,
    isFavorite?: boolean
}


export const Tag: React.FC<TagPropsType> = (props) => {
    const {tags, photoId} = props
    const dispatch = useDispatch()

    const deleteTagHandler = (tag: string) => () => {
        dispatch(deleteTag(photoId, tag))
        if (props.isFavorite) {
            dispatch(deleteTagFromFavoriteTC(photoId, tag))
        }
    }
    return (
        <div>{tags.map((t, index) => (
            <div key={t + index}>
                <span> {t}</span>
                <IconButton size="small" onClick={deleteTagHandler(t)}><Delete color="primary"/></IconButton>
            </div>
        ))}</div>
    )

}