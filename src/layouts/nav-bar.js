import React from 'react'
import { LogOut } from 'react-feather'

const Navbar = () =>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
        <span className="navbar-brand"></span>
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="#"><LogOut /></a>
            </li>
        </ul>
    </nav>

export default Navbar

/*<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />*/