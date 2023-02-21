import React from 'react';
import style from './game.module.css'
import { Link } from 'react-router-dom';


const Game = ({ nombre, imagen, generos, id }) => {
  
    return (
      <>
        <div  className={style.game}>
          <div  className={style.container}>
            <div>
              <Link to={`/game/${id}`}>
                <img src={imagen} alt="Fotos" className={style.gameImg} />
                <h2 className={style.nombres}> {nombre} </h2>
              </Link>
              {/* <ul className={style.lista}>
                  {
                    generos.map((genero)=> {return(<li key={genero.id}>{genero.nombre}</li>)})
                  }
                </ul> */}
            </div>
          </div>
        </div>
      </>
    );
  };

export default Game;