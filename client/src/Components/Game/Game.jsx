import React from 'react';
import './game.css'

const Game = ({game}) => {
    return(
        <div>
            <h1>{game.nombre}</h1>
            <section>
                <img src={game.imagen} alt={"No se encuentra la imagen"}/>
            </section>
            <h3>{game.generos}</h3>
        </div> 
    )
};

export default Game;