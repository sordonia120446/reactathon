import React, { Component } from "react";
import * as d3 from "d3";
import Ball from './Ball';

class BouncingBall extends Component {
  constructor() {
    super();

    this.state = {
      x: 10,
      vx: 5,
      y: 5,
      vy: 5
    };
  }

  componentDidMount() {
    // start game loop
    this.timer = d3.timer(this.gameLoop.bind(this));
  }

  componentWillUnmount() {
    // stop loop
    this.timer.stop();
  }

  gameLoop() {
    // move ball by vy
    // increase vy to accelerate
    if (this.state.y > this.props.max_h) {
      this.setState((prevState, props) => {
        return {
          // vx: -1*prevState.vx,
          vy: -1*prevState.vy,
        }
      });
    }
    this.setState((prevState, props) => {
      return {
        // x: prevState.x + prevState.vx,
        y: prevState.y + prevState.vy
      }
    });
  }

  render() {
    // render Ball at position y
    return (
      <g>
        <Ball
          x={this.state.x}
          y={this.state.y}
        />
      </g>
    );
  }
}

export default BouncingBall;
