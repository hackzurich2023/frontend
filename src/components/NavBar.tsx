import React from "react";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import { User } from "data/user";

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
    <div>
      <FontAwesomeIcon icon={faUser} /> {user.userName}
    </div>
  );
}

export function NavBar({ currentUser }: { currentUser?: User }) {
  return (
    <Navbar
      expand="lg"
      className="bg-light navbar-light position-fixed w-100 z-1"
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
