import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import NewsDetails from './components/NewsDetails'
import TechN from './components/TechN'
import PopularN from './components/PopularN'
import TeslaN from './components/TeslaN'
import SearchedNews from './components/SearchedNews'


function App() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
          <Route path="/newsdet">
            <NewsDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/technews">
            <TechN />
          </Route>
          <Route exact path="/popularnews">
            <PopularN />
          </Route>
          <Route exact path="/teslanews">
            <TeslaN />
          </Route>    
        </Switch>
      </Router> 
    </React.Fragment>
  );
}

export default App;
