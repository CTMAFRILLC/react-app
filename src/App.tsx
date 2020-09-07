import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Route } from 'react-router-dom'
import { HomePage } from './pages/index'
import Signin from './pages/Siginin'
import About from './pages/about'
import Signup from './pages/signup'

function App() {
  return (
    <>
      <Route path='/' exact component={HomePage} />
      <Route path='/sign-in' component={Signin} />
      <Route path='/about' component={About} />
      <Route path='/sign-up' component={Signup} />
    </>


  );
}

export default App;
