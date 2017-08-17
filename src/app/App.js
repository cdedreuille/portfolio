import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../home/Home';
import ChristianLouboutin from '../projects/christian-louboutin/ChristianLouboutin';
import Institut from '../projects/institut/Institut';
import CocaCola from '../projects/coca-cola/CocaCola';
import LouboutinSpikes from '../projects/louboutin-spikes/LouboutinSpikes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/christian-louboutin" component={ChristianLouboutin}/>
          <Route path="/institut" component={Institut}/>
          <Route path="/coca-cola" component={CocaCola}/>
          <Route path="/louboutin-spikes" component={LouboutinSpikes}/>
        </div>
      </Router>
    );
  }
}

export default App;
