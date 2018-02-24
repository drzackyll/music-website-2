import React from 'react'
import $ from 'jquery'
import '../src/bootstrap/css/bootstrap.css'

let headingStyle = {
  maxWidth: "100%",
  width: "auto",
  objectFit: "cover",
  objectPosition: "90% 50%",
  height: "100vh",
  textAlign: "center"
}

let Heading = () => {
  $(window).scroll(function(){
    $(".photo").css("opacity", 1 - $(window).scrollTop() / 375);
  });
  return (
    <div className="photo">
      <img className="img-fluid" style={headingStyle} src={require("./images/kite.jpg")} alt="Cover Shot" />
    </div>
  )
}

export default Heading