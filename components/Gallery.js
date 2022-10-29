import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Image from "next/image";

const Gallery = () => {
  const gallery = [
    "/images/card1.png",

    "/images/card2.png",

    "/images/card3.png",

    "/images/card1.png",
  ];
  return (
    <>
      {/* header container */}
      <Flex width="100vw" height="100%">
        <Flex
          position="relative"
          width="100%"
          heigh="100px"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="galleryHeader1">JOURNEY</Text>

          <Text variant="galleryHeader2">GALLERY F THE TOURS</Text>
        </Flex>
      </Flex>
      {/* header container end */}

      {/* CArd container */}
      {/* <Flex
        backgroundColor="white"
        flexWrap="wrap"
        width="100%"
        justifyContent="space-evenly"
        // gap="0px"
      >
        {gallery.map((el, key) => {
          return (
            <Image
              key={key}
              src={el.image}
              width={["90%", "80%", "550px", "609px"]}
              my="10px"
              height="340px"
            />
          );
        })}
      </Flex> */}

      <Box w="100%" h="100%" my="5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          // centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {gallery.map((el) => {
            return (
              <SwiperSlide>
                <Image
                  width="500px"
                  height="400px"
                  src={el}
                  objectFit="contain"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};
export default Gallery;
