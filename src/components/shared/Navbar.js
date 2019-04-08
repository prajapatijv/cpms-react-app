import React from 'react'

class Navbar extends React.Component { 
    render() {
        return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Bootstrap
            </a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Signin</button>
                </li>
            </ul>
        </nav>
        )
    }
}

export default Navbar