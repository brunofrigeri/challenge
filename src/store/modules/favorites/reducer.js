export default function favorites(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter(fav => action.payload !== fav.id);
    default:
      return state;
  }
}
