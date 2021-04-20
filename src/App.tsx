import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom';


// PATH
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";
export const PROFILE_PATH = "/profile";
export const RESTORE_PASS_PATH = "/restore-pass";
export const ENTER_PASS_PATH = "/enter-pass";
export const TEST_PAGE_PATH = "/test";


const App=()=> {
  return (
      <div className="App">
        {/*//hr provider*/}
        <Main/>
        <div>
          {/*<Header/>*/}
          <Switch>
            <Route exact path={"/"} render={() => <Profile/>}/>
            <Route path={LOGIN_PATH} render={() => <Login/>}/>
            <Route path={REGISTER_PATH} render={() => <Register/>}/>
            <Route path={PROFILE_PATH} render={() => <Profile/>}/>
            <Route path={RESTORE_PASS_PATH} render={() => <RestorePassword/>}/>
            <Route path={ENTER_PASS_PATH} render={() => <EnterPassword/>}/>
            <Route path={TEST_PAGE_PATH} render={() => <TestPage/>}/>
            <Route render={() => <Error404/>}/>
          </Switch>
        </div>
      </div>
  );
}


export default App;
