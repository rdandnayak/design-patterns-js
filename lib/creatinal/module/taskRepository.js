var repo = function() {
  let db = {};
  let get = function(id) {
    console.log('Getting task' + id);
    return {
      name: 'new task from db'
    };
  };

  let save = function(task) {
    console.log('saving task =>' + task.name);
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo();
