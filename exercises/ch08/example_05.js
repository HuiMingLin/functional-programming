const R = require('ramda')
const fs = require('fs')
const util = require('util');
const identity = (x) => x;

class Task {
  constructor(fork) {
    this.fork = fork;
  }

  [util.inspect.custom] () {
    return 'Task(?)';
  }

  static rejected (x) {
    return new Task((reject_, _) => reject_(x));
  }

  // ----- Pointed (Task a)
  static of (x) {
    return new Task((_, resolve) => resolve(x));
  }

  // ----- Functor (Task a)
  map (fn) {
    // this.fork(()=>{}), R.compose(()=>{}, fn);
    return new Task((reject_, resolve) => this.fork(reject_, R.compose(resolve, fn)));
  }

  // ----- Applicative (Task a)
  ap (f) {
    return this.chain(fn => f.map(fn));
  }

  // ----- Monad (Task a)
  chain (fn) {
    return new Task((reject_, resolve) => this.fork(reject_, x => fn(x).fork(reject_, resolve)));
  }

  join () {
    return this.chain(identity);
  }
}

const trace = R.curry(function (tag = 'after xxxx', x) {
  console.log(tag, x);
  return x;
});

//  readFile :: String -> Task(Error, JSON)
var readFile = function (filename) {
  return new Task(function (reject, result) {
    return fs.readFile(filename, 'utf-8', function (err, data) {
      err ? reject(err) : result(data);
    });
  });
};


var value = readFile("metamorphosis.txt").map(R.split('\n')).map(R.head)

value.fork(
  function (error) {
    console.log(66, error);
  },
  function (data) {
    console.log(79, data)
  })
