export default function repositories(state = [], action) {
  switch (action.type) {
    case 'ADD_REPOSITORIES':
      return action.payload.map(repo => {
        repo.node.isFav = false;
        return repo;
      });
    case 'UPDATE_REPOSITORY':
      state.map(repo => {
        if (repo.node.id === action.payload.id) {
          repo.node.isFav = action.payload.fav;
        }
        return repo;
      });
      return state;
    default:
      return state;
  }
}
