const IO = require('fantasy-io')
const Maybe = require('sanctuary-maybe')
const R = require('ramda')

console.log(Maybe);

global.location = {
  href: 'http://localhost:8000/blog/posts?name=张三&age=2&sex=boy'
}

var url = new IO(function () { return global.location.href; });

//  toPairs =  String -> [[String]]
var toPairs = R.compose(R.map(R.split('=')), R.split('&'));

//  params :: String -> [[String]]
var params = R.compose(toPairs, R.last, R.split('?'));

//  findParam :: String -> IO Maybe [String]
var findParam = function (key) {
  return R.map(R.compose(R.filter(R.compose(R.equals(key), R.head)), params), url);
};

////// 非纯调用代码: main.js ///////

// 调用 __value() 来运行它！
const value = findParam("name").unsafePerform();
// Just(['name', '张三'])
console.log(Maybe.Just(value));