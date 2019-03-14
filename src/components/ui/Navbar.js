import React from 'react';
import logo from '../../logo.svg'

const Navbar = () =>
    <nav className="navbar sticky-top navbar-dark bg-dark shadow">
        <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            Bootstrap
        </a>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Signin</button>
            </li>
        </ul>
    </nav>

export default Navbar