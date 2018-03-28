import React from 'react'
import jQuery from 'jquery'
import '../src/bootstrap/css/bootstrap.css'
import '../src/bootstrap/js/bootstrap.js'

(function ($) {
  $(document).ready(function(){
    $(".navbar").hide();
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
      });
    });
  });
}(jQuery));

let Menu = () => {
  let topFunction = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  let scrollFunction = (section) => {
    document.getElementById(`${section.target.attributes[1].value}`).scrollIntoView({
      behavior: 'smooth'
    })
  }
  
  return (
    <nav className="navbar navbar-toggleable-md navbar-expand-lg fixed-top navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="http://www.zackadamsmusic.com">Zack Adams</a>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active" onClick={topFunction}>
            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item" onClick={scrollFunction}>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item" onClick={scrollFunction}>
            <a className="nav-link" href="#music">Music</a>
          </li>
          <li className="nav-item" onClick={scrollFunction}>
            <a className="nav-link" href="#video">Video</a>
          </li>
          <li className="nav-item" onClick={scrollFunction}>
            <a className="nav-link" href="#shows">Shows</a>
          </li>
          <li className="nav-item" onClick={scrollFunction}>
            <a className="nav-link" href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu