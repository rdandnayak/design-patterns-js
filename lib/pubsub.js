var pubsub = (function() {
  var cache = {};

  return {
    pub: function(id) {
      var args = [].slice.call(arguments, 1);

      if (!cache[id]) cache[id] = [];

      for (i = 0; i < cache[id].length; i++) {
        cache[id][i].apply(null, args);
      }
    },
    sub: function(id, fn) {
      if (!cache[id]) {
        cache[id] = [fn];
      } else {
        cache[id].push(fn);
      }
    }
  };
})(); 
