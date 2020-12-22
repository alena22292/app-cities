const selectedCityReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default selectedCityReducer;
