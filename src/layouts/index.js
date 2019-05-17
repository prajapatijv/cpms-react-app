import React from 'react'

import Navbar from './nav-bar'
import Sidebar from './side-bar'
import StatusBar from '../containers/status-bar/statusbar'

const WithBasicLayout = ({children}) => 
<React.Fragment>
  <StatusBar />
  <div className="wrapper">
    <Sidebar />
    <div className="container-fluid px-0">
      <Navbar />
      {children}
    </div>
  </div>
</React.Fragment>
  
export default WithBasicLayout