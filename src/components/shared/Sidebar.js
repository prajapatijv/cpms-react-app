import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () =>
    <nav id="sidebar" className="bg-light sidebar">
        <div className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler"
                type="button" data-toggle="collapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>

        <div className="sidebar-sticky pt-3">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <NavLink to="/users" className="nav-link" activeClassName="active">
                        <FontAwesomeIcon icon="id-card" />
                        Users
                    </NavLink>
                </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Reports</span>
            </h6>
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <NavLink to="/report-1" className="nav-link" activeClassName="active">
                        <FontAwesomeIcon icon="chart-bar" />
                        Report 1
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/report-2" className="nav-link" activeClassName="active">
                        <FontAwesomeIcon icon="chart-bar" />
                        Report 2
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>

export default Sidebar