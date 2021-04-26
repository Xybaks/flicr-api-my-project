import React from "react";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deleteTag} from "../../../state/photosReducer";
import {deleteTagFromFavoriteTC} from "../../../state/favoriteReducer";
import styles from "./Tags.module.scss"

type TagPropsType = {
    photoId: string
    tags: Array<string>,
    isFavorite?: boolean
}


export const Tags: React.FC<TagPropsType> = (props) => {
    const {tags, photoId} = props
    const dispatch = useDispatch()

    const deleteTagHandler = (tag: string) => () => {
        dispatch(deleteTag(photoId, tag))
        if (props.isFavorite) {
            dispatch(deleteTagFromFavoriteTC(photoId, tag))
        }
    }
    return (
        <div className={styles.tags}>
            {tags.map((t, index) => (
                <div className={styles.singleTag}
                     key={t + index}>
                    <span> {t}</span>
                    <IconButton size="small" onClick={deleteTagHandler(t)}><Delete color="primary"/></IconButton>
                </div>
            ))}</div>
    )

}