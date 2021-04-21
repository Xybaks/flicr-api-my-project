import React, {FC} from "react";
import {IconButton} from "@material-ui/core";
import {PhotoInStoreType} from "../../../state/photosReducer";


type PhotoPropsType = {
    photo: PhotoInStoreType
}
export const Photo: FC<PhotoPropsType> = (props) => {
    const {farm,tags, id, isfamily, isfriend, ispublic, owner, secret, server, title} = props.photo
    return (
        <div>
        <div style={{
            width: "500px",
            height: "250px",
            backgroundImage: `url(https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg)`
        }}>
        </div>
            <IconButton onClick={ ()=>{
                console.log("Add to memory")
            }
                // findPhotoHandler
            }>Bookmark it!</IconButton>
           <div>
               {title}
           </div>
        </div>
    )
}