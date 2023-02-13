import React from 'react';
import style from './navbar.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className={style.container}>
            <Link to='/home'> <button className={style.btn}>HOME</button> </Link>
            <Link to='/post'> <button className={style.btn}>ADD NEW GAME</button> </Link>
        </div> 
    )
};

export default NavBar;