import React from "react";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deleteTag} from "../../../state/photosReducer";

type TagPropsType={
    photoId:string
    tags:Array<string>,
}


export const Tag: React.FC<TagPropsType> =(props)=>{
    const{tags,photoId} =props
    const dispatch = useDispatch()

    const deleteTagHandler=(tag:string)=>()=>{
            dispatch(deleteTag(photoId, tag))
    }
    return(
        <div>{tags.map((t,index)=>(
            <div key={t+index}>
                <span> {t}</span>
                <IconButton size="small" onClick={deleteTagHandler(t)}><Delete color="primary"/></IconButton>
            </div>
        ))}</div>
    )

}