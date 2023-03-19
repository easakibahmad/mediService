import React from "react";
import AboutService from "./AboutService/AboutService";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";
import MainAppointment from "./Services/MainAppointment/MainAppointment";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <AboutService></AboutService>
      <MainAppointment></MainAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
