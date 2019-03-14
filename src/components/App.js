import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import Navbar from './ui/Navbar'
import Sidebar from './ui/Sidebar'

library.add( faUserCircle, faAddressBook)

class App extends Component {
  render() {
    return (
      <div className="cmps-app">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
              Main content
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
