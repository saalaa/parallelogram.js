var parallelogram = require('./parallelogram');

// Try running a couple of long-running but successful functions.
parallelogram(

  [
    function (done) {
      setTimeout(function () { done(); }, 1000);
    },

    function (done) {
      setTimeout(function () { done(); }, 2500);
    },

    function (done) {
      setTimeout(function () { done(); }, 1500);
    }
  ],

  function (err) {
    console.log('test1: done, error:', err);
  }

);

// Try running a couple of shorter functions with one including an error.
parallelogram(

  [
    function (done) {
      setTimeout(function () { done(); }, 500);
    },

    function (done) {
      setTimeout(function () { done(); }, 100);
    },

    function (done) {
      setTimeout(function () { done(new Error('Yep.')); }, 500);
    }
  ],

  function (err) {
    console.log('test2: done, error:', err);
  }

);
