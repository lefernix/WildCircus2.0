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
import EquipePage from './components/EquipePage/EquipePage';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

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
          <EquipePage/>
        </Route>
        <Route path="/contactus">
          <ContactPage/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
