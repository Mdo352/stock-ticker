import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>

      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
        </Switch>
      </Router>
      </div>
    </Fragment>
  );
}

export default App;