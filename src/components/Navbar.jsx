import React from 'react'
import './Navbar.css'

  const Navbar = () => {
    // const [name , setName] = useState("");
    
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(name);
    // }
  
    return (
      <>
      <div className="navbar ">
          <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <div className="btnRight">
          <button className='eng'> ENGLISH</button>
          <button className='sgn'>SIGN IN </button>
        </div>
      </div>
      </>
    )
  }
  export default Navbar
// }
// }