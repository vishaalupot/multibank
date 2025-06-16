// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Products from "../components/Products";
import Final from "../components/Final";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Landing />
      <Products />
      <Final />
    </div>
  );
};

export default Home;
