import React from 'react';
import style from './game.module.css'
import { Link } from 'react-router-dom';


const Game = ({ nombre, imagen, generos, id }) => {
  
    return (
      <>
        <div  className={style.game}>
          <div  className={style.container}>
            <div className={style.links}>
              <Link to={`/game/${id}`}>
                <img src={imagen} alt="Fotos" className={style.gameImg} />
                <h2 className={style.nombres}> {nombre} </h2>
              </Link>
            </div>
  
            <div className={style.itemsGenros}>
                <h3>Generos</h3>
                <ul>
                  
                    {/* <li>{generos[0]}</li> */}
                </ul>
                
            </div>
          </div>
        </div>
      </>
    );
  };

export default Game;