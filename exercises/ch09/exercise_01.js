const user = {
  id: 1,
  name: 'Albert',
  address: {
    street: {
      number: 22,
      name: 'Walnut St',
    },
  },
};

// getStreetName :: User -> Maybe String
const getStreetName = undefined;

const getStreetName = compose(chain(safeProp('name')), chain(safeProp('street')), safeProp('address'))