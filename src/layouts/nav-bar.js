import React from 'react'

const Navbar = () =>
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <span className="navbar-brand"></span>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Signin</button>
            </li>
        </ul>
    </nav>

export default Navbar