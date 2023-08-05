import { Box } from "@chakra-ui/react";
import { createClient } from "next-sanity";
import dynamic from "next/dynamic";
import FooterCounter from "../components/FooterCounter";
// import Videobox from "../components/Videobox";



const About = dynamic(() => import("../components/About"));
const Destination = dynamic(() => import("../components/Destination"));
const Footer = dynamic(() => import("../components/footer"));
const Gallery = dynamic(() => import("../components/Gallery"));
const Home = dynamic(() => import("../components/Home"));
const Navbar = dynamic(() => import("../components/Navbar"));
const Services = dynamic(() => import("../components/Services"));
const Testimonial = dynamic(() => import("../components/Testimonal"));
const UpcomingTrek = dynamic(() => import("../components/UpcomingTrek"));
const Vlog = dynamic(() => import("../components/Vlog"));
const Whytrekking = dynamic(() => import("../components/whytrekking"));


export async function getServerSideProps(context) {
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
      "image": image.asset->url,
      "video": video.asset->url,
    }`;

  const testimonialQuery = `*[_type == "testimonial"]{
      ..., 
      "event":event->name,
      "image": image.asset->url
    }`;

  const settingsQuery = `*[_type == "settings"]{
    ..., 
    "logo": logo.asset->url
  }`;

  const gallery = await client.fetch(galleryQuery);
  const destination = await client.fetch(destinationQuery);
  const event = await client.fetch(eventQuery);
  const vlog = await client.fetch(vlogQuery);
  const testimonial = await client.fetch(testimonialQuery);
  const settings = await client.fetch(settingsQuery);

  return {
    props: {
      gallery,
      destination,
      event,
      vlog,
      testimonial,
      settings,
    },
  };
}


const index = ({
  gallery,
  destination,
  testimonial,
  settings,
}) => {
  return (
    <>
      <Box p="0" m="0" overflow="hidden" position="relative">
        <Navbar settings={settings[0]} logo={'./images/logowhite.png'}/>
         <Home />
        <About />
        <Destination destination={destination} />
        <Services />
        <Whytrekking settings={settings[0]} />
        <Gallery gallery={gallery} />
        <Testimonial testimonial={testimonial} />
        <FooterCounter settings={settings[0]} />
        <Footer settings={settings[0]} /> 
      
      </Box>
    </>
  );
};

export default index;
