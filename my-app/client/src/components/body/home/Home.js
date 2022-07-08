import Sidebar from "./Sidebar";
import CardList from "./cardList";
import CarousalLanding from "./Carousal";
import Filler from "./Filler";
import CarouselFiller from "./carouselFiller";
import Featured from "./featured";

import React from "react";

function Home() {
  return (
    <div>
      <Sidebar />
      <CarousalLanding />
      <Featured />
      <CardList />
      <CarouselFiller />
      <Filler />
    </div>
  );
}

export default Home;
