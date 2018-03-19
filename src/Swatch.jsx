import React from "react";

const Swatch = ({ color, height, width, x, y }) => (
  <rect width={width} height={height} x={x} y={y} style={{ fill: color }} />
);

export default Swatch;
