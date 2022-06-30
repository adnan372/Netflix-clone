import React from 'react'

const Loader = () => {
  return (
    <>
    <div style={{width:"200px" , height:"200px" , marginTop:"200px" }}  className="spinner-border text-danger  " role="status">
      {/* <span className="sr-only">Loading...</span> */}
    </div>
    </>
  )
}

export default Loader