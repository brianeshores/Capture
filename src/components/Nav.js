import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Captures
        </Link>
      </h1>
      <ul>
        <li>
          <NavLink exact={true} activeClassName="active" to="/">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/work">
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact Us
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
  position: sticky;
  top: 0;
  z-index: 4;
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
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      padding: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100;
      li {
        padding: 0rem;
        a {
          padding: 1rem;
        }
      }
    }
  }
`;

export default Nav;
