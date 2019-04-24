import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, List, Users , BarChart, PieChart }  from 'react-feather'
import classNames from 'classnames';

import NavLink from './navlink'

import './side-bar.scss'

const Sidebar = () => {
    const [toggle, setToggle] = useState(1);

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
            {toggle === 0 && <span className="toggle" onClick={() => setToggle(1)}><ChevronLeft/></span>}
            {toggle === 1 && <span className="toggle" onClick={() => setToggle(0)}><ChevronRight/></span>}
        </div>

        <div className="sidebar-sticky pt-3">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <NavLink to="/users" className="nav-link" activeClassName="active">
                        <Users/>
                        Users
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/items" className="nav-link" activeClassName="active">
                        <List/>
                        Items
                    </NavLink>
                </li>
            </ul>

            <hr/>
            <ul className="nav flex-column nav-pills mb-2">
                <li className="nav-item">
                    <NavLink to="/report-1" className="nav-link" activeClassName="active">
                        <BarChart/>
                        Report 1
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/report-2" className="nav-link" activeClassName="active">
                        <PieChart/>
                        Report 2
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Sidebar