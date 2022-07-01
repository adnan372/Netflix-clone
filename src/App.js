import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Navbar from './components/Navbar'
import Content from './components/Content'
import Loader from "./components/Loader";
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


import { getDataAPI, updateTestVal } from "./redux/actions/testActions";

const App = props => {
  const [movie, setMovie] = useState([]);
  // const [name, setName] = useState("")
  // const [search, setSearch] = useState([])
  const dispatch = useDispatch()

  // console.log(props.movieLisit)
  const startValue = new Date (new Date().getFullYear(), new Date().getMonth(), 14);
  const endValue = new Date (new Date().getFullYear(), new Date().getMonth() + 1 , 15);
  // const minDate = new Date (new Date().getFullYear(), new Date().getMonth(), 8);
  // const maxDate = new Date (new Date().getFullYear(), new Date().getMonth()+1, 20);


  
  // var text = (text ) ? "No data found" : "Loading" ; 
  
  const clearState = () => {
    setMovie(props.movieLisit.data);
  };

  const searchBox =(e) => {
    e.preventDefault();
    const search = movie.filter((u) => u.title.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(search);
    setMovie(search);

    //
  // if ( e.target.value.length > 4  && Object.keys(search).length < 1){
  //   props.text = "No data found"
  // } else {
  //   props.text = "Loading..."
  // }
//
    if ( e.target.value.length > 4  && Object.keys(search).length < 1){
       window.alert('No data')
    }

    if (e.target.value.length< 3){
      clearState();
    } 
    // if (e.target.value.toLowerCase() !== movie.title.toLowerCase()){
    //   window.alert("data not found")
    // }

    

  }
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name);
    // const search = movie.title.includes(name)
    // const search = movie.filter((u) => u.title === name)
    // console.log(search)
    // // setSearch(search)
    // setMovie(search);
    
    setTimeout(()=> {
      clearState();
    } , 1000)
    // setMovie(Movie)
  } ;
  


  
  
 
  


  useEffect(() => {
    console.log("=======")
    dispatch(getDataAPI());
  }, [dispatch])

  useEffect(() => {
    if (props.movieLisit.data) {

      setMovie(props.movieLisit.data)
      console.log(props.movieLisit.data)
    }
    ;
  }, [props.movieLisit.data])

  return (
    <>
      <Navbar />
      <center >
              <DateRangePickerComponent placeholder="Enter Date Range"
              startDate={startValue}
              endDate={endValue}
              format="yyyy-mm-dd">
              onSelect={(e)=>console.log(e,"====")}
              </DateRangePickerComponent>

        <form onSubmit={submitHandler} >
        {/* <form  > */}

          <input onChange={searchBox} type="text" placeholder='Search Movie here' className='p-2 px-5 mt-3  inpux' />


          {/* <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Search Movies here" className='p-2 mt-3' /> */}
          <button className='srch  rounded-end ' >SEARCH</button>
        </form>

      </center>
      {/* {console.log(props.movieLisit,"=====")} */}
      <div className="cardss">
        {(movie.length > 0 && !movie.loading) ? movie.map((elem, index) =>
          <Content key={index}
            img={elem.cover_url}
            title={elem.title}
            directed_by={elem.directed_by}
            release_date={elem.release_date}
            trailer_url={elem.trailer_url}
            overview={elem.overview}
          />
        ) :
        
        <Loader/>
        // <h1 style={{color:"white" , paddingBottom:"500px"}}>Loading.. !</h1>
        // <h1 style={{color:"white" , paddingBottom:"500px"}}>{props.text}</h1>

      }
      </div>

    </>

  );
};

const mapStateToProps = state => ({
  testVal: state.testReducer.testVal,
  movieLisit: state.movieLisit
});

export default connect(
  mapStateToProps,
  {
    updateTestVal
  }
)(App);
