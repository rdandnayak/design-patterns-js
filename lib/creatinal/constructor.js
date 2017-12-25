var Task = function(name) {
  this.name = name;
  this.completed = false;

  this.complete = function() {
    console.log('completing task' + task.name);
    this.completed = true;
  };

  this.save = function() {
    console.log('saving task' + task.name);
  };
};
