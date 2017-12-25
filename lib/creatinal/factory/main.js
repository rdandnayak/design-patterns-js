var Task = require('./task');

var repos = require('./repoFactoryI');

var task1 = new Task(repos.task.get(1));
var task2 = new Task(repos.task.get(2));

var user = repos.user.get(1);
var project = repos.project.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
