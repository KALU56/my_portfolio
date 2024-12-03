import React from 'react';
import Header from './components/Header'; // Adjust the import path if needed
import Home from './components/Home';

const App = () => {
  return (
    <div className="bg-[rgb(51,65,85)] min-h-screen">
      <Header />
      <div className="container mx-auto p-6 mt-1"> {/* Adjusted margin-top to reduce space */}
        <Home />
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default App;
