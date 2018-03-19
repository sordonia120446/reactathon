import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

import './index.css';
// import App from './App';  // default react logo things
import Axis from './Axis';
import Barchart from './Barchart';
import Colors from './Colors';

// Override the default react logo things
const App = () => (
  <div>
    <svg width="800" height="600" id="svg1">
      <Barchart x={10} y={50} />
      <Axis x={50} y={450} />
    </svg>
    <svg width="800" height="400" id="svg2">
      <Colors x={10} y={0} data={d3.range(20)} height={200} width={300} />
    </svg>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
