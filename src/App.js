import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";

import Navbar from './components/shared/navbar'
import Sidebar from './components/shared/side-bar'

import User from './containers/user-page/user'
import StatusBar from './containers/status-bar/statusbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <StatusBar />
      <div className="wrapper">
        <Sidebar />
        <div className="container-fluid px-0">
          <Navbar />
          <Routes />
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const Routes = () =>
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/users" component={User} />
    <Route component={Whoops404} />
  </Switch>


const HomePage = () =>
  <div className="home-page">
    <h1>Home page</h1>
  </div>


const Whoops404 = ({ location }) =>
  <div className="whoops-404">
    <h1>Whoops, route not found</h1>
    <p>Cannot find content for {location.pathname}</p>
  </div>

export default App;
