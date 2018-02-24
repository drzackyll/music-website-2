import React, { Component } from 'react';
import Music from './music'
import Menu from './menu'
import About from './about'
import Heading from './heading'
import Contact from './contact'
import Video from './video'
// import Epk from './epk'
import '../src/bootstrap/css/bootstrap.css'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Heading />
        <Contact id="contact" /><br /><br />
        <Music id="music" /> <br />
        <Video id="video" /> <br />
        <About id="about" /> <br />
        <footer style={{textAlign: 'center'}}>&copy; {(new Date().getFullYear())} Zack Adams</footer>
      </div>
    );
  }
}

export default Main;
