import axios from 'axios'


export const updateTestVal = newVal => dispatch => {
  dispatch({
    type: "UPDATE_TEST",
    payload: newVal
  });
};

export const getDataAPI =()=> dispatch => {
    try {
      dispatch({
        type:'LOADING',
        payload:true
      })
      console.log("API called")
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

