import React from "react";
import { Link } from "@reach/router";

const NavLink = props => 
<Link
    {...props}
    getProps={({ isCurrent }) => {
        return {
            class:  isCurrent ? `${props.className} ${props.activeClassName}` : props.className
        };
    }}
/>

export default NavLink