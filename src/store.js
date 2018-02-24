import React from 'react'

const Store = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="storeCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <a href="http://zackadams.limitedrun.com/products/609130-down-the-line-12-vinyl" target="_blank" rel="noopener noreferrer"> */}
                <img className="d-block w-50 h-50" src={require("./images/down_the_line_album_cover.jpg")} alt="First slide" />
                Pre-order Down the Line
              {/* </a> */}
            </div>
            <div className="carousel-item">
              {/* <a href="http://zackadams.limitedrun.com/products/609130-down-the-line-12-vinyl" target="_blank" rel="noopener noreferrer"> */}
                <img className="d-block w-50 h-50" src={require("./images/forethought_album_cover.jpg")} alt="Second slide" />
                Forethought EP
              {/* </a> */}
            </div>
          </div>
          <a className="carousel-control-prev" href="#storeCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#storeCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Store