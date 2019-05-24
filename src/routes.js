import React from 'react'
import { Router } from "@reach/router"

import { WithBasicLayout, WithOpenLayout } from './layouts'
import LoginPage from './containers/login-page/login'
import UserPage from './containers/user-page/user'
import ItemPage from './containers/item-page/item'
import CategoryPage from './containers/category-page/category'
import AssetPage from './containers/asset-page/asset'

const Routes = (props) =>
  <Router>
    <HomePage path="/" />
    <LoginPage {...props} path="/login"/>
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
  <WithBasicLayout>
    <div className="home-page">
    </div>
  </WithBasicLayout>


const NotFound = ({ location }) =>
  <WithOpenLayout>
    <div className="whoops-404 text-center m-4">
      <h1 className="h1 mb-3 font-weight-normal">404</h1>
      <div>We couldn't find this page. </div>
      <p>{location.pathname}</p>
    </div>
  </WithOpenLayout>

export default Routes