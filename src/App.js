import React from 'react'
import { Router } from "@reach/router";

import Navbar from './components/shared/nav-bar'
import Sidebar from './components/shared/side-bar'
import StatusBar from './containers/status-bar/statusbar'

import UserPage from './containers/user-page/user'
import ItemPage from './containers/item-page/item'
import CategoryPage from './containers/category-page/category'
import AssetPage from './containers/asset-page/asset'

const App = (props) =>
<React.Fragment>
  <StatusBar />
  <div className="wrapper">
    <Sidebar />
    <div className="container-fluid px-0">
      <Navbar />
      <Routes {...props} />
    </div>
  </div>
</React.Fragment>

const Routes = (props) =>
  <Router>
    <HomePage path="/" />
    <UserPage {...props} path="users" />
    <UserPage {...props} path="users/:id" />
    <ItemPage {...props} path="items" />
    <ItemPage {...props} path="items/:id" />
    <CategoryPage {...props} path="categories" />
    <CategoryPage {...props} path="categories/:id" />
    <AssetPage {...props} path="assets" />
    <AssetPage {...props} path="assets/:id" />
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