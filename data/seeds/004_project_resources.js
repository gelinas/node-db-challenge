
exports.seed = function(knex) {
  // .truncate() instead of .del() to reset primary keys
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {id: 1, project_id: 1, resource_id: 1},
        {id: 2, project_id: 1, resource_id: 4},
        {id: 3, project_id: 1, resource_id: 5},
        {id: 4, project_id: 2, resource_id: 1},
        {id: 5, project_id: 2, resource_id: 2},
        {id: 6, project_id: 2, resource_id: 3},
        {id: 7, project_id: 2, resource_id: 5},
        {id: 8, project_id: 3, resource_id: 1},
      ]);
    });
};
