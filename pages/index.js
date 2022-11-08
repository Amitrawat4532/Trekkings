import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Destination from "../components/Destination";
import Whytrekking from "../components/whytrekking";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonal from "../components/Testimonal";
import Testimonal2 from "../components/Testimonial2";
import Blog from "../components/Blog";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import UpcomingTrek from "../components/UpcomingTrek";
import CalendarComp from "../components/Calendar";

const index = () => {
  return (
    <>
      <Box p="0" m="0" overflow="hidden" position="relative">
        <Navbar />
        <Home />
        <UpcomingTrek />
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
        <Box position="fixed" left="5" bottom="5" zIndex="100">
          <CalendarComp />
        </Box>
      </Box>
    </>
  );
};

export default index;
