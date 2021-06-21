// filterQs :: [String] -> [String]
const filterQs = xs => filter(x => x.match(/q/i), xs);

const filterQs = filter(match(/q/i))