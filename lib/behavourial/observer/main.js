let Task = require('./task');

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

class ObservableTask extends Task {
  constructor(data) {
    super(data);
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
  }

  notify(context) {
    let observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i)(context);
    }
  }

  save() {
    this.notify(this);
    super.save();
  }
}

class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    this.observerList.push(obj);
  }

  removeAt(index) {
    this.observerList.splice(index, 1);
  }

  indexOf(obj) {
    let i = 0;

    while (i < this.count()) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }
    return -1;
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }
  count() {
    return this.observerList.length;
  }
}

var task1 = new ObservableTask({ name: 'demo for constructors', user: 'john' });

let notif = new NotificationService();
let audit = new AuditingService();
let log = new LoggingService();

task1.addObserver(notif.update);
task1.addObserver(audit.update);
task1.addObserver(log.update);

task1.save();
task1.removeObserver(audit.update);
task1.save();
