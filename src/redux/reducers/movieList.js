const initialState = {
    data: [],
    
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_DATA":
        return {
          ...state,
          data: action.payload
        };
        case "LOADING":
        return {
          ...state,
          loading: action.payload
        };
      default:
        return state;
    }
  };
  