import React, { useState, useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Project";
import ContactUs from "./ContactUs";

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef([]); // To reference the section elements

  const steps = ["Home", "About", "Projects", "Contact"];
  const sections = [<Home />, <About />, <Projects />, <ContactUs />];

  // Update active step on scroll
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section when a dot is clicked
  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex">
      {/* Stepper */}
      <div className="flex flex-col items-center fixed top-1/4">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(index)}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Dot */}
            <div
              className={`h-6 w-6 rounded-full flex items-center justify-center text-white ${
                activeStep === index ? "bg-blue-500" : "bg-gray-500"
              }`}
            >
              {index + 1}
            </div>
            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div
                className={`w-1 h-16 ${
                  activeStep > index ? "bg-blue-500" : "bg-gray-500"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Section Content */}
      <div className="ml-16 flex-1">
        {sections.map((section, index) => (
          <div
            id={steps[index].toLowerCase()} // Set id for each section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex items-center justify-center"
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};


export default VerticalStepper;
