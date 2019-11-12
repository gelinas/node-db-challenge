const express = require('express');
const Projects = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
    .then(results => {
      // const projects = results.map(result => {
      //   result = {...result};
      //   if (result.completed === 0) {
      //     result.completed = false;
      //   } else if (result.completed === 1) {
      //     result.completed = true;
      //   }
      // })
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.post('/', (req, res) => {
  const newProject = req.body

  Projects.addProjects(newProject)
    .then(ids => {
      res.json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add project' });
    });
});

module.exports = router;