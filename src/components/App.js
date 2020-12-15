import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigBrowser from "./PigBrowser";
import Filter from "./Filter"

// import hogimages from "./hog-imgs"

class App extends Component {
  state = {
    pigs: hogs,
    // pigpics: [hogimages],
    filters: {
      type: "",
    },
    sort: "",
  };

  renderingGreasePig = () => {
    console.log('Ive been clicked')
  }


  getPigImages = (pigTitle) => {
      console.log(pigTitle)
    let changePigImage = pigTitle.replace(/[\s]/g, "_");    
    let pigImage = require(`../hog-imgs/${changePigImage}.jpg`); 
    return pigImage
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <div className="ui grid container">
          <div className="ui eight wide column">
            <PigBrowser
              pigs={this.state.pigs}
              pigpics={this.getPigImages}
              onRenderPig={this.onRenderPig}
            />
          </div>
          <div>
            <Filter renderingGreasePig={this.renderingGreasePig} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
