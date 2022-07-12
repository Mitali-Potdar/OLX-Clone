import Sidebar from "./Sidebar";
import CardList from "./cardList";
import CarousalLanding from "./Carousal";
import Filler from "./Filler";
import CarouselFiller from "./carouselFiller";
import Featured from "./featured";
import { useLocation } from "react-router-dom";

import React from "react";

function Home() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  return (
    <div>
      <Sidebar />
      <CarousalLanding />
      <Featured heading="Featured Products" />
      <CardList category={category} />
      <CarouselFiller />
      <Filler />
    </div>
  );
}

export default Home;
