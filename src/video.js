import React from 'react'
import '../src/bootstrap/css/bootstrap.css'

let Video = () => {
  return (
    <div id="#video" style={{paddingTop: "20px"}}>
      <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2" style={{textAlign: 'center'}}>
          <div>
            <h2 >Videos</h2>
              Coming soon!
            {/* <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" title="Beachcomber" width="640" height="360" src="https://www.youtube.com/embed/9PDa5F6GjkM?rel=0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Video