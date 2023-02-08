import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/post'>Create</NavLink>
        </div> 
    )
};

export default NavBar;