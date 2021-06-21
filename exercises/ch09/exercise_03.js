// validateEmail :: Email -> Either String Email
// addToMailingList :: Email -> IO([Email])
// emailBlast :: [Email] -> IO ()

// joinMailingList :: Email -> Either String (IO ())
const joinMailingList = undefined;

const joinMailingList = compose(
  map(
    compose(chain(emailBlast), addToMailingList))
  ),
  validateEmail
)