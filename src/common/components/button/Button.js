import React from "react";
import style from "./Button.module.scss";

const Button = (props) => {
    return (
        <h3 className={style.btn} >{props.title}</h3>
    )
}
export default Button