export function addRepositories(repositories) {
  return {
    type: 'ADD_REPOSITORIES',
    payload: repositories,
  };
}

export function updateRepository(id, fav) {
  return {
    type: 'UPDATE_REPOSITORY',
    payload: {id, fav},
  };
}
