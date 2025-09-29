import React from "react";
import Hero from "./main";
import About from "./About";

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
    </div>
  );
};

export default App;
