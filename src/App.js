import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Selfie from './app/assets/img/selfie.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar color="info" sticky="top" expand="lg" >
        <Container>
          <NavbarBrand href="/">
            <img src={Selfie} alt="nucamp logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      This is my story
    </div>
  );
}

export default App;
