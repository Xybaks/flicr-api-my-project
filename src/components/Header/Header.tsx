import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './Header.module.scss'
import {AppBar, Toolbar} from "@material-ui/core";



export const Header = () => {
    return <AppBar position="static" style={{ background: '#30ADD2' }} >
        <Toolbar style={{display: "flex", justifyContent: "space-between", width:"100%", paddingLeft:"30px"}}>
            <div className={styles.title}><h1>IMAGE FINDER</h1></div>
            <AccountCircleIcon fontSize="large" />
        </Toolbar>
    </AppBar>

    //
    // <div className={styles.header}>
    //     <div><h1>IMAGE FINDER</h1></div>
    //     <AccountCircleIcon fontSize="large"/>
    //     </div>


}