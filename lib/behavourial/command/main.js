var repo = {
  tasks: {},
  commands: [],
  get: function(id) {
    console.log('Getting task' + id);
    return {
      name: 'new task from db'
    };
  },
  save: function(task) {
    repo.tasks[task.id] = task;
    console.log('saving task =>' + task.name);
  },
  replay: function() {
    for (let i = 0; i < repo.commands.length; i++) {
      let command = repo.commands[i];
      repo.executeNoLog(command.name, command.obj);
    }
  }
};

repo.executeNoLog = function(name) {
  let args = [].slice.call(arguments, 1);
  if (repo[name]) repo[name].apply(repo, args);
  return false;
};

repo.execute = function(name) {
  let args = [].slice.call(arguments, 1);
  repo.commands.push({
    name: name,
    obj: args[0]
  });

  if (repo[name]) repo[name].apply(repo, args);
  return false;
};

repo.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false
});

repo.execute('save', {
  id: 2,
  name: 'Task 2',
  completed: false
});

repo.execute('save', {
  id: 3,
  name: 'Task 3',
  completed: false
});

console.log(repo.tasks);
repo.tasks = {};
console.log(repo.tasks);
repo.replay();
console.log(repo.tasks);
