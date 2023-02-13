import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogames } from "../../redux/actions";
import { Link } from 'react-router-dom';
import style from './buscador.module.css'

const Buscador = () => {

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
        <form className={style.formcontainer} onSubmit={handleSubmit}>
          <div>
            <input type="text" id="game" value={game} onChange={handleChange} autoComplete="off" placeholder="Search videogame" className={style.buscador}/>
          </div>
         <button type="submit">SEARCH</button>
        </form>
        <ul className={style.container}>
          {searchedGames.map((game) => {
            return(
              <div className={style.game}>
                <div className={style.containerb}>
                  <li>
                    <Link to={`/game/${game.id}`}>
                      <img src={game.imagen} alt={'./noImage.jpg'} className={style.imgBuscados}/>
                      <h3>{game.nombre}</h3>
                      <button>Ver Detalle</button>
                    </Link>
                  </li>
                </div>
              </div>
            )
          })}
        </ul>
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