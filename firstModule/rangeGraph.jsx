import React from 'react';

import { range } from './rangeUtils.jsx';

function Graph({ from, to }) {
  return (
    <div className="graph">
      {range(from, to, 10).map((peg_value) => {
        return <div key={peg_value} className="peg">{peg_value}</div>;
      })}
    </div>
  );
}

export default Graph; 