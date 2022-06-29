import React from 'react'
import './Content.css'

const Content = ({img ,cover_url, id , title , overview , trailer_url}) => {
  return (
    <div>
    <div className="card" style={{width: "20rem"}} key={id}>
  <img className="card-img-top" src={img} alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{overview}</p>
    <a href={trailer_url} className="btn btn-primary">WATCH NOW</a>
  </div>
</div>
    </div>
  )
}

export default Content