import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route ,
        } from 'react-router-dom';
import * as ROUTES from './constants/router';
import './App.css';
import Navigation from './components/Navigation';
import FlashCard from './components/FlashCard';
import Register from './components/Register';
import Home from './components/Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        loading: true,
        user: null,
    }
  }
  render() {
    return (
      <div>
          <Router>
            <div>
              <Navigation />
              <Route exact path={ROUTES.LANDING} component={Home} />
              <Route path={ROUTES.FLASHCARDS} component={FlashCard} />
              <Route path={ROUTES.REGISTER} component={Register} />
            </div>
          </Router>
      </div>
    );
  }
}