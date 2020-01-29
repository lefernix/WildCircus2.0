import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HistoryPage from './components/HistoryPage/HistoryPage';
import TarifPage from './components/TarifPage/TarifPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <Link to="/">WildCircus</Link>
        <Header/>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/notrehistoire">
          <HistoryPage/>
        </Route>
        <Route path="/nostarifsprestations">
          <TarifPage/>
        </Route>
        <Route path="/lequipe">
    
        </Route>
        <Route path="/contactus">
    
        </Route>
      </Switch>
    </div>
  );
}

export default App;
