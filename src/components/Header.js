import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 40px;
  text-align: center;
  color: black;
  `;

function Header(){
  return (
    <React.Fragment>
     <HelpQueueHeader>
          Help Queue
        </HelpQueueHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;