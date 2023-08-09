import React from 'react';
import Container from '../components/Container/Container';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
      </Container>
    </>
  );
}
