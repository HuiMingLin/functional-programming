// showWelcome :: User -> String
const showWelcome = compose(append('Welcome '), prop('name'));

// validateUser :: (User -> Either String ()) -> User -> Either String User
const validateUser = curry((validate, user) => validate(user).map(_ => user));

// save :: User -> IO User
const save = user => new IO(() => ({ ...user, saved: true }));

const validateName = ({ name }) => (name.length > 3
  ? Either.of(null)
  : left('Your name need to be > 3')
);

const saveAndWelcome = compose(map(showWelcome), save);

const register = compose(
  either(IO.of, saveAndWelcome),
  validateUser(validateName),
);