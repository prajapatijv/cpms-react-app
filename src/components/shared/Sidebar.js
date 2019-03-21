import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () =>
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link " href="/users">
                        <FontAwesomeIcon icon="id-card" />
                        Users
                    </a>
                </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Reports</span>
            </h6>
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <a className="nav-link " href="/report1">
                        <FontAwesomeIcon icon="chart-bar" />
                        Report 1 <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="/report2">
                    <FontAwesomeIcon icon="chart-bar" />
                    Report 2 <span className="sr-only">(current)</span>
                </a>
            </li>
            </ul>
        </div>
    </nav>

export default Sidebar