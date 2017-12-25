let TaskRepo = require('./taskRepository');

class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
  }
  complete() {
    console.log('completing task => ' + this.name);
    this.completed = true;
  }
  save() {
    TaskRepo.save(this);
  }
}

module.exports = Task;
