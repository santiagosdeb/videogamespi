import React from "react";
import './landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <div className="btn">
            <div>
                <Link to='/home'> 
                    <button>Ingresar</button>
                </Link>
            </div>
        </div>
    )
};

export default Landing;