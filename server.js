const express = require('express');
const helmet = require('helmet');
const logger = require('./middleware/logger.js');

const projectRouter = require('./projects/projectsRouter.js');
// const taskRouter = require('./projects/taskRouter.js');
// const resourceRouter = require('./projects/resourceRouter.js');

const server = express();

// middeware
server.use(helmet());
server.use(express.json());

// routes

server.get('/', logger('root api call'), (req, res) => {
    res.send('<h3>WEBDB-SPRINT-CHALLENGE</h3>')
});

server.use('/api/projects', logger('projectRouter'), projectRouter);
// server.use('/api/tasks', logger('taskRouter'), taskRouter);
// server.use('/api/resources', logger('resourceRouter'), resourceRouter);

// export
module.exports = server;