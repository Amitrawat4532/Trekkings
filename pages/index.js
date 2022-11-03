import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Destination from "../components/Destination";
import Videobox from "../components/videobox";
import Whytrekking from "../components/whytrekking";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonal from "../components/Testimonal";
import Testimonal2 from "../components/Testimonial2";

import Blog from "../components/Blog";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import CalendarComp from "../components/Calendar";

const index = () => {
  return (
    <>
      <Box p="0" m="0" overflow="hidden">
        <Navbar />
        <Home />
        <CalendarComp />
        <About />
        <Destination />
        <Services />
        {/* <Videobox /> */}
        <Whytrekking />
        <Gallery />
        <Testimonal />
        {/* <Testimonal2 /> */}
        <Blog />
        <Footer />
      </Box>
    </>
  );
};

export default index;
