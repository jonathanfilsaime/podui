import React, { Component } from 'react';
import PodStatus from './Components/PodStatus'
import AddPod from './Components/AddPod'
import './semantic/dist/semantic.css'

class App extends Component {
  state = {
    numberOfPod: []
  }

  onAddPodClick = () => {
    console.log("got clicked mate")
    this.setState({numberOfPod : [...this.state.numberOfPod, <PodStatus/>]})
  }

  renderPod = () => {
      console.log(this.state.numberOfPod)
      return(this.state.numberOfPod);

  }

  render() {
    return (
      <div className="ui container">
          {this.renderPod()}
        <AddPod onClick={this.onAddPodClick}/>
      </div>
    );
  }
}

export default App;
