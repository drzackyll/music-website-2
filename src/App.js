import React, { Component } from 'react';
// import Store from './store'
// import Music from './music'
// import Menu from './menu'
// import About from './about'
// import Heading from './heading'
// import Contact from './contact'
// import Video from './video'
import Epk from './epk'
import Main from './main'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/epk" component={Epk}/>
      </Switch>
    );
  }
}

export default App;
