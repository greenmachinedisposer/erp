import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import firebase from 'firebase/app';
var firebaseUI = require('firebaseui');




function App() {
    var ui = firebaseUI.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: false
            }
        ]
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                ROSE ENTERPRISES INC.
                <LoginForm username="test" password="test"/>
            </header>
        </div>
    );
}

export default App;