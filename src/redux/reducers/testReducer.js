const initialState = {
  testVal: "Test",
  // text:'',
  // loading:false,
  // movie:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TEST":
      return {
        ...state,
        testVal: action.payload
      };
      // case "SEARCH_MOVIE" :
      // return {
      //   ...state,
      //   text: action.payload,
      //   loading:false
      // } 
      
    default:
      return state;
  }
};
