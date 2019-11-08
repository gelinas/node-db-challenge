// this file is the data access layer
const db = require('../data/dbConfig.js');

module.exports = {
  findProjects,
  addProjects,
  findTasks, // also return project name and description
  addTasks,
  findResources,
  addResources,
};

function findProjects() {
  return db
    .select('*').from('projects');
  // return db('projects'); // this code achieves same effect
  // return db('projects').select('*'); // this code achieves same effect
}

function addProjects(newProject) {
  return db('projects')
    .insert(newProject, 'id')
}

function findTasks() {
  return db
    .select('t.*', 'p.name as project_name', 'p.description as project_description')
    .from('tasks as t')
    .join('projects as p', 't.project_id', 'p.id');
}

function addTasks(newTask) {
  return db('tasks')
    .insert(newTask, 'id')
}

function findResources() {
  return db
    .select('*').from('resources');
}

function addResources(newResource) {
  return db('resources')
    .insert(newResource, 'id')
}