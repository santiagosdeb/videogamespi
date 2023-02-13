import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanGameDetail, getVideogamesDetail } from '../../redux/actions';


const GameDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const gameDetail = useSelector(state=>state.videogameDetail)


  useEffect(() => {
    dispatch(getVideogamesDetail(id));

    return function() {
      dispatch(cleanGameDetail())
    }
  },[dispatch, id])

  const generos = gameDetail.generos;
  const plataformas = gameDetail.plataformas;

  if(generos !== undefined || plataformas !== undefined){
    return (
    <div>
      <h1>{gameDetail.nombre}</h1>
      <img src={gameDetail.imagen} alt="imagen detail"/>
      <h3>Genero/s:</h3>
      <ul>
        {generos?.map(gen=>{ 
          return(
          <li key={gen}>{gen}</li>
        )})}
      </ul>
      <p>{gameDetail.descripcion}</p>
      <h4>Fecha de Lanzamiento: {gameDetail.fechaDeLanzamiento}</h4>
      <h4>Rating: {gameDetail.rating}</h4>
      <ul>
      {plataformas?.map(plat=>{
          return(
            <li key={plat}>{plat}</li>
          )
        })}
      </ul>
      
    </div>
  )} else{
    return(
      <h1>Loading...</h1>
    )
  }
}

export default GameDetail;