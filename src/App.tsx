import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import {Navigation} from "./components/Navigation/Navigation";
import { FindPage } from './components/FindPage/FindPage';
import Error404 from './components/Error404/Error404';
import {FavoritesPage} from "./components/FavoritesPage/FavoritesPage";
import {Header} from "./components/Header/Header";
import {photoAPI} from "./api/api";


// PATH
export const FIND_IMAGE_PATH = "/find";
export const FAVORITES_PATH = "/favorites";




const App=()=> {

    useEffect(()=>{
    photoAPI.getPhotos("car")
    },[])


  return (
      <div className="App">
        {/*//hr provider*/}
        <Navigation/>
        <div>
          <Header/>
          <Switch>
            <Route exact path={"/"} render={() =>
                <FindPage/>}
            />
            <Route path={FAVORITES_PATH} render={() => <FavoritesPage/>}/>
            <Route path={FIND_IMAGE_PATH} render={() => <FindPage/>}/>
            <Route render={() => <Error404/>}/>
          </Switch>
        </div>
      </div>
  );
}


export default App;
