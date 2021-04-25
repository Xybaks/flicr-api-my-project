import style from './App.module.scss';
import {Route, Switch} from 'react-router-dom';
import {Navigation} from "./components/Navigation/Navigation";
import {FindPage} from './components/FindPage/FindPage';
import Error404 from './components/Error404/Error404';
import {FavoritesPage} from "./components/FavoritesPage/FavoritesPage";
import {Header} from "./components/Header/Header";


// PATH
export const FIND_IMAGE_PATH = "/find";
export const FAVORITES_PATH = "/favorites";


const App = () => {

    return (
        <div className={style.app}>
            <Header/>
            <div className={style.appHeader}>
                <div className={style.table}>
                    <Navigation/>
                    <Switch>
                        <Route exact path={"/"} render={() => <FindPage/>}/>
                        <Route exact path={FAVORITES_PATH} render={() => <FavoritesPage/>}/>
                        <Route exact path={FIND_IMAGE_PATH} render={() => <FindPage/>}/>
                        <Route render={() => <Error404/>}/>
                    </Switch>
                </div>
            </div>
         </div>
    );
}


export default App;