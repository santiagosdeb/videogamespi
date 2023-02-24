require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');
const { Genre } = require('../../db');
const { API_KEY } = process.env;

const router = Router();

router.get('/', async(req,res) => {
    const generos = [];
    const info = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    
    info.data.results.map(gen => {
        generos.push({
            nombre: gen.name
        })
    });
    const validator = await Genre.findAll();
    if(!validator.length){
        const generosDB = await Genre.bulkCreate(generos);
        return res.send(generosDB)
    }
    res.send(validator);
});

module.exports = router;