import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  Button,
} from "reactstrap";

const NavbarReact = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">News Website</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="./home">Home </Link>
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Category
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink style={{ display: "flex" }}>
              <Input
                type="text"
                name=""
                id="search"
                placeholder="search country"
              />
              <Button type="button">Go</Button>
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
  );
};

export default NavbarReact;
