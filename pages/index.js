import { Box, ScaleFade } from "@chakra-ui/react";
import About from "../components/About";
import Blog from "../components/Blog";
import CalendarComp from "../components/Calendar";
import Destination from "../components/Destination";
import Footer from "../components/footer";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonal from "../components/Testimonal";
import UpcomingTrek from "../components/UpcomingTrek";
import Whytrekking from "../components/whytrekking";

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
        <Whytrekking />
        <Gallery />
        <Testimonal />
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
