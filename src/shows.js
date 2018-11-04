import React from 'react'

let Shows = () => {
  return (
    <div id="#shows">
      <div className="container">
        <div className="col-md-10 offset-md-1">
          <h2>Shows</h2>
          <div className="row">
            <div className="col-md-4">
              29 August 2018<br />
              8:00PM
            </div>
            <div className="col-md-5">
              <a href="http://www.rockwoodmusichall.com" target="_blank" rel="noopener noreferrer">Rockwood Music Hall Stage 2</a><br />
            </div>
            <div className="col-md-3">
              <a role="button" href="http://www.rockwoodmusichall.com" className="btn btn-outline-success"><del>Tickets</del></a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              10 June 2018<br />
              10:00PM
            </div>
            <div className="col-md-5">
              <a href="http://www.rockwoodmusichall.com" target="_blank" rel="noopener noreferrer">Rockwood Music Hall Stage 2</a><br />
              (Solo Acoustic)
            </div>
            <div className="col-md-3">
              <a role="button" href="http://www.rockwoodmusichall.com" className="btn btn-outline-success">FREE</a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              5 June 2018<br />
              8:00PM
            </div>
            <div className="col-md-5">
              <a href="https://www.facebook.com/scenesmedia/videos/1813442392298905/" target="_blank" rel="noopener noreferrer">SCENES Facebook Live</a><br />
            </div>
            <div className="col-md-3">
              <a role="button" href="https://www.facebook.com/scenesmedia/videos/1813442392298905/" className="btn btn-outline-success">Online</a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              18 April 2018<br />
              8:15PM (Doors at 8:00PM)
            </div>
            <div className="col-md-5">
              <a href="http://www.rockwoodmusichall.com/" target="_blank" rel="noopener noreferrer">Rockwood Music Hall Stage 2</a><br />
              (Album Release Show)
            </div>
            <div className="col-md-3">
              <a role="button" href="https://www.ticketfly.com/event/1656934" className="btn btn-outline-success"><del>Tickets</del></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shows