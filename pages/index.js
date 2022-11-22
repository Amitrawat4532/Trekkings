import { Box, Button, Image } from "@chakra-ui/react";
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
        <Box position="fixed" left="5" bottom="5" zIndex="100" cursor="pointer">
          {/* <CalendarComp event={event} /> */}
          <a
            href="https://wa.me/8080463271?text=Hello There"
            target="_blank"
            aria-label="Chat on WhatsApp"
          >
            <Image
              alt="Chat on WhatsApp"
              src="/images/WhatsAppButtonGreenLarge.png"
              className="btn-whatsapp-pulse"
            />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default index;
