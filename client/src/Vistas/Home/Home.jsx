import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanAllVideogames, getVideogames, orderVideogames } from '../../redux/actions';
import GameContainer from '../../Components/GameContainer/GameContainer'
import Buscador from '../../Components/Buscador/Buscador';
import Paginado from '../../Components/Paginado/Paginado';
import style from './home.module.css'

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state=>state.videogames)

    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(15);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;

    const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame)
    const paginado = (pageNumber)=>{setCurrentPage(pageNumber)} 


    const [currentOrder, setCurrentOrder] = useState("");

    const handleOrder = (event) => {
        setCurrentOrder(event.target.value);
        dispatch(orderVideogames(event.target.value))
    }

    useEffect(()=>{
        dispatch(getVideogames())

        return function(){
            dispatch(cleanAllVideogames())
        }
    },[dispatch]);

    

   return(
            <>
            <Paginado 
                gamesPerPage={gamesPerPage} 
                videogames={videogames.length}
                paginado={paginado} 
                currentPage={currentPage} 
            />
            <Buscador />
            <div>
                <button value="ratingAsc" onClick={handleOrder}>
                    Ordenar por rating (ascendente)
                </button>
                <button value="ratingDesc" onClick={handleOrder}>
                    Ordenar por rating (descendente)
                </button>
                <button value="nombreAsc" onClick={handleOrder}>
                    Ordenar por nombre (ascendente)
                </button>
                <button value="nombreDesc" onClick={handleOrder}>
                    Ordenar por nombre (descendente)
                </button>
            </div>
            <GameContainer key={videogames.id} currentGames={currentGames} />
            </>
        )
};

export default Home;