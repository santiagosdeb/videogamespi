import { CLEAN_GAME_DETAIL, CLEAN_SEARCHED_VIDEOGAMES, CLEAN_VIDEOGAMES, 
         GET_GENEROS, GET_VIDEOGAMES, GET_VIDEOGAMES_DETAIL, ORDER_NOMBRE, ORDER_RATING, 
         SEARCH_VIDEOGAMES } from "./actions";

const initialState = {
    videogames: [],
    videogamesSearched: [],
    videogameDetail: {},
    generos: [],
};

export default function reducer (state=initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload, 
            }
        case CLEAN_VIDEOGAMES:
            return{
                ...state,
                videogames: []
            }
        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                videogamesSearched: action.payload
            }
        case GET_VIDEOGAMES_DETAIL: 
            return {
                ...state,
                videogameDetail: action.payload
            }
        case CLEAN_GAME_DETAIL:
            return{
                ...state,
                videogameDetail: {}
            }
        case CLEAN_SEARCHED_VIDEOGAMES:
            return{
                ...state,
                videogamesSearched: [],
            }
        case GET_GENEROS:
            return{
                ...state,
                generos: action.payload
            }
        case ORDER_RATING:
            return{
                ...state,
                videogames: action.payload
            }
        case ORDER_NOMBRE:
            return{
                ...state,
                videogames: action.payload
            }
            
        default:
            return {...state}
    }
};