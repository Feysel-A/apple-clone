import React from 'react'
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={props.link}>
         {props.menu}
        </Link>
      </li>
    </>
  );
}

export default Nav
