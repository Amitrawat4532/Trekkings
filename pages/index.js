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

const index = () => {
  return (
    <>
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
    </>
  );
};

export default index;
