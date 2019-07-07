import React from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

import {ButtonContainer} from './Button';
class Navbar extends React.Component {
  render(){
      return(
      <NavWreapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link className="nav-link" to="/">
              Products
            </Link>
          </li>
        </ul>
        <Link className="ml-auto" to="/Cart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </ButtonContainer>
        </Link>
      </NavWreapper>
    );
  }
}

export default Navbar;

const NavWreapper=styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color:var(--mainWhite) !important;
    text-transform:capitalize;
    font-size:1.05rem;
  }
`