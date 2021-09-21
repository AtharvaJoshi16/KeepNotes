import React, { useEffect } from "react";
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import firedb from "./config";
import google from './Logos/google.png';

const loadApp = () =>{
  var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      // ...
    }).catch((error) => {
      console.log(error)
    });
  }
  firebase.auth().onAuthStateChanged((user) => {
    
    if (user) {
      var uid = user.uid;
      //console.log(user.displayName);
      const refe=firedb.database().ref(`Users/${user.displayName}`)
      var user1=user.displayName;
      var userPhoto= user.photoURL;
      ReactDom.render(
        <App user1={user.displayName} userPhoto={user.photoURL}/>,
        document.getElementById('root')
        )
    }
  });
  
const Login = () =>{
    return (
        <>
        <div className="div">
        <h1 className="heading">KEEP NOTES</h1>
        </div>
        <center>
          <div className="loginForm">
            <h2 className="loginHeading">LOGIN</h2>
            <button className="login" onClick={loadApp}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" className="googleLogo"/>
            &nbsp;&nbsp;Login With Google
            </button>
        </div>
        </center>
        </>
    )
};

export default Login;