import { useState } from 'react';
import './App.css';
import Header from './component/Header/'; // Adjust the path based on where Header.jsx is located
import Container from './component/Container/'; // Adjust the path based on where Container.jsx is located

function App() {
  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <Container />
    </>
  );
}

export default App;
