import React from "react";
import styles from './Error404.module.scss'

function Error404() {
    return (
        <div className={styles.errorBlock}>
            <div className={styles.number}>404</div>
            <div className={styles.message}>Page not found!</div>
            <div className={styles.cat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;

