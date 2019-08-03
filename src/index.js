import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';

const firebaseConfig = require('./settings/firebase-setting');
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));