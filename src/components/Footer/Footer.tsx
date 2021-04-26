import {AppBar, Container} from "@material-ui/core";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (<div style={{width: "100%"}}>
            <AppBar position="static" color="transparent">
                <Container maxWidth="xl">
                    <div className={styles.me}>  © 2021 Nikolai Berestevich</div>
                </Container>
            </AppBar>
        </div>
    )
}