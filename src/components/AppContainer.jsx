import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import News from './News';
import Navbar from './CustomeNavbar';
import Login from './Login';

class AppContainer extends Component {
    
  render() {
    const { location } = this.props;
    return (
          <div>
            {location.pathname !== '/' &&  <Navbar  location={location}/> }
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            </Switch>
          </div>
    );
  }
}

export default AppContainer;
