const IO = require('fantasy-io')
const R = require('ramda')

console.log(global);

global.r_value = 1430
global.location = {
  href: 'http://localhost:8000/blog/posts'
}

//  io_global_ :: IO global
var io_global = new IO(function () { return global; });

var value_1 = io_global.map(function (global) { return global.r_value });
console.log(value_1.unsafePerform());
// IO(1430)

const value_2 = io_global.map(R.prop('location')).map(R.prop('href')).map(R.split('/'));
console.log(value_2.unsafePerform());
// IO(["http:", "", "localhost:8000", "blog", "posts"])


//  $ :: String -> IO [DOM]
var $ = function (selector) {
  return new IO(function () {
    return [{
      innerHTML: 'I am some inner html'
    }]
  });
}

const value_3 = $('#myDiv').map(R.head).map(function (div) { return div.innerHTML; });
console.log(value_3.unsafePerform());
// IO('I am some inner html')

console.log(IO);