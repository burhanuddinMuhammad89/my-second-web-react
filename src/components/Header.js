import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Header(props) {
  return (
    <Navbar color="dark" dark fixed="top">
      <NavbarBrand>Ero Web</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink className="text-light nav-link">Home</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
