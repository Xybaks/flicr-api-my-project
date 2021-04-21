import {FC} from "react";
import {PhotoType} from "../../../api/api";

type PhotoPropsType={
    photo:PhotoType
}
export const Photo:FC<PhotoPropsType> =(props)=>{
    return(
        <div>
           {props.photo.title}
        </div>
    )
}