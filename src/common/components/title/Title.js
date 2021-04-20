import React from "react";
import style from "./Title.module.scss";

const Title = (props) => {
    return (
        <h2 className={style.title} >{props.title}</h2>
    )
}
export default Title