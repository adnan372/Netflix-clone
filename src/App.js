import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Navbar from './components/Navbar'
import Content from './components/Content'
import Loader from "./components/Loader";
import filterFactory, {
  textFilter,
  customFilter
} from "react-bootstrap-table2-filter";
import 'bootstrap/dist/css/bootstrap.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
// import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


import { getDataAPI, updateTestVal } from "./redux/actions/testActions";

const App = props => {
  const [movie, setMovie] = useState([]);
  const [value, setValue] = useState("");
  const [filter , setFilter] = useState("")
  const dispatch = useDispatch()

  
  function handleEvent(event, picker){
    let fDate = picker.startDate._d ;
    let finalFdate = fDate.toISOString().split('T')[0]
    let lDate = picker.endDate._d;
    let finalLdate = lDate.toISOString().split('T')[0]
    let minMax = {
      min : finalFdate,
      max: finalLdate
    }
    console.log(minMax)
    // console.log("start date:" + finalFdate,"last date:" + finalLdate);
    
    let min = new Date(
      parseInt(minMax.min.substring(0, 4), 10),
      parseInt(minMax.min.substring(5, 7), 10) - 1,
      parseInt(minMax.min.substring(8, 10), 10)
    );
    let max = new Date(
      parseInt(minMax.max.substring(0, 4), 10),
      parseInt(minMax.max.substring(5, 7), 10) - 1,
      parseInt(minMax.max.substring(8, 10), 10)
    );
   
    const filteredData = movie.filter(
      (row) => {
    let datejs = new Date(
      parseInt(row.release_date.substring(0,4), 10),
      parseInt(row.release_date.substring(5,7), 10) -1 ,
      parseInt(row.release_date.substring(8,10), 10)
    );
      console.log(datejs);
      console.log(finalFdate)
      console.log(finalLdate)

      console.log(
        ((min && datejs >= min) || !minMax.min) && 
        ((max && datejs <= max ) || !minMax.max)
      );
  
      return (
        ((min && datejs >= min) || !minMax.min) &&
        ((max && datejs <= max) || !minMax.max)
      );
      }
    );
    console.log(filteredData)
    return filteredData
    
  }

//  const filterDate = (filtervals , data) => {
  
//   console.log(filtervals);
//   console.log(data);
//   let min = new Date(
//     parseInt(filtervals.min.substring(0,4),10),
//     parseInt(filtervals.min.substring(5,7),10) -1 ,
//     parseInt(filtervals.min.substring(8,10),10) 
//   );
//   let max = new Date(
//     parseInt(filtervals.max.substring(0,4),10),
//     parseInt(filtervals.max.substring(5,7),10),
//     parseInt(filtervals.max.substring(8,10),10),
  
//   );
  
//   console.log(filteredData,"===");
//  };

  
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
    
    

  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(()=> {
      clearState();
    } , 1000)
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
  }, [props.movieLisit.data]);

  // function handleEvent(event, picker){
  //   let fDate = picker.startDate._d ;
  //   let finalFdate = fDate.toISOString().split('T')[0]
  //   let lDate = picker.endDate._d;
  //   let finalLdate = lDate.toISOString().split('T')[0]
  //   console.log("start date:" + finalFdate,"last date:" + finalLdate);
    
  // }

  // function handleCallback(start, end, label){
  //   console.log(start, end, label);
  // }
 
  return (
    <>
      <Navbar />
      <center >
      {/* Date range picker */}
      <DateRangePicker initialSettings={{ startDate: '2002/02/05', endDate: '2009/01/30', locale:{format: 'YYYY/MM/DD'} }}  onApply={handleEvent} >
        <input />
      </DateRangePicker>
      {/* <button onApply={handleEvent} className="srch">FIND</button> */}
      {/*    */}
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
