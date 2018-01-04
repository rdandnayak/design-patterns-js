let tasks = {};
let commands = [];
class Repo {
  static tasks() {
    return tasks;
  }
  static commands() {
    return commands;
  }

  static setTasks(task) {
    tasks[task.id] = task;
  }

  static emptyTasks() {
    tasks = {};
  }

  static setCommands(data) {
    commands.push({
      name: data.name,
      args: data.args
    });
  }

  static getTask(id) {
    console.log('Getting task' + id);
    return {
      name: 'new task from db'
    };
  }
  static saveTask(task) {
    Repo.setTasks(task);
    console.log('saving task =>' + task.name);
  }

  static replay() {
    let commands = Repo.commands();
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      Repo.executeNoLog(command.name, command.args);
    }
  }

  static executeNoLog(name) {
    let args = [].slice.call(arguments, 1);
    if (Repo[name]) Repo[name].apply(Repo, args);
    return false;
  }

  static execute(name) {
    let args = [].slice.call(arguments, 1);
    Repo.setCommands({
      name: name,
      args: args[0]
    });

    if (Repo[name]) Repo[name].apply(Repo, args);
    return false;
  }
}

// var repo = {
//   tasks: {},
//   commands: [],
//   get: function(id) {
//     console.log('Getting task' + id);
//     return {
//       name: 'new task from db'
//     };
//   },
//   save: function(task) {
//     repo.tasks[task.id] = task;
//     console.log('saving task =>' + task.name);
//   },
//   replay: function() {
//     for (let i = 0; i < repo.commands.length; i++) {
//       let command = repo.commands[i];
//       repo.executeNoLog(command.name, command.obj);
//     }
//   }
// };

// Repo.executeNoLog = function(name) {
//   let args = [].slice.call(arguments, 1);
//   if (Repo[name]) Repo[name].apply(repo, args);
//   return false;
// };

// Repo.execute = function(name) {
//   let args = [].slice.call(arguments, 1);
//   Repo.commands = {
//     name: name,
//     obj: args[0]
//   };

//   if (Repo[name]) Repo[name].apply(repo, args);
//   return false;
// };
// console.log(Repo.commands());
Repo.execute('saveTask', {
  id: 1,
  name: 'Task 1',
  completed: false
});

Repo.execute('saveTask', {
  id: 2,
  name: 'Task 2',
  completed: false
});

Repo.execute('saveTask', {
  id: 3,
  name: 'Task 3',
  completed: false
});

console.log(Repo.tasks());
Repo.emptyTasks({});
console.log(Repo.tasks());
Repo.replay();
console.log(Repo.tasks());

console.log(Repo.tasks);

module.exports = new Repo();
