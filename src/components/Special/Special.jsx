import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
  const angti = useContext(RingContext)
  return (
    <div>
      <h2>Special</h2>
      <p><small>ring: {ring}</small></p>
      <p><small>ring: {angti}</small></p>
    </div>
  );
};

export default Special;