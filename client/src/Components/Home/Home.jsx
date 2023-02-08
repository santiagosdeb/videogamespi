import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';
import Game from '../Game/Game'
import Buscador from '../Buscador/Buscador';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state=>state.videogames)

    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch]);

    if(videogames.length){
        return(
            <>
            <div>
            <Buscador />
            </div>
            <div>
            {videogames.map(game=> <Game key={game.id} game={game} />)}
            </div>
            </>
        )
    }else{
        return(
            <>
            <h3>Loading</h3>
            </>
        )
    } 
};

export default Home;