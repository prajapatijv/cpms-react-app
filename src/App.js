import React from 'react'
import { Router } from "@reach/router";

import Navbar from './components/shared/nav-bar'
import Sidebar from './components/shared/side-bar'
import StatusBar from './containers/status-bar/statusbar'

import UserPage from './containers/user-page/user'
import ItemPage from './containers/item-page/item'


const App = ({children}) =>
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

const Routes = () =>
  <Router>
    <HomePage path="/" />
    <UserPage path="users" />
    <UserPage path="users/:userId" />
    <ItemPage path="items" />
    <ItemPage path="items/:itemId" />
    <NotFound default />
  </Router>

const HomePage = () =>
  <div className="home-page">
    <h1>Home page</h1>
  </div>


const NotFound = ({ location }) =>
  <div className="whoops-404">
    <h1>Whoops, route not found</h1>
    <p>Cannot find content for {location.pathname}</p>
  </div>


export default App;