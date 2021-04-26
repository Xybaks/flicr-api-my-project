import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.scss";
import {FAVORITES_PATH, FIND_IMAGE_PATH} from "../../App";
import CloudIcon from '@material-ui/icons/Cloud';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

export const Navigation = () => {
    return (
        <div className={styles.navBlock}>
            <NavLink to={'/'}>
                <CloudIcon fontSize={"large"}/>
            </NavLink>
            <NavLink to={'/favor'}>
                < CollectionsBookmarkIcon fontSize={"large"}/>
            </NavLink>
        </div>
    );
}