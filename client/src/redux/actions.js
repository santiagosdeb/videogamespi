import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const CLEAN_VIDEOGAMES = "CLEAN_VIDEOGAMES"
export const GET_VIDEOGAMES_DETAIL = "GET_VIDEOGAMES_DETAIL" 
export const CLEAN_GAME_DETAIL = "CLEAN_GAME_DETAIL" 
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES"
export const CLEAN_SEARCHED_VIDEOGAMES = "CLEAN_SEARCHED_VIDEOGAMES"
export const GET_GENEROS = "GET_GENEROS"
export const ORDER_RATING = "ORDER_RATING"
export const ORDER_NOMBRE = "ORDER_NOMBRE"


export const getVideogames = () => {
    return async function (dispatch) {
        const info = await axios.get('http://localhost:3001/videogames');
        const videogames = info.data;
        dispatch({
            type: GET_VIDEOGAMES,
            payload: videogames
        })
    }
};

export const cleanAllVideogames = () => {
    return{type: CLEAN_VIDEOGAMES}
};

export const getVideogamesDetail = (id) => {
    return async function(dispatch) {
        const info = await axios.get(`http://localhost:3001/videogames/${id}`)
        const gameDetail = info.data;
        dispatch({
            type: GET_VIDEOGAMES_DETAIL,
            payload: gameDetail
        })
    }
};

export const cleanGameDetail = () => {
    return {type: CLEAN_GAME_DETAIL}
};

export const searchVideogames = (game) => {
    return async function (dispatch) {
        const info = await axios.get(`http://localhost:3001/videogames?nombre=${game}`)
        const games = info.data;
        dispatch({
            type: SEARCH_VIDEOGAMES,
            payload: games
        })
    }
};

export const cleanSearchedVideogames = () => {
    return {type: CLEAN_SEARCHED_VIDEOGAMES}
};

export const getGeneros = () => {
    return async function (dispatch) {
        const info = await axios.get('http://localhost:3001/generos')
        const generos = info.data;
        dispatch({
            type: GET_GENEROS,
            payload: generos
        })
    }
};

export const orderVideogamesByRating = (order) => {
 return async function(dispatch, getState){
    let videogames = [...getState().videogames];
    

    switch(order) {
        case 'ratingAsc':
            videogames.sort((a, b) => a.rating - b.rating)
            break;
        case 'ratingDesc':
            videogames.sort((a, b) => b.rating - a.rating)
            break;
        case 'aleatorio':
            videogames.sort(() => { return Math.random() - 0.5})
            break;
        default:
            const info = await axios.get('http://localhost:3001/videogames');
            videogames = info.data;
            break;
    };
  
    dispatch({
        type: ORDER_RATING,
        payload: videogames
    });
  };
};

export const orderVideogamesByNombre = (order) => {
    return async function(dispatch, getState){
       let videogames = [...getState().videogames];
   
       switch (order) {
           case 'nombreAsc':
                videogames.sort((a, b) => a.nombre.localeCompare(b.nombre))
                break;
           case 'nombreDesc':
                videogames.sort((a, b) => b.nombre.localeCompare(a.nombre))
                break; 
           case 'aleatorio':
                videogames.sort(() => { return Math.random() - 0.5})
                break;
           default:
                const info = await axios.get('http://localhost:3001/videogames');
                videogames = info.data; 
                break;
       };
     
       dispatch({
           type: ORDER_NOMBRE, 
           payload: videogames
       });
     };
   };



