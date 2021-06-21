// getFile :: () -> IO String
const getFile = () => IO.of('/home/mostly-adequate/ch09.md');

// pureLog :: String -> IO ()
const pureLog = str => new IO(() => console.log(str));

// logFilename :: IO ()
const logFilename = undefined;

const basename = compose(last, split('/'))
const logFilename = compose(chain(pureLog), map(basename))(getFile)