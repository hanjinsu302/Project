const initialState = true;

const isDataReducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return !state;
  }

  return state;
};

export default isDataReducer;
