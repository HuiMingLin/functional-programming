const localStorage = {
  player1: { id: 1, name: 'Albert' },
  player2: { id: 2, name: 'Theresa' },
};

// getFromCache :: String -> IO User  
const getFromCache = x => new IO(() => localStorage[x]);

// game :: User -> User -> String  
const game = curry((p1, p2) => `${p1.name} vs ${p2.name}`);

// startGame :: IO String
const startGame = undefined;

const startGame = IO.of(game).ap(getFromCache('player1')).ap(getFromCache('player2'))