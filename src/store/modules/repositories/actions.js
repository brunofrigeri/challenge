export function addRepositories(repositories) {
  return {
    type: 'ADD_REPOSITORIES',
    payload: repositories,
  };
}
