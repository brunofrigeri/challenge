export function addFavorite(favorite) {
  return {
    type: 'ADD_FAVORITE',
    payload: favorite,
  };
}

export function removeFavorite(id) {
  return {
    type: 'REMOVE_FAVORITE',
    payload: id,
  };
}
