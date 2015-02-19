function make () {
  return function parallelogram (jobs, callback) {
    var total = jobs.length;
    var completed = 0;

    var call_callback = function (err) {
      if (typeof callback === 'function') {
        callback(err || null);
        callback = null;
      }
    };

    if (!total) {
      return call_callback();
    }

    var done = function (err) {
      if (err) {
        call_callback(err);
      }
      else {
        completed++;

        if (completed >= total) {
          call_callback(err);
        }
      }
    };

    for (var i = 0; i < total; i++) {
      jobs[i].call(jobs, done);
    }
  };
}

if (typeof module !== 'undefined') {
  module.exports = make();
}
else if (typeof window !== 'undefined') {
  window.parallelogram = make();
}
