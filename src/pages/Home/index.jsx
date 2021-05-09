import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import Banner from "./Banner";
import UpcommingEvents from "./UpcomingEvents";
import { HomeWrapper } from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Cards />
      <Banner />
      <UpcommingEvents />
    </HomeWrapper>
  );
};

export default Home;
