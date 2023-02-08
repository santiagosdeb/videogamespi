require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');
const { Videogame, Genero } = require('../../db');
const { Op } = require('sequelize');
const { API_KEY } = process.env;
 
const router = Router();

router.get('/', async(req,res) => {
    const {nombre} = req.query;

    if(!nombre){
        try {
            const gamesApi = [];
            const info = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)

            info.data.results.map(game => {
                gamesApi.push({
                    imagen: game.background_image,
                    nombre: game.name,
                    generos: game.genres.map(genero => {
                        return genero.name;
                    }),
                })
            });
            const gamesDB = await Videogame.findAll();
            const listado = [...gamesApi,...gamesDB]

            res.send(listado);
        } catch (error) {
            res.send(error.message);   
        }
      }
    if(nombre){
        try {
            const apiGames = [];
            const gameDatabase = await Videogame.findAll({ 
            where: {
                nombre: {
                    [Op.iLike]: '%' + nombre + '%'
             }
            }});

        const info = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${nombre}`);

        info.data.results.map(game=>{
            apiGames.push({
                imagen: game.background_image,
                nombre: game.name,
                generos: game.genres.map(gen => {
                    return gen.name;
                })
            })
        });
        const response = [...apiGames,...gameDatabase];
        if(!response.length) {
            return res.status(404).send("No se encontraron videojuegos con ese nombre")
        }
        res.send(response);
        } catch (error) {
            res.send(error.message)  
        }
      }
});

router.get('/:id', async(req,res) => {
    const {id} = req.params;
    try {
        if(Number(id)) {
            const game = [];
            const info = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        
            game.push({
                imagen: info.data.background_image,
                nombre: info.data.name,
                géneros: info.data.genres.map(genero => { return genero.name }),
                descripción: info.data.description_raw,
                fechaDeLanzamiento: info.data.released,
                rating: info.data.rating,
                plataformas: info.data.platforms.map(platform => { return platform.platform.name }),
            });
          return res.send(game);
        }
          if(!Number.isInteger(id)){
                const gameDatabase = await Videogame.findByPk(id);
                if(!gameDatabase) return res.status(404).send("Err 404: Videogame not found");
                return res.send(gameDatabase);        
            }
    } catch (error) {
        res.send(error.message)
    }
    
});

router.post('/', async(req,res) => {
    const {nombre, descripcion, fechaDeLanzamiento, rating, plataformas, generos} = req.body;
    
    try {
        if(!nombre || !descripcion || !plataformas) { 
            return res.status(400).send("Faltan datos obligatorios")
        };
        const newGame = await Videogame.create(req.body);
        if(generos.length > 0) {
            try {
                generos.map(async(genero)=>{
                    const gen = await Genero.findByPk(genero)
                    newGame.addGenero(gen)
                })
                return res.send("Creado con éxito")
            } catch (error) {
                return res.send(error.message)
            }
        }
        return res.send("Creado con éxito");
    } catch (error) {
        res.send(error.message)
    } 
});

module.exports = router; 