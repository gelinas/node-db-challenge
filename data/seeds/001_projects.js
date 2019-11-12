
exports.seed = function(knex) {
  // .truncate() instead of .del() to reset primary keys
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'NeighborFix', description: 'Home maintenance matcher', completed: false},
        {id: 2, name: 'North End Community Calendar', description: 'Neighborhood Event Aggregator', completed: false},
        {id: 3, name: 'Wireless Wonder', description: 'Security enabled router', completed: false},
      ]);
    });
};
