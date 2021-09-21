import React from 'react';
import './index.css';
import firebase from 'firebase';
import Login from './Login';
import ReactDOM from 'react-dom';
import { Tooltip } from '@material-ui/core';
const Header = (props)=>{
  const onLogOut = () =>{
    firebase.auth().signOut();
    ReactDOM.render(
      <>
      <Login />
      </>,
      document.getElementById('root')
    )
    
  };
return (
    <>
    <div className="div">
  <h1 className="heading">KEEP NOTES
  <Tooltip title={props.user1}>
  <img src={props.userPhoto} className="profilePic"/>
  </Tooltip>
  <button className="logout" onClick={onLogOut}>LOG OUT</button>
  </h1>
  </div>
    </>
)
};

export default Header;