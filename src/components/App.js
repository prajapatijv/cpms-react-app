import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Route , Switch } from "react-router-dom";

import UserPage from './user/user-page'

import Navbar from './shared/Navbar'
import Sidebar from './shared/Sidebar'


library.add(faUserCircle, faAddressBook)

class App extends Component {
  render() {
    return (
      <div className="cmps-app">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
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
    <Route path="/users" component={UserPage} />
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
