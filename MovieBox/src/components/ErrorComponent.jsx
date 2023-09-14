// import React from 'react'
import ErrorImg from '../assets/images/404.png';








function ErrorComponent() {
    const posterStyle = {
        maxWidth: "100%",
        height: "auto",
      };


  return (
    <div className='error-message'>
    <img src={ErrorImg} alt='Error' style={posterStyle}/>
    <p>Error loading movies</p>
    </div>
  )
}

export default ErrorComponent;