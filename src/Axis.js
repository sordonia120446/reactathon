import D3blackbox from "./D3blackbox";
import * as d3 from "d3";

const Axis = D3blackbox(function() {
  const scale = d3
    .scaleLinear()
    .domain([0, 400])
    .range([0, 600]);
  const axis = d3.axisBottom(scale);

  d3.select(this.refs.anchor).call(axis);
});

export default Axis;
