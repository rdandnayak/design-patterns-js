class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
    this.project = false;
    this.priority = false;
    this.user = false;
  }
  complete() {
    console.log('completing task => ' + this.name);
    this.completed = true;
  }
  save() {
    console.log('saving task' + this.name);
  }
}

module.exports = Task;
