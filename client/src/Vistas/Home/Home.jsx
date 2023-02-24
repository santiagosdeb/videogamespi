import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanAllVideogames, getVideogames, orderVideogames, getGeneros } from '../../redux/actions';
import GameContainer from '../../Components/GameContainer/GameContainer'
import Buscador from '../../Components/Buscador/Buscador';
import Paginado from '../../Components/Paginado/Paginado';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state=>state.videogames)
    const generos = useSelector(state=>state.generos)

    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(15);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;

    const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame)
    const paginado = (pageNumber)=>{setCurrentPage(pageNumber)} 

    const [generoSelec, setGeneroSelec] = useState('');

    const handleGenreChange = (event) => {
        setGeneroSelec(event.target.value);
      };

    const filteredVideogames = generoSelec
      ? currentGames.filter((videogame) => videogame.generos.includes(generoSelec))
      : currentGames;


    const [currentOrder, setCurrentOrder] = useState("");

    const handleOrder = (event) => {
        setCurrentOrder(event.target.value);
        dispatch(orderVideogames(event.target.value))
    }

    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getGeneros())

        return function(){
            dispatch(cleanAllVideogames())
        }
    },[dispatch]);

    
if(currentGames.length){
   return(
            <>
            <Buscador />
            <div>
                <label htmlFor="genero">Filtrar por género:</label>
                    <select id="genero" value={generoSelec} onChange={handleGenreChange}>
                        <option value="">-- Todos los géneros --</option>
                        {generos.map(genero => {
                        return (
                        <option key={genero.id} value={genero.nombre}>
                        {genero.nombre}
                        </option>
        );
      })}
                    </select>

                <button value="ratingAsc" onClick={handleOrder}>
                    Ordenar por rating (from 0 to 5)
                </button>
                <button value="ratingDesc" onClick={handleOrder}>
                    Ordenar por rating (from 5 to 0)
                </button>
                <button value="nombreAsc" onClick={handleOrder}>
                    Ordenar por nombre (A-Z)
                </button>
                <button value="nombreDesc" onClick={handleOrder}>
                    Ordenar por nombre (Z-A)
                </button>
            </div>
            <GameContainer key={videogames.id} currentGames={filteredVideogames} />
            <Paginado 
                gamesPerPage={gamesPerPage} 
                videogames={videogames.length}
                paginado={paginado} 
                currentPage={currentPage} 
            />
            
            </>
        )}else{
            return(
                <h1>LOADING...</h1>
            )
        }
};

export default Home;