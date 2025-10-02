import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./services";

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default App;
