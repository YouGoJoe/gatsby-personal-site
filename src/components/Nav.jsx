import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Hot NOw</Link>
      </li>
      <li>
        <Link to="/pizzas">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/orders">Order Ahead</Link>
      </li>
    </ul>
  </div>
);

export default Nav;