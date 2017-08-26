import React from 'react';

import './style/style.css';

import Header from './header';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
