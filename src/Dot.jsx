import React, { Component } from "react";
import * as d3 from "d3";

class Dot extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props);
  }

  componentWillReceiveProps(props) {
    // copy props to state
  }

  flash() {
    let node = d3.select(this.refs.circle),
      R = this.state.r * 4;

    this.setState({ colorize: true });

    node
      .transition()
      .attr("r", R)
      .duration(250)
      .ease(d3.easeCubicOut)
      .transition()
      .attr("r", R / 3.5)
      .duration(250)
      .ease(d3.easeCubicOut)
      .on("end", () =>
        this.setState({
          colorize: false,
          r: R / 3.5
        })
      );
  }

  get color() {
    const { x, y, maxPos } = this.state;

    const t = d3
      .scaleLinear()
      .domain([0, 1.2 * maxPos ** 2])
      .range([0, 1]);

    return d3.interpolateWarm(t(x ** 2 + y ** 2));
  }

  render() {
    const { x, y, r, colorize } = this.state;

    return (
      <circle
        cx={x}
        cy={y}
        r={r}
        ref="circle"
        onMouseOver={this.flash.bind(this)}
        style={{ fill: colorize ? this.color : this.color }}
      />
    );
  }
}

export default Dot;
