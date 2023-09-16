import React from "react";
import { NavBar } from "components/NavBar";
import {Container, Image} from 'react-bootstrap';

export function Home() {
  return (
    <>
      <NavBar />
      <Container className="px-lg-5">
        <Container className='p-4 p-lg-5 bg-light rounded-3'>
          <Container className='text-center'>
            <Image width="100%" src="/skiapp-transparent.png"/>
          </Container>
          <Container className='text-center'>
            <p className="fs-4">
              Your sustainable one stop access to your favourite ski resorts
            </p>

            <p>Select your preferred date: <input type="date" /></p>
          </Container>
        </Container>
      </Container>
    </>
  );
}
