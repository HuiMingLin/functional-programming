// showWelcome :: User -> String
const showWelcome = compose(append('Welcome '), prop('name'));

// checkActive :: User -> Either String User
const checkActive = function checkActive(user) {
  return user.active
    ? Either.of(user)
    : left('Your account is not active');
};

const eitherWelcome = compose(map(showWelcome), checkActive);