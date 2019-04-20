import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';

import Icon from './icon'
import './side-bar.scss'

const Sidebar = () => {
    const [toggle, setToggle] = useState(0);

    var cls = classNames({
        'bg-light': true,
        'side-bar': true,
        'collaspe': toggle === 1
    })

    return (
    <nav id="sidebar" className={cls}>
        <div className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                BS
            </a>
            {toggle === 0 && <span className="toggle" onClick={() => setToggle(1)}><Icon icon="chevron-left"/></span>}
            {toggle === 1 && <span className="toggle" onClick={() => setToggle(0)}><Icon icon="chevron-right"/></span>}
        </div>

        <div className="sidebar-sticky pt-3">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <NavLink to="/users" className="nav-link" activeClassName="active">
                        <Icon icon="id-card" />
                        Users
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/items" className="nav-link" activeClassName="active">
                        <Icon icon="id-card" />
                        Items
                    </NavLink>
                </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Reports</span>
            </h6>
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <NavLink to="/report-1" className="nav-link" activeClassName="active">
                        <Icon icon="chart-bar" />
                        Report 1
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/report-2" className="nav-link" activeClassName="active">
                        <Icon icon="chart-bar" />
                        Report 2
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Sidebar