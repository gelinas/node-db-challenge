// db schema design located at https://app.dbdesigner.net/designer/schema/282983

exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments(); // primary key automatically named 'id'
      tbl
        .string('name', 255)
        .notNullable();
      tbl
        .string('description', 255);
      tbl
        .boolean('completed')
        .defaultTo(false);
    })

    .createTable('tasks', tbl => {
      tbl.increments(); // primary key automatically named 'id'
      tbl // foreign key to projects table
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .string('description', 255)
        .notNullable();
      tbl
        .string('notes', 255);
      tbl
        .boolean('completed')
        .defaultTo(false);
    })

    .createTable('resources', tbl => {
      tbl.increments(); // primary key automatically named 'id'
      tbl
        .string('name', 255)
        .notNullable();
      tbl
        .string('description', 255);
    })

    .createTable('project_resources', tbl => {
      tbl.increments(); // primary key automatically named 'id'
      tbl // foreign key to projects table
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      tbl // foreign key to resources table
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE') 
    });
};

exports.down = function(knex) {
  
};
