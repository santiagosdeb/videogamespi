import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogames } from "../../redux/actions";
import { Link } from 'react-router-dom'

const Buscador = (props) => {

  const dispatch = useDispatch();
  const searchedGames = useSelector(state=>state.videogamesSearched)


  const [game, setGame] = useState("");
  
  const handleChange = (event) => {
    setGame(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchVideogames(game))
  }

    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="game">Videogame: </label>
            <input type="text" id="game" value={game} onChange={handleChange}/>
          </div>
         <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {searchedGames.map((game) => {
            return(
              <li>
                <Link>
                  <span>{game.nombre}</span>
                </Link>
                <button>Ver Detalle</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
    
  export default Buscador;

 

  // <h5>{game}</h5>
  //       <input type="text" onChange={changeHandler}></input>