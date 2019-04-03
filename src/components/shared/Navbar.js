import React from 'react'
import logo from '../../logo.svg'


class Navbar extends React.Component { 
 
    constructor(props) {
        super(props)
        this.ToggleSidebar= this.ToggleSidebar.bind(this);
        this.state = {
            collapse:false
        }
    }

    ToggleSidebar = () => {
        //const currentState = this.state.collapse;
        //this.setState({ collapse: !collapse });        
    }
    
    render() {
        return (
        <nav className="navbar sticky-top navbar-dark bg-dark shadow">
            <button className="navbar-toggler" onClick={this.ToggleSidebar} 
                    type="button" data-toggle="collapse"  aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>        
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
        )
    }
}

export default Navbar