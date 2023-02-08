const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const vgamesRouter = require('./routers/videogames');
const generosRouter = require('./routers/generos')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", vgamesRouter);
router.use("/generos", generosRouter);


module.exports = router;
