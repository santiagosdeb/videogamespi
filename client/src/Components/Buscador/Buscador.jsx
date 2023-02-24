import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideogames, cleanSearchedVideogames } from "../../redux/actions";
import { Link } from 'react-router-dom';
import style from './buscador.module.css'

const Buscador = () => {

  const dispatch = useDispatch();

  const [game, setGame] = useState("");
  
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