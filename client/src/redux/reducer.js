import { GET_GENEROS, GET_VIDEOGAMES, GET_VIDEOGAMES_DETAIL, SEARCH_VIDEOGAMES } from "./actions";

const initialState = {
    videogames: [],
    videogamesSearched: [],
    videogameDetail: [],
    generos: []
};

export default function reducer (state=initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload, 
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
        case GET_GENEROS:
            return{
                ...state,
                generos: action.payload
            }   

        default:
            return {...state}
    }
}