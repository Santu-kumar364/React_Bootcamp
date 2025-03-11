import React from 'react';

const Header = ({ title = "Default Title" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

 

export default Header;
