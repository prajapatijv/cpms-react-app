import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import AppRoutes from '../routes'
import Navbar from './ui/Navbar'
import Sidebar from './ui/Sidebar'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="cmps-app">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              Main content
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
