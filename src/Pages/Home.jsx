import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { ProjectsShowcase } from "../components/Project";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProjectsShowcase />
      <Footer /> 
    </div>
  );
};

export default Home;
