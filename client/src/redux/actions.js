import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_DETAIL = "GET_VIDEOGAMES_DETAIL" 
export const CLEAN_GAME_DETAIL = "CLEAN_GAME_DETAIL" 
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES"
export const GET_GENEROS = "GET_GENEROS"
export const CLEAN_VIDEOGAMES = "CLEAN_VIDEOGAMES"

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
}

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



