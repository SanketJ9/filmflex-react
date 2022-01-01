import React, { useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Components/Login';
import Home from "./Components/Home";
import ProfileScreen from './Components/ProfileScreen';
import './App.css';
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
 
function App() {
  const user =  useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid, 
          email: userAuth.email,
        })
        );
      }else{
        //signout
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
         ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />}></Route>
            <Route exact path="/" element={<Home />} />
          </Routes>
         )}    
      </Router>
      
    </div>
  );
}

export default App;
