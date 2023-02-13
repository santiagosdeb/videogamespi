import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGeneros, getVideogames } from '../../redux/actions';
// import Game from '../../Components/Game/Game'
import GameContainer from '../../Components/GameContainer/GameContainer'
import Buscador from '../../Components/Buscador/Buscador';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state=>state.videogames)
    // const generos = useSelector(state=>state.generos)

    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getGeneros())
    },[dispatch]);

   return(
            <>
            <div>
            <Buscador />
            </div>
            <div>
            <GameContainer key={videogames.id} videogames={videogames} />
            </div>
            </>
        )
};

export default Home;