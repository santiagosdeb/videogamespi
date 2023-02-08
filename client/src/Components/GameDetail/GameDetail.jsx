import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogamesDetail } from '../../redux/actions';


const GameDetail = ({game}) => {
    return (
        <>
          <hr>
            <h1>{game.nombre}</h1>
            <img src={game.imagen} alt={"No se encuentra la imagen"}/>
            <h3>{game.generos}</h3>
            <p>{game.descripcion}</p>
            <p>{game.fechaDeLanzamiento}</p>
            <p>{game.rating}</p>
          </hr>
        </>
    )
};

export default GameDetail;