var Task = function(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log('completing task' + task.name);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log('saving task' + task.name);
};
