import React from "react";
import style from './landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <div className={style.landing}>
         <Link to='/home'> 
            <button className={style.btn}>Ingresar</button>
         </Link>
        </div>
    )
};

export default Landing;