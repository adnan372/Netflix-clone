import axios from 'axios'


export const updateTestVal = newVal => dispatch => {
  dispatch({
    type: "UPDATE_TEST",
    payload: newVal
  });
};

// export const fetchAsyncMovie =  () => dispatch =>{
 
//   dispatch({
//     type:'LOADING',
//     payload:true 
//   })
//   console.log("searching data")
//   const data = axios.get('https://mcuapi.herokuapp.com/api/v1/movies')
//   const {myData} = data ;
//   const movie = myData.filter((u) => u.title === {name})
//   console.log(movies)
//   setMovies(movies)
//   };
  
// export const searchMovie = text => dispatch => {
//   dispatch({
//     type:'SEARCH_MOVIE',
//     payload : text
//   })
// }


export const getDataAPI =()=> dispatch => {
    try {
      dispatch({
        type:'LOADING',
        payload:true
      })
      console.log("api call------")
      axios.get('https://mcuapi.herokuapp.com/api/v1/movies').then(res => {
      dispatch({
        type:'GET_ALL_DATA',
        payload:res.data.data
      })
      dispatch({
        type:'LOADING',
        payload:false
      })
    }) 
    } catch (error) {
      console.log(error)
    }
   
};

