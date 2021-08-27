import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <NavLink exact={true} id="logo" to="/">
          Captures
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink exact={true} activeClassName="active" to="/">
            1. About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/work">
            2. Our Work
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            3. Contact Us
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .active {
    font-weight: bold;
    color: #23d997;
  }
`;

export default Nav;
