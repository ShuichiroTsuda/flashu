import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route ,
        } from 'react-router-dom';
import * as ROUTES from './constants/router';
import './App.css';
import Navigation from './components/Navigation';
import CardPage from './containers/CardPage';
import AddCardPage from './containers/AddCardPage';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Navigation />
              <Route exact path={ROUTES.LANDING} component={Home} />
              <Route path={ROUTES.FLASHCARDS} component={CardPage} />
              <Route path={ROUTES.ADD_CARD} component={AddCardPage} />
            </div>
          </Router>
      </div>
    );
  }
}