import React from 'react';
import Game from '../Game/Game';
import style from './gameContainer.module.css'

const Container = ({videogames}) => {
    return(
    <div className={style.container}>
        {videogames.map((game) => {
            return (
                <Game key={game.id} id={game.id} imagen={game.imagen} nombre={game.nombre} generos={game.generos}/>
            )
        })}
    </div>
)
};

export default Container