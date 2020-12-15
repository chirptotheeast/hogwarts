import React, { Component } from "react";

export default class Pig extends Component {


    state = {
        showInfo: true
    }

    showDetail = () => {

    this.setState({
        showInfo: !this.state.showInfo
    })
    }



  render() {
    return (
    
      <div className='ui card'>
        <div className="image">
          <img src="/images/avatar2/large/kristy.png" />
        </div>
        <div className="content" onClick={() => this.showDetail()}>
          <a className="name">{this.props.hog.name}</a>
          <div className="toggle" hidden={this.state.showInfo}>
            <div className="meta">
              <span className="weight">Weight: {this.props.hog.weight} lbs</span>
            </div>
            <div className="medal">
              Highest Medal Achieved: {this.props.hog["highest medal achieved"]}
            </div>
          <div className="specialty">Specialty: {this.props.hog.specialty}</div>
          <div className="greased">
            Greased: {this.props.hog.greased.toString()}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
