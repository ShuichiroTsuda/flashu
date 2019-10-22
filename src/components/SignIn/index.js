import React, { Component } from 'react';
import firebase from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from './uiConfig';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            user: null,
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({
            loading: false,
            user: user
          });
        });
      }
    
    logout() {
        firebase.auth().signOut();
    }
    

}