import React from "react";
import VerticalStepper from "./components/VerticalStepper";
import Header from "./components/Header"; // Import the Header component

const App = () => {
  return (
    <div className="bg-[rgb(51,65,85)] min-h-screen">
      {/* Include the Header */}
      <Header />

      <div className="container mx-auto p-6">
        {/* VerticalStepper component */}
        <VerticalStepper />
      </div>
    </div>
  );
};

export default App;
