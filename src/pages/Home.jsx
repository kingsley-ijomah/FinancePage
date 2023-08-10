import React from 'react';
import Container from '../components/Container/Container';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Payment from '../components/Payment/Payment';
import Features from '../components/Features/Features';
import VirtualCard from '../components/VirtualCard/VirtualCard';
import Testimonials from '../components/Testimonials/Testimonials';
import TryApp from '../components/TryApp/TryApp';

export default function Home() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
      </Container>

      <Payment />

      <Container>
        <Features />
      </Container>

      <VirtualCard />
      <Testimonials />
      <TryApp />
    </>
  );
}
