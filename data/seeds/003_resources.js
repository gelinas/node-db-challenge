
exports.seed = function(knex) {
  // .truncate() instead of .del() to reset primary keys
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Louis Gelinas', description: 'fullstack developer'},
        {id: 2, name: 'North End Alliance', description: 'nonprofit sponsor'},
        {id: 3, name: 'Kresge Foundation', description: 'nonprofit donor'},
        {id: 4, name: 'Razi Jafri', description: 'founder'},
        {id: 5, name: 'Lower North End Block Club', description: 'neighborhood group'},
      ]);
    });
};
