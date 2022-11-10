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
import { Box, Fade, ScaleFade } from "@chakra-ui/react";
import Footer from "../components/footer";
import UpcomingTrek from "../components/UpcomingTrek";
import CalendarComp from "../components/Calendar";
import { useState, useEffect } from "react";
import StartLoader from "../components/StartLoader";

const index = () => {
  const [startAnim, setStartAnim] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartAnim(false);
    }, 2000);
  }, []);

  return (
    <>
      <ScaleFade initialScale={0.9} in={startAnim}>
        <StartLoader />
      </ScaleFade>
      <Box
        p="0"
        m="0"
        overflow="hidden"
        position="relative"
        visibility={startAnim ? "hidden" : "visible"}
      >
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
