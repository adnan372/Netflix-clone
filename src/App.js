import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Navbar from './components/Navbar'
import Content from './components/Content'
import "bootstrap/dist/css/bootstrap.min.css"


import { getDataAPI, updateTestVal } from "./redux/actions/testActions";

const App = props => {
  const [movie, setMovie] = useState([]);
  const [name, setName] = useState("")
  const [search, setSearch] = useState([])
  const dispatch = useDispatch()

  // console.log(props.movieLisit)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);

    const search = movie.filter((u) => u.title === name)
    console.log(search)
    // setSearch(search)
    setMovie(search)
  }


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
      <center>
        <form onSubmit={submitHandler} >

          <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Search Movie here' className='p-2 ' />


          {/* <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Search Movies here" className='p-2 mt-3' /> */}
          <button className='srch  ' >SEARCH</button>
        </form>

      </center>
      {/* {console.log(props.movieLisit,"=====")} */}
      <div className="cardss">
        {(movie.length > 0 && !movie.loading) ? movie.map((elem, index) =>
          <Content key={index}
            img={elem.cover_url}
            title={elem.title}
            trailer_url={elem.trailer_url}
            overview={elem.overview}
          />
        ) : <h1>Loading.....</h1>}
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
