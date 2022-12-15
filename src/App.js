import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Get } from "./components/Get";
import { Post } from "./components/Post";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/Get">Get</Link>
          </NavItem>
          <NavItem>
            <Link to="/Post">Post</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Get" element={<Get />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
