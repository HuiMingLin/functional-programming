// max :: [Number] -> Number
const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
const keepHighest = (x, y) => (x >= y ? x : y);

const max = reduce(keepHighest, -Infinity)