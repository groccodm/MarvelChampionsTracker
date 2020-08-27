import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavigation from './common/MainNavigation';
import Footer from './common/Footer';
import Home from './pages/Home';
import Help from './pages/Help';
import About from './pages/About';
import {  Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="App">
      <MainNavigation/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/help">
          <Help>
          </Help>
        </Route>
        <Route path="/about">
          <About>
          </About>
        </Route>
      </Switch>
      </BrowserRouter>
      <Footer/>
      </div> 
  );
}

export default App;
