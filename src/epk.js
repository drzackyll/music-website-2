import React from 'react'
import '../src/bootstrap/css/bootstrap.css'

let Epk = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Zack Adams</h2>
          <h4>Electronic Press Kit</h4>
          <a href="#epk-music">About</a> | <a href="#epk-music">Music</a> | <a href="#epk-music">Photos</a> | <a href="#epk-music">Social</a> | <a href="#epk-music">Contact</a><br />
          <div id="epk-about" style={{paddingTop: "20px"}}>
            <h2>About <em>Down the Line</em></h2>
            <img className="d-block w-25" style={{float: "left", paddingRight: "10px"}} src={require("./images/down_the_line_album_cover.jpg")} alt="" />
            Zack Adams’ full-length debut, <em>Down the Line</em> is a highly personal examination of fathers and sons, listlessness and action, memories and prospects. Written during a time of political uncertainty, followed by Adams’ own impending fatherhood, <em>Down the Line</em> attempts to capture how a seismic event like childbirth can provide an opportunity for change. “When I found out I was going to be a dad, it shook me into reexamining how I approach a lot of things,” Adams says. “I had these songs I’d written in a particular state of mind; songs that showed some anger or hurt or anxiety. Then suddenly I was writing songs about my child-to-be and about my own boyhood.”<br /><br />
            Adams looked at these sets of songs as complementary. “I saw a sort of dividing line between them. I started to think about lines, lines that divide, lines that define, timelines.” The makings of an album, a complete statement, began to take shape.<br /><br />
            Adams crafted everything himself, spending countless hours writing and recording as his wife’s pregnancy developed. The baby was born and Adams was forced to put off his recording sessions until late at night, when everyone was asleep. “We were staying with my mother-in-law and I set up shop in a basement closet that houses luggage.”<br /><br />
            Adams’ previous work, an EP called <em>Forethought</em> was his first foray into writing, recording, and producing himself. “I really appreciated having had that experience because it really taught me some lessons about how to tackle a project like this. Of course, this new LP was a whole new level, but I’d probably have lost my mind otherwise.”<br /><br />
            “Everybody has things from their past or present that weigh on them in some way,” Adams says.  “I hope people can find some value in this album, in the glimmer of hope it sees in the future.”<br /><br />
          </div>
        </div>
      </div>
      <div id="epk-music" style={{paddingTop: "20px"}}>
        <h2 className="col-md-8 offset-md-2">Music</h2>
        <div className="row">
          <div className="col-md-4 offset-md-2" style={{textAlign: "center"}}>
            Down the Line (Pre-release Playlist)<br />
            <iframe title="Down the Line" width="300" height="380" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/437208618%3Fsecret_token%3Ds-Vv6rA&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
          </div>
          <div className="col-md-4" style={{textAlign: "center"}}>
            Forethought<br />
            <iframe title="Forethought" src="https://open.spotify.com/embed/album/2FZmXJunK6q8gfNWsiBJNe" width="300" height="380" frameBorder="0" allowtransparency="true"></iframe>
          </div>
        </div>
      </div>
      <div id="epk-photos" style={{paddingTop: "20px"}}>
        <h2>Photos</h2>
        <div className="row">
          <div className="col-md-4 offset-md-2" style={{alignSelf: "flex-end"}}>
            <img style={{width: "100%"}} src={require("./images/zack_adams_epk_3_thumb.jpg")} alt="" />
            <a href="./images/zack_adams_epk_3_sm.jpg">Small</a> | <a href="./images/zack_adams_epk_3_med.jpg">Medium</a> | <a href="./images/zack_adams_epk_3.jpg">Large</a>
          </div>
          <div className="col-md-4" style={{alignSelf: "flex-end"}}>
            <img style={{width: "100%"}} src={require("./images/zack_adams_epk_4_thumb.jpg")} alt="" />
            <a href="./images/zack_adams_epk_4_sm.jpg">Small</a> | <a href="./images/zack_adams_epk_4_med.jpg">Medium</a> | <a href="./images/zack_adams_epk_4.jpg">Large</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <img style={{width: "100%"}} src={require("./images/zack_adams_epk_1_thumb.jpg")} alt="" />
            <a href="./images/zack_adams_epk_1_sm.jpg">Small</a> | <a href="./images/zack_adams_epk_1_med.jpg">Medium</a> | <a href="./images/zack_adams_epk_1.jpg">Large</a>
          </div>
          <div className="col-md-4">
            <img style={{width: "100%"}} src={require("./images/zack_adams_epk_2_thumb.jpg")} alt="" />
            <a href="./images/zack_adams_epk_2_sm.jpg">Small</a> | <a href="./images/zack_adams_epk_2_med.jpg">Medium</a> | <a href="./images/zack_adams_epk_2.jpg">Large</a>
          </div>
        </div>
      </div>
      <div id="epk-social" style={{paddingTop: "20px"}}>
        <h2>Social</h2>
        <div className="row">
          {/* <a href="https://twitter.com/zackadamsmusic?ref_src=twsrc%5Etfw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg></a> */}
          <div className="col-md-4"><a className="twitter-timeline" data-width="300" data-height="500" data-theme="dark" href="https://twitter.com/zackadamsmusic?ref_src=twsrc%5Etfw">Tweets by zackadamsmusic</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></div>
          <div className="col-md-4 fb-page" data-href="https://www.facebook.com/zackadamsmusic/" data-tabs="timeline" data-width="300" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/zackadamsmusic/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/zackadamsmusic/">Zack Adams</a></blockquote></div>
          {/* <a href="https://www.instagram.com/drzackyll/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.25 7.288v1.269c0 .297-.241.539-.538.539h-1.269c-.299 0-.538-.242-.538-.539v-1.269c0-.297.239-.538.538-.538h1.269c.297 0 .538.241.538.538zm-5.25 7.403c1.486 0 2.693-1.205 2.693-2.692s-1.207-2.69-2.693-2.69c-1.487 0-2.691 1.204-2.691 2.691s1.204 2.691 2.691 2.691zm4.261-3.291c.028.196.046.396.046.599 0 2.38-1.928 4.308-4.307 4.308s-4.307-1.928-4.307-4.307c0-.204.018-.403.046-.599.027-.194.066-.383.118-.567h-1.107v5.879c0 .297.241.538.538.538h9.424c.297 0 .538-.241.538-.538v-5.879h-1.107c.05.184.09.373.118.566zm7.739.6c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-5.385c0-.892-.723-1.615-1.615-1.615h-10.77c-.892 0-1.615.723-1.615 1.615v10.769c0 .893.723 1.616 1.615 1.616h10.77c.892 0 1.615-.723 1.615-1.616v-10.769z"/></svg></a><br /> */}
          <div className="col-md-4"><script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe title="Instagram" src="//lightwidget.com/widgets/fb277b438f6f5b4aab49c703df4f9d97.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width: "300px", height: "300px", border: "0"}}></iframe></div>
        </div>
      </div>
      <div id="epk-contact" style={{paddingTop: "20px"}}>
        <h2>Contact</h2>
        <a href="mailto:contact@zackadamsmusic.com">contact@zackadamsmusic.com</a><br />
      </div>
      <footer style={{textAlign: 'center'}}>&copy; {(new Date().getFullYear())} Zack Adams</footer>
    </div>
  )
}

export default Epk