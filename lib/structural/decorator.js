var Task = function(name) {
  this.name = name;
  this.completed = false;
};
Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log('saving task: ' + this.name);
};

// let myTask = new Task('legacy task');
// myTask.complete();
// myTask.save();

let urgentTask = new Task('urgent task');
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('notifying important people');
};
urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
};
urgentTask.complete();
urgentTask.save();
