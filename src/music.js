import React from 'react'

const Music = () => {
  return (
    <div id="#music">
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{textAlign: "center"}}>
            <img className="d-block w-100" src={require("./images/down_the_line_album_cover.jpg")} alt="First" />
          </div>
          <div className="col-md-6">
            <h2>Down the Line</h2>
            A new album from Zack Adams.<br />
            <br />
            Now available for preorder on Vinyl, Compact Disc, and high bitrate Digital Download at
            Zack's Limited Run store.<br /><br />
            Tracklist:<br />
            <h6>1. American Joke</h6>
            <h6>2. Got My Story Straight</h6>
            <h6>3. Run Out of this Town</h6>
            <h6>4. Poor Boy Blues</h6>
            <h6>5. Magic Beans</h6>
            <h6>6. Down the Line</h6>
            <h6>7. Beachcomber</h6>
            <h6>8. So Much to Lose</h6>
            <h6>9. Can't Hide My Delight</h6><br />
            <h4>Preorder Soon</h4>
            {/* <a href="http://zackadams.limitedrun.com/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-success">Preorder Now</button></a><br /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music