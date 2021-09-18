import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Homepage from './components/homepage/homepage';
import firebase from './firebase/firebase'

function App() {
  const[isUserSignedIn, setIsUserSignedIn] = useState(false);
  firebase.auth().onAuthStateChanged(user => {
    if(user){
     return setIsUserSignedIn(true);
    }else{
      return setIsUserSignedIn(false);
    }
  });
  if(isUserSignedIn) {
  return (
    <Router>
         <Route path="/" exact component={Dashboard} />
    </Router>
   

  );
}else{
  return (
    <Router>
         <Route path="/" exact component={Homepage} />
    </Router>
   

  );
}
}

export default App;
