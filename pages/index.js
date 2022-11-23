import { Box, Button, Image, keyframes, Avatar } from "@chakra-ui/react";
import About from "../components/About";
import Vlog from "../components/Vlog";
import CalendarComp from "../components/Calendar";
import Destination from "../components/Destination";
import Footer from "../components/footer";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WithSpeechBubbles from "../components/Testimonal";
import UpcomingTrek from "../components/UpcomingTrek";
import Whytrekking from "../components/whytrekking";
import { createClient } from "next-sanity";

export async function getStaticProps(context) {
  const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    useCdn: false,
  });

  const galleryQuery = `*[_type == "gallery"]{
    "images": images[].asset->url
   }`;

  const destinationQuery = `*[_type == "destinations"]{
     ..., 
     "thumbnail":thumbnail.asset->url,
     images[]{"img_url": asset->url}
    }`;

  const eventQuery = `*[_type == "events"]{
      ..., 
      images[]{"img_url": asset->url}
    }`;

  const vlogQuery = `*[_type == "vlog"]{
      ..., 
      "image": image.asset->url
    }`;

  const testimonialQuery = `*[_type == "testimonial"]{
      ..., 
      "event":event->name,
      "image": image.asset->url
    }`;

  const gallery = await client.fetch(galleryQuery);
  const destination = await client.fetch(destinationQuery);
  const event = await client.fetch(eventQuery);
  const vlog = await client.fetch(vlogQuery);
  const testimonial = await client.fetch(testimonialQuery);

  return {
    props: {
      gallery,
      destination,
      event,
      vlog,
      testimonial,
    },
  };
}

const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

const index = ({ gallery, destination, event, vlog, testimonial }) => {
  console.log(testimonial, "---testimonial");
  return (
    <>
      <Box p="0" m="0" overflow="hidden" position="relative">
        <Navbar />
        <Home />
        <UpcomingTrek event={event} />
        <About />
        <Destination destination={destination} />
        <Services />
        <Whytrekking />
        <Gallery gallery={gallery} />
        <WithSpeechBubbles testimonial={testimonial} />
        <Vlog vlog={vlog} />
        <Footer />
        {/* <CalendarComp event={event} /> */}
        <Box position="fixed" left="5" bottom="5" zIndex="100" cursor="pointer">
          <a
            href="https://wa.me/918080463271?text=Hello There"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <Image
              alt="Chat on WhatsApp"
              src="/images/whatsapp.png"
              className="btn-whatsapp-pulse"
            />
          </a>
        </Box>
        {/* <Box
          position="fixed"
          left="10"
          bottom="10"
          w="70px"
          h="70px"
          _before={{
            content: "''",
            position: "relative",
            display: "block",
            width: "300%",
            height: "300%",
            boxSizing: "border-box",
            marginLeft: "-100%",
            marginTop: "-75%",
            borderRadius: "50%",
            bgColor: "green",
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
          }}
        >
          <Image
            alt="Chat on WhatsApp"
            src="/images/whatsapp.png"
            className="btn-whatsapp-pulse"
            position="absolute"
            top="0"
          />
        </Box> */}
      </Box>
    </>
  );
};

export default index;
