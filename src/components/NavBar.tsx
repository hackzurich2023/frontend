import React from "react";

import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { User } from "data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function MenuButton() {
  return (
    <>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">
            <ArrowRight /> Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

function UserAvatar({ user }: { user: User }) {
  return (
    <div className="text-white">
      <FontAwesomeIcon icon={faUser} /> {user.userName}
    </div>
  );
}

export function NavBar({ currentUser }: { currentUser?: User }) {
  return (
    <Navbar
      expand="lg"
      className="bg-dark navbar-dark position-fixed w-100 z-1"
    >
      <Container className="top-0">
        <Navbar.Brand as={Link} to="/">
          <Image height="60" src="/skiapp-transparent.png" alt="SkiApp" />
        </Navbar.Brand>
        {currentUser ? <UserAvatar user={currentUser} /> : <MenuButton />}
      </Container>
    </Navbar>
  );
}
