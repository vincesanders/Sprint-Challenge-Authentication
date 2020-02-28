import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import DadJokes from './components/DadJokes';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <PrivateRoute path='/protected' component={DadJokes} />
        <Route path="/register"><Signup /></Route>
        <Route path="/logout"><Login /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
