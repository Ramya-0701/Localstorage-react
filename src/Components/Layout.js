import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/show">Show</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
