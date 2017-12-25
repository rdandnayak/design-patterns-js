let Task = require('./task');
let TaskRepo = require('./taskRepository');

let task1 = new Task(TaskRepo.get(1));
let task2 = new Task({ name: 'constructor task' });
let task3 = new Task({ name: 'module task' });
task1.complete();

task2.save();
task3.save();
