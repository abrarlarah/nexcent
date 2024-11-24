import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Clients from "./components/clients/clients";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import Blog from "./components/Blog/Blog";


import Footer from "./components/Footer/Footer";

import "./App.css";
import HeaderSection from "./components/HeaderSection";
import BlogSection from "./components/BlogSection/Blogsection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <Features />
      <Stats />
      <Blog />
      <HeaderSection/>
     <BlogSection />
      <Footer />
     
    </div>
  );
}

export default App;
