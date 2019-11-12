
exports.seed = function(knex) {
  // .truncate() instead of .del() to reset primary keys
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'Meet with Razi', notes: 'Call next week', completed: false},
        {id: 2, project_id: 1, description: 'Develop prototype', completed: false},
        {id: 3, project_id: 1, description: 'Launch Beta', notes: 'Integrate in north end', completed: false},
        {id: 4, project_id: 2, description: 'Meet with Electra', completed: true},
        {id: 5, project_id: 2, description: 'Develop prototype', completed: true},
        {id: 6, project_id: 2, description: 'Launch Beta', notes: 'northendcc.now.sh', completed: true},
        {id: 7, project_id: 3, description: 'Meet with Scott', completed: true},
        {id: 8, project_id: 3, description: 'Develop prototype', notes: 'make node and react stack', completed: false},
        {id: 9, project_id: 3, description: 'Launch Beta', notes: 'must integrate with raspberry pi', completed: false},
      ]);
    });
};
