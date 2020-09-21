import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout';
import BaseRouter from './routes'


function App() {
  return (
    <Router>
      <Layout>
        <BaseRouter />
      </Layout>
    </Router>
  );
}

export default App;
