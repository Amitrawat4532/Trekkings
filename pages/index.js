import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Destination from "../components/Destination";
import Videobox from "../components/videobox";
import Whytrekking from "../components/whytrekking";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonal from "../components/Testimonal";
import Blog from "../components/Blog";
import { Box } from "@chakra-ui/react";

const index = () => {
  return (
    <>
      <Box p="0" m="0" overflowY="hidden">
        <Navbar />
        <Home />
        <About />
        <Destination />
        <Services />
        <Videobox />
        <Whytrekking />
        <Gallery />
        <Testimonal />
        <Blog />
      </Box>
    </>
  );
};

export default index;
