import React from 'react'

const Music = () => {
  return (
    <div id="#music">
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1" style={{textAlign: "center"}}>
            <img className="d-block w-100" src={require("./images/down_the_line_album_cover.jpg")} alt="First" />
          </div>
          <div className="col-md-5">
            <h2>Down the Line</h2>
            A new album from Zack Adams now available for preorder on Vinyl, Compact Disc, and high bitrate Digital Download at
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
            <h6>9. Can't Hide My Delight</h6>
            <a href="http://zackadams.limitedrun.com/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-success">Preorder Now</button></a><br /><br />
            {/* <a href="https://itunes.apple.com/us/album/down-the-line/1353729227" rel="noopener noreferrer" target="_blank"><img style={{width: "22%"}} src={require("./images/itunes-preorder.png")}  alt="Preorder on iTunes" /></a> */}
            {/* <a href="https://www.amazon.com/Down-Line-Zack-Adams/dp/B07B4SM245/ref=sr_1_2?s=dmusic&ie=UTF8&qid=1520306794&sr=1-2-mp3-albums-bar-strip-0&keywords=Zack+Adams" rel="noopener noreferrer" target="_blank"><img style={{width: "22%", height: "7%"}} src={require("./images/amazon-preorder.png")}  alt="Preorder on Amazon" /></a><br /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music