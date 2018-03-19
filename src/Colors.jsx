import React, { Component } from "react";
import Swatch from "./Swatch";
import * as d3 from "d3";

class Colors extends Component {
  colors = d3.schemeCategory20;
  width = d3.scaleBand().domain(d3.range(20));
  height = d3.scaleLinear();

  componentWillMount() {
    this.updateD3(this.props);
  }

  componentWillUpdate(newProps) {
    this.updateD3(newProps);
  }

  updateD3(props) {
    // this.width.range([10, props.width]);
    this.width.domain(props.data).range([10, props.width]);
    this.height.domain(d3.extent(props.data)).range([0, props.height]);
  }

  render() {
    const { data } = this.props;
    const { x, y } = this.props;
    return (
      <g transform={`translate(${x}, ${y})`}>
        {data.map(i => (
          <Swatch
            id={i}
            color={this.colors[i]}
            width={this.width.step()}
            height={this.height(i)}
            x={this.width(i)}
            y={200 - this.height(i)}
          />
        ))}
      </g>
    );
  }
}

export default Colors;
