let Task = require('./task');
let { subscribe, publish, channels } = require('./mediator');

class NotificationService {
  constructor() {
    this.message = 'Notifying ';
    this.update = this.update.bind(this);
  }
  update(task) {
    console.log(this.message + task.user + ' for task: ' + task.name);
  }
}

class LoggingService {
  constructor() {
    this.message = 'Logging ';
    this.update = this.update.bind(this);
  }
  update(task) {
    console.log(this.message + task.user + ' for task: ' + task.name);
  }
}

class AuditingService {
  constructor() {
    this.message = 'Auditing ';
    this.update = this.update.bind(this);
  }
  update(task) {
    console.log(this.message + task.user + ' for task: ' + task.name);
  }
}

var task1 = new Task({ name: 'demo for constructors', user: 'john' });

let notif = new NotificationService();
let audit = new AuditingService();
let log = new LoggingService();

subscribe('complete', notif, notif.update);
subscribe('complete', audit, audit.update);
subscribe('complete', log, log.update);

task1.complete = function() {
  publish('complete', this);
  Task.prototype.complete.call(this);
};

task1.complete();
