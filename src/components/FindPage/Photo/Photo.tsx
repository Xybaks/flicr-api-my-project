import {FC} from "react";
import {PhotoType} from "../../../api/api";


type PhotoPropsType = {
    photo: PhotoType
}
export const Photo: FC<PhotoPropsType> = (props) => {
    const {farm, id, isfamily, isfriend, ispublic, owner, secret, server, title} = props.photo
    return (
        <div style={{
            width: "500px",
            height: "250px",
            backgroundImage: `url(https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg)`
        }}>
        </div>
    )
}