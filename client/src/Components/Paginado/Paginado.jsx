import React from "react";
import style from './paginado.module.css'

const Paginado = ({gamesPerPage, videogames, paginado, currentPage}) => {

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(videogames / gamesPerPage); i++){
        pageNumbers.push(i + 1);
    }
    
    return (
        <nav>
        <ul className={style.paginado}>
            <button onClick={() => {paginado(currentPage - 1)}} disabled={currentPage === 1}>
                Atrás
            </button>
            {pageNumbers &&
            pageNumbers.map(number => {
                return number !== currentPage ? (
                <li key={number}>
                    <button onClick={() => {paginado(number)}}>{number}</button>
                </li>  
                ) : (
                <li key={number}>     
                    <button onClick={() => {paginado(number)}}>{number}</button>
                </li>
                );
            })}
            <button onClick={() => {paginado(currentPage + 1)}} disabled={currentPage === pageNumbers.length}>
                Adelante
            </button>
        </ul>
        </nav>
    )
}

export default Paginado;