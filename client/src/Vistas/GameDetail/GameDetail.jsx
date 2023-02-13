import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideogamesDetail } from '../../redux/actions';


const GameDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const gameDetail = useSelector(state=>state.videogamesDetail)


  useEffect(() => {
    dispatch(getVideogamesDetail(id))
  },[dispatch, id])

  return (
    
    <div>
      {/* {console.log(gameDetail)}
      {console.log(id)}
      <h1>LA CONCHA DE TU MADRE</h1> */}
      <h1>{gameDetail.nombre}</h1>
      <img src={gameDetail.imagen} alt="imagen detail"/>
      <p>gameDetail.descripcion</p>
    </div>
  )
};

export default GameDetail;