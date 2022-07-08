import Sidebar from "./Sidebar";
import CardList from "./cardList";
import CarousalLanding from "./Carousal";
import Filler from "./Filler";
import CarouselFiller from "./carouselFiller";

import React from "react";

function Home() {
  return (
    <div>
      <Sidebar />
      <CarousalLanding />
      <CardList />
      <CarouselFiller />
      <Filler />
    </div>
  );
}

export default Home;
