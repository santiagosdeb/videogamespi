import React from 'react';
import style from './game.module.css'
import { Link } from 'react-router-dom';


const Game = ({ nombre, imagen, generos, id, rating }) => {
  
    return (
      <>
        <div  className={style.game}>
            <div>
              <Link to={`/game/${id}`} className={style.link}>
                <img src={imagen} alt="Fotos" className={style.gameImg} />
                <h2 className={style.nombres}> {nombre} </h2>
                <h4 className={style.rating}>Rating: {rating}</h4>
              <ul className={style.lista}>
                  {
                    generos.map((genero, index)=> {return(<li key={index}>{genero}</li>)})
                  }
                </ul>
              </Link>
          </div>
        </div>
      </>
    );
  };

export default Game;