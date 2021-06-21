// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
const safeAdd = undefined;

const safeAdd = curry((a, b) => Maybe.of(add).ap(a).ap(b))