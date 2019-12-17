export default function repositories(state = [], action) {
  switch (action.type) {
    case 'ADD_REPOSITORIES':
      return action.payload;
    default:
      return state;
  }
}
