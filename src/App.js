import React from 'react'
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  )
}
const Container = styled.div`
  display:flex;
  flex-direction:column;
`;
export default App

