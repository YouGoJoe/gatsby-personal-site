import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const NavStyled = styled.div`
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: flex;
    justify-content: flex-start;
  }

  li {
    font-size: 1.2rem;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    &:visited {
      color: var(--primary);
    }
    &:hover {
      color: var(--accent);
    }
    &[aria-current="page"] {
      text-decoration: underline;
    }
  }
`

const Nav = () => (
  <NavStyled>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/Creative">Creative</Link>
      </li>
    </ul>
  </NavStyled>
)

export default Nav
