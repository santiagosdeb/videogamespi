import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { cleanSearchedVideogames, searchVideogames } from '../../redux/actions';
import Buscador from './Buscador';
import style from './buscador.module.css'


const VistaBuscador = () => {
    const {game} = useParams();
    const dispatch = useDispatch();
    const searchedGames = useSelector(state=>state.videogamesSearched)

    useEffect(()=>{
        dispatch(searchVideogames(game));

        return function(){
            dispatch(cleanSearchedVideogames());
        }
    },[dispatch,game])

    return(
        <div>
            <div>
            <Buscador/>
            </div>
            <ul className={style.container}>
                {searchedGames.map((game) => {
                return(
                
              <div className={style.game}>
                <div className={style.containerb}>
                  <li key={game.id}>
                    <Link to={`/game/${game.id}`}>
                      <img src={game.imagen} alt={''} className={style.imgBuscados}/>
                      <h3>{game.nombre}</h3>
                    </Link>
                  </li>
                </div>
              </div>
            )
          })}
        </ul>
        </div>
    )
}

export default VistaBuscador;