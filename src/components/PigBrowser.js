import React, { Component } from "react";
import Pig from "./Pig"

class PigBrowser extends Component {
  
  render() {
    let hogs = this.props.pigs
    let renderPigs = this.props.onRenderPig
    return (
      
      <div className="ui cards">
        {hogs.map(hog => {
          return <Pig hog={hog} renderPigs={renderPigs} />
        })}
      </div>
    );
  }
}

export default PigBrowser;
