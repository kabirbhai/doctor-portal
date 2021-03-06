import React from "react";
import Contact from "./Contact";
import HomeBanner from "./HomeBanner";
import HomeInfo from "./HomeInfo";
import MakeAppointment from "./MakeAppointment";
import ServiceBanner from "./ServiceBanner";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeInfo />
      <Services />
      <ServiceBanner />
      <MakeAppointment />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
