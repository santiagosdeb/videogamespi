import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanGameDetail, getVideogamesDetail } from '../../redux/actions';
import style from './gameDetail.module.css'

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
      <div className={style.container}>
        <div className={style.second}>
          <h1 className={style.fuente}>{gameDetail.nombre}</h1>
          <img src={gameDetail.imagen} alt="imagen detail" className={style.gameImg}/>
          <h3 className={style.fuente}>Generos</h3>
          <ul className={style.lista}>
            {generos?.map(gen=>{ 
              return(
              <li key={gen} className={`${style.fuente} && ${style.size}`}>{gen}</li>
            )})}
          </ul>
          <p className={`${style.fuente} && ${style.size}`}>{gameDetail.descripcion}</p>
          <h4 className={`${style.fuente} && ${style.size}`}>Fecha de Lanzamiento: {gameDetail.fechaDeLanzamiento}</h4>
          <h4 className={`${style.fuente} && ${style.size}`}>Rating: {gameDetail.rating}</h4>
          <h3 className={style.fuente}>Plataformas</h3>
          <ul className={style.lista}>
          {plataformas?.map(plat=>{
              return(
                <li key={plat} className={`${style.fuente} && ${style.size}`}>{plat}</li>
              )
            })}
          </ul>
        </div>
      </div>
  )} else{
    return(
      <h1>Loading...</h1>
    )
  }
}

export default GameDetail;