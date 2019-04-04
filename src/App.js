import React, { Component } from 'react'
import { Route , Switch } from "react-router-dom";

import Navbar from './components/shared/navbar'
import Sidebar from './components/shared/sidebar'

import User from './containers/user-page/user'
import StatusBar from './containers/status-bar/statusbar'


class App extends Component {
  render() {
    return (
      <div className="cmps-app">
        <StatusBar />
        <Navbar />        
        <Sidebar />
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-0 py-4">
              <Routes/>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const Routes = () => 
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/users" component={User} />
    <Route component={Whoops404}/>
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
