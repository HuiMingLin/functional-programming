var id = function (x) {
  return x;
}

const trace = R.curry(function (tag = 'after xxxx', x) {
  console.log(tag, x);
  return x;
});

//  getAge :: Date -> User -> sanctuaryEither(String, Number)
var getAge = R.curry(function (now, user) {
  var birthdate = moment(user.birthdate, 'YYYY-MM-DD');
  if (!birthdate.isValid()) return sanctuaryEither.Left("Birth date could not be parsed");
  return sanctuaryEither.Right(now.diff(birthdate, 'years'));
});


//  sanctuaryEither :: (a -> c) -> (b -> c) -> sanctuaryEither a b -> c
var either = R.curry(function (f, g, e) {

  const isLeft = e.isLeft
  const isRight = e.isRight

  if (isLeft) {
    return f(e.value);
  } else if (isRight) {
    return g(e.value);
  }
});

var fortune = R.compose(R.concat("If you survive, you will be "), R.toString, R.add(1));

//  zoltar :: User -> _
var zoltar = R.compose(console.log, either(id, fortune), getAge(moment()));

zoltar({ birthdate: '2005-12-12' });
// "If you survive, you will be 10"
// undefined

zoltar({ birthdate: 'balloons!' });
// "Birth date could not be parsed"
// undefined

console.log(sanctuaryEither);