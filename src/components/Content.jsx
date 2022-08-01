import React from 'react'
import './Content.css'

const Content = ({img ,cover_url, id , release_date , title , overview , directed_by , trailer_url}) => {
  return (
    <div className='kard'>
    <div className="card" style={{width: "20rem"}} key={id}>
  <img className="card-img-top" src={img} alt="Card  cap"/>
  <div className="card-body">
    <p className='text-white'>Directed By: {directed_by}</p>
    <p className='text-white'>Released On : <strong>{release_date}</strong></p>
    <a href={trailer_url} className="btnx btn-primary">WATCH NOW</a>
  </div>
</div>
    </div>
  )
}

export default Content