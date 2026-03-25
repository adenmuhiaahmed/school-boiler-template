import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="mainNav">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle
              as="div"
              className="explore"
              id="dropdown-autoclose-true"
            >
              Explore
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item as={Link} to={"/downloads"}>
                Downloads
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/gallery"}>
                Gallery
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/pathways"}>
                Pathways
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/blogs"}>
                Blogs
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
