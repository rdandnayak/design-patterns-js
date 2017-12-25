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

let UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
  console.log('notifying all important people');
};

UrgentTask.prototype.save = function() {
  this.notify();
  console.log('doing some additional stuff');
  Task.prototype.save.call(this);
};

let urgentTask = new UrgentTask('urgent task');

urgentTask.complete();
urgentTask.save();
