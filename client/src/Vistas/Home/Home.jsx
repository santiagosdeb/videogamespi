import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanAllVideogames, getGeneros, getVideogames } from '../../redux/actions';
// import Game from '../../Components/Game/Game'
import GameContainer from '../../Components/GameContainer/GameContainer'
import Buscador from '../../Components/Buscador/Buscador';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state=>state.videogames)
    // const generos = useSelector(state=>state.generos)

    useEffect(()=>{
        dispatch(getVideogames());
        dispatch(getGeneros());

        return function(){
            dispatch(cleanAllVideogames())
        }
    },[dispatch]);

   return(
            <>
            <Buscador />
           
            <GameContainer key={videogames.id} videogames={videogames} />
            </>
        )
};

export default Home;