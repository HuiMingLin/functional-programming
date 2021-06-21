const trace = curry(function (tag = 'after xxxx', x) {
  console.log(tag, x);
  return x;
});

export default trace