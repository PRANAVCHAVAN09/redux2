const reducer = (state = null, action) => {
  switch (action.type) {
    case "getData":
      return {
        type: action.type,
        data: action.data,
      };
    default:
      return { state: null };
  }
};
export default reducer;
