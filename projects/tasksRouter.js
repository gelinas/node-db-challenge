const express = require('express');
const Tasks = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.findTasks()
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
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.post('/', (req, res) => {
  const newTask = req.body

  Tasks.addTasks(newTask)
    .then(ids => {
      res.json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add task' });
    });
});

module.exports = router;