import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';
import SingleResult from './components/SingleResult';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  

  render() {
  return (
    <Fragment>
      <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
          <Route exact path='/company/:login' component={SingleResult} />
          {/* <Route exact path='/company/:login' render={props =>{
            <SingleResult {...props} s />
          } } /> */}
        </Switch>
      </div>
      </Router>
    </Fragment>
  );
  }
}

export default App;