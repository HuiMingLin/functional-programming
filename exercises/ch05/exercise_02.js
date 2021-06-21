// averageDollarValue :: [Car] -> Int
const averageDollarValue = (cars) => {
  const dollarValues = map(c => c.dollar_value, cars);
  return average(dollarValues);
};

const average = xs => reduce(add, 0, xs) / xs.length;

const averageDollarValue = compose(average, map(prop('dollar_value')));