class Task {
  constructor(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
  }
}

class TaskService extends Task {
  static complete(task) {
    task.completed = true;
    console.log('completing task: ' + task.name);
  }
  static setCompleteDate(task) {
    task.completedDate = new Date();
    console.log(task.name + ' completed on ' + task.completedDate);
  }
  static notifyCompletion(task, user) {
    console.log('Notifying ' + user + ' of the completion of ' + task.name);
  }
  static save(task) {
    console.log('saving Task: ' + task.name);
  }
}

class TaskServiceWrapper {
  static completeAndNotify(myTask) {
    TaskService.complete(myTask);
    if (myTask.completed == true) {
      TaskService.setCompleteDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  }
}

// var TaskService = (() => {
//   return {
//     complete: function(task) {
//       task.completed = true;
//       console.log('completing task: ' + task.name);
//     },
//     setCompleteDate: function(task) {
//       task.completedDate = new Date();
//       console.log(task.name + ' completed on ' + task.completedDate);
//     },
//     notifyCompletion: function(task, user) {
//       console.log('Notifying ' + user + ' of the completion of ' + task.name);
//     },
//     save: function(task) {
//       console.log('saving Task: ' + task.name);
//     }
//   };
// })();

// var TaskServiceWrapper = (function() {
//   var completeAndNotify = function(task) {
//     TaskService.complete(myTask);
//     if (myTask.completed == true) {
//       TaskService.setCompleteDate(myTask);
//       TaskService.notifyCompletion(myTask, myTask.user);
//       TaskService.save(myTask);
//     }
//   };
//   return {
//     completeAndNotify: completeAndNotify
//   };
// })();

var myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false
});

//console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
//
