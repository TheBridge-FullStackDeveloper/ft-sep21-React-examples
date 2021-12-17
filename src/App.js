import React, { useState } from 'react';

import './App.css';

import './styles/styles.scss';

import Footer from './components/Footer/'
import Header from './components/Header/';
import Main from './components/Main/';

import {BrowserRouter} from 'react-router-dom';
import {userContext} from './context/userContext';


function App() {
  const [user, setUser] = useState({name:""}); // Estado de user ->{name:"alex"}

  const login = name => setUser({name}) // Rellena estado user
  const logout = () => setUser({name:""}) // Limpia estado user

  const value = {
    user,
    login,
    logout
  } // Claves: user,login,logout

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Header/>
          <Main/>
        </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


