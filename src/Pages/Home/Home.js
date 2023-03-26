import React from "react";
import Banner from "./Banner/Banner";
import InfoCard from "./InfoCard/InfoCard";
import News from "./News/News";
import NewsCard from "./NewsCard/NewsCard";
// import InfoCards from "./InfoCards/InfoCards";
// import Services from "./Services/Services";
// import MainAppointment from "./Services/MainAppointment/MainAppointment";
// import Testimonial from "./Testimonial/Testimonial";
import UrgentCare from "./UrgentCare/UrgentCare";
import InfoCardTwo from "./InfoCardTwo/InfoCardTwo";

const Home = () => {
  return (
    <div>
      <div className="md:h-14 h-8 bg-green-800"></div>
      <div className="md:h-2 h-1 bg-blue-900"></div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-6  md:grid-cols-4 grid-cols-1">
        <div className="md:col-span-3 lg:col-span-4 shadow-xl">
          <div className="md:m-12">
            <UrgentCare></UrgentCare>
          </div>
          <div className="md:grid-cols-2 m-8 grid grid-cols-1 gap-12">
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mx-4">
            <InfoCard></InfoCard>
            <InfoCardTwo></InfoCardTwo>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <News></News>
        </div>
      </div>
      <div className="md:h-12 h-6 bg-pink-800"></div>
    </div>
  );
};

export default Home;
