import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideogames, cleanSearchedVideogames, orderVideogamesByRating, orderVideogamesByNombre } from "../../redux/actions";
import { Link } from 'react-router-dom';
import style from './buscador.module.css'

const Buscador = () => {

  const dispatch = useDispatch();

  const [game, setGame] = useState("");
  
  const handleOrderRating = (event) => {
    dispatch(orderVideogamesByRating(event.target.value))
  };

  const handleOrderNombre = (event) => {
    dispatch(orderVideogamesByNombre(event.target.value))
  };

  const handleChange = (event) => {
    setGame(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchVideogames(game));

    return function(){
      dispatch(cleanSearchedVideogames())
    }
  }

    return (
      <div>
        <label htmlFor='ordenRating'>Orden por Rating</label>
                    <select id='ordenRating' defaultValue='' onChange={handleOrderRating}>
                        <option value=''>Orden por default</option>
                        <option value='ratingAsc'>0-5</option>
                        <option value='ratingDesc'>5-0</option>
                        <option value='aleatorio'>Aleatorio</option>
                    </select>
                <label htmlFor='ordenNombre'>Orden por Nombre</label>
                    <select id='ordenNombre' onChange={handleOrderNombre}>
                        <option value=''>Orden por default</option>
                        <option value='nombreAsc'>A - Z</option>
                        <option value='nombreDesc'>Z - A</option>
                        <option value='aleatorio'>Aleatorio</option>
                    </select>
        <form className={style.formcontainer} onSubmit={handleSubmit}>
          <div>
            <input type="text" id="game" value={game} onChange={handleChange} autoComplete="off" placeholder="Search videogame" className={style.buscador}/>
          </div>
        <Link to={`/search/${game}`}><button type="submit" className={style.btn}>SEARCH</button></Link>
        </form>
      </div>
    );
  }
    
  export default Buscador;

 

//   var image = new Image();
// image.src = "image1.jpg";
// image.onerror = function() {
//     this.src = "image2.jpg";
// };
// document.body.appendChild(image);
// segunda imagen??