import React from 'react';

const Friiend = ({ring}) => {
  return (
    <div>
      <h2>Friend</h2>
      {ring && <p><small>ring: {ring}</small></p>}
    </div>
  );
};

export default Friiend;