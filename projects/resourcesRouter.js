const express = require('express');
const Resources = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.findResources()
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
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.post('/', (req, res) => {
  const newResource = req.body

  Resources.addResources(newResource)
    .then(ids => {
      res.json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add resource' });
    });
});

module.exports = router;