export default function DashboardReducer(state = {
  items: []
}, action) {
  switch (action.type) {
    case 'LOAD_FOOD_ITEMS':
      {
        return Object.assign({}, state, {items: action.payload});
      }
    default:
      return state;
  }
}