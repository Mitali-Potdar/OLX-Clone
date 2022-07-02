import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/body/Body";
import "./styles.css";
import { BrowserRouter as Router} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import CardList from "./components/cardList"
import CarousalLanding from "./components/Carousal";
import Filler from "./components/Filler";
import CarouselFiller from "./components/carouselFiller";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <Router>
      <Navbar />
      <Body />
      <Sidebar />
      <CarousalLanding />
      <CardList />
      <CarouselFiller />
      <Filler />
      <Footer />
      <ScrollButton />
    </Router>
  );
}

export default App;
