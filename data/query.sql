-- `findProjects()`: should return a list of all projects in the database.
select p.id as 'Project Number', 
    p.name as 'Name', 
    p.description as 'Description', 
    p.completed as 'Completed'
from projects as p;
    
-- `addProjects()`: should add a new project.
-- need example SQL code

-- `findTasks()`: should return a list of all tasks in the database.
-- include project name and description
select t.id as 'Task Number', 
    t.name as 'Name', 
    t.description as 'Description', 
    t.completed as 'Completed',
    p.description
    p.name,
from tasks as t;
join projects as p
    on t.project_id = p.id
    
-- `addTasks()`: should add a new project.
-- need example SQL code

