const user = { id: 2, name: 'Albert', active: true };

// initial :: User -> Maybe String
const initial = undefined;

const initial = compose(map(head), (safeProp('name')))