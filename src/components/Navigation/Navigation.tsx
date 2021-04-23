import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import {FAVORITES_PATH, FIND_IMAGE_PATH} from "../../App";

export const Navigation = () => {

    return (
        <div>
            <div>
            <NavLink className={styles.navBlock} to={FIND_IMAGE_PATH}>find image</NavLink>
            </div>
            <div>
            <NavLink className={styles.navBlock} to={FAVORITES_PATH}>favorites</NavLink>
            </div>
        </div>
    );
}