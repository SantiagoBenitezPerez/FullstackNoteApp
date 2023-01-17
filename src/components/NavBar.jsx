import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  const padding = { padding: 1 }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand style={{ marginLeft: '8px' }} href="#">
        Note List Application
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          style={{ width: '100%', display: 'flex', justifyContent: 'end' }}
          className="me-auto"
        >
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/">
              <Button variant="dark">Home</Button>
            </Link>
          </Nav.Link>

          <Nav.Link href="#" as="span">
            <Link style={padding} to="/notes">
              <Button variant="dark">Notes</Button>
            </Link>
          </Nav.Link>

          <Nav.Link href="#" as="span">
            {user ? (
              <>
                <em>{user.name} logged in</em>
                <Link style={padding} to="/">
                  <Button variant="light" onClick={handleLogout}>
                    log out
                  </Button>
                </Link>
              </>
            ) : (
              <Link style={padding} to="/login">
                <Button variant="dark">Login</Button>
              </Link>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
