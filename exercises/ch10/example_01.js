// ap 就是这样一种函数，
// 能够把一个 functor 的函数值应用到另一个 functor 的值上。

// applicative functor 是实现了 ap 方法的 pointed functor


var liftA2 = curry(function(f, functor1, functor2) {
  return functor1.map(f).ap(functor2);
});

var liftA3 = curry(function(f, functor1, functor2, functor3) {
  return functor1.map(f).ap(functor2).ap(functor3);
});


