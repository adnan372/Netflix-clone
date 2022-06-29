import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import testReducer from "./testReducer";
import movieLisit from "./movieList";


export default history =>
  combineReducers({
    router: connectRouter(history),
    testReducer,
    movieLisit,
    // movies: testReducer
  });
