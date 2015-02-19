# parallelogram.js

Run functions in parallel with a final callback (small and no dependencies).
This module works both on Node.js and a web browser.

### parallelogram(jobs, [callback])

Run the `jobs` array of functions in parallel, without waiting until the
previous function has completed. If any of the functions passes an error to its
callback, the main callback is immediately called with the value of the error.
Once the jobs have completed, the final callback is called.

__Arguments__

* `jobs` – An array containing functions to run. Each function is passed a
  `callback(err)` which it must call on completion with an error `err` if
  needed.
* `callback(err)` – An optional and final callback to run once all the
  functions have completed or when an error occurs.

__Example__

```js
parallelogram(

  [

    function (done) {
      done();
    },

    function (done) {
      done();
    }

  ],

  function (err) {
    // All done unless `err` is defined.
  }

);
```
