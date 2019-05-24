import React from 'react'
import { LogOut } from 'react-feather'

const Navbar = () =>
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
        <span className="navbar-brand"></span>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <a className="nav-link" href="#logout"><LogOut /></a>
            </li>
        </ul>
    </nav>

export default Navbar

/*<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />*/