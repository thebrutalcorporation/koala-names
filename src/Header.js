import React from "react";
import { Link } from "react-router-dom";

const Header = ({ reset }) => (
  <h1>
    <Link onClick={() => reset()} to="/">
      Koala Names
    </Link>
  </h1>
);

export default Header;
