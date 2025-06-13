// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Landing />
    </div>
  );
};

export default Home;
