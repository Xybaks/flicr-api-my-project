import style from './App.module.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from "./components/Navigation/Navigation";
import FindPage from './components/FindPage/FindPage';
import Error404 from './components/Error404/Error404';
import {FavoritesPage} from "./components/FavoritesPage/FavoritesPage";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Provider} from "react-redux";
import {store} from "./state/reduxStore";
import React from "react";

// PATH
export const FIND_IMAGE_PATH = '/';
export const FAVORITES_PATH = '/favorite';

const App = () => {

    return (
        <Provider store={store}>
            <HashRouter>
                <div className={style.app}>
                    <Header/>
                    <div className={style.appHeader}>
                        <div className={style.table}>
                            <Navigation/>
                            <Switch>
                                <Route exact path={"/"} render={() => <FindPage/>}/>
                                <Route exact path={FAVORITES_PATH} render={() => <FavoritesPage/>}/>
                                <Route render={() => <Error404/>}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </HashRouter>
        </Provider>
    );
}

export default App;
