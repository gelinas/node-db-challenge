const express = require('express');
const helmet = require('helmet');
const logger = require('./middleware/logger.js');

// const recipeRouter = require('./recipe/recipeRouter.js');
// const ingredientsRouter = require('./ingredients/ingredientsRouter.js');

const server = express();

// middeware
server.use(helmet());
server.use(express.json());

// routes

server.get('/', (req, res) => {
    res.send('<h3>WEBDB-SPRINT-CHALLENGE</h3>')
});

// server.use('/api/recipes', logger('recipeRouter'), recipeRouter);
// server.use('/api/ingredients', logger('ingredientsRouter'), ingredientsRouter);

// export
module.exports = server;