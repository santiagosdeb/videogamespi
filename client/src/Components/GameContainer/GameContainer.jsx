import React from 'react';
import Game from '../Game/Game';
import style from './gameContainer.module.css'

const Container = ({currentGames}) => {
    return(
    <div className={style.container}>
        
        {currentGames.map((game) => {
            return (
                <Game key={game.id} id={game.id} imagen={game.imagen} nombre={game.nombre} generos={game.generos}/>
            )
        })}
    </div>
)
};

export default Container