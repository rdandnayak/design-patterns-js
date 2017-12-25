// var Task = function(name) {
//   this.name = name;
//   this.completed = false;
// };
// Task.prototype.complete = function() {
//   console.log('completing task: ' + this.name);
//   this.completed = true;
// };
// Task.prototype.save = function() {
//   console.log('saving task: ' + this.name);
// };

// let UrgentTask = function(name, priority) {
//   Task.call(this, name);
//   this.priority = priority;
// };

// UrgentTask.prototype = Object.create(Task.prototype);

// UrgentTask.prototype.notify = function() {
//   console.log('notifying all important people');
// };

// UrgentTask.prototype.save = function() {
//   this.notify();
//   console.log('doing some additional stuff');
//   Task.prototype.save.call(this);
// };

// let urgentTask = new UrgentTask('urgent task');

// urgentTask.complete();
// urgentTask.save();

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    console.log('completing task: ' + this.name);
    this.completed = true;
  }
  save() {
    console.log('saving task: ' + this.name);
  }
}

class UrgentTask extends Task {
  constructor(name, priority) {
    super(name);
    this.name = name;
    this.priority = priority;
  }

  notify() {
    console.log('notifying all important people');
  }

  save() {
    this.notify();
    console.log('doing some additional stuff');
    super.save();
  }
}

let urgentTask = new UrgentTask('urgent task', 1);
urgentTask.complete();
urgentTask.save();
