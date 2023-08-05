import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Box, Flex, Text } from "@chakra-ui/react";

const Testimonal = ({ testimonial }) => {
  return (
    <Flex bg="#210011" flexDirection="column">
      <Flex width="100%" flexDirection="column" alignItems="center" p="32px">
        <Text variant="whytrekkingHeader2">WHAT THEY SAY ABOUT US</Text>
        <Text variant="whytrekkingHeader1" mt={["0px", "0px", "20px", "20px"]}>
          TESTIMONIALS
        </Text>
      </Flex>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          width: "80%",
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <Flex className="swiper-button-prev" color="#591433" />
        {testimonial?.map((el, id) => {
          return (
            <SwiperSlide key={id}>
              <Flex
                maxWidth="838px"
                justifyContent="center"
                alignItems="center"
                gap={["0px", "58px", "58px", "58px"]}
                mt={["50px", "50px", "80px", "80px"]}
                mb={["86px", "86px", "128px", "128px"]}
                flexDirection={["column", "column", "row", "row"]}
              >
                <Box
                  borderRadius="100%"
                  overflow="hidden"
                  height={["200px", "300px", "230px", "230px"]}
                  width={["200px", "300px", "500px", "500px"]}
                  position="relative"
                >
                  <Image src={el?.image} layout="fill" alt="testimonal" />
                </Box>
                <Flex
                  flexDirection="column"
                  py="42px"
                  gap="30px"
                  justifyContent="center"
                  alignItems="start"
                >
                  <Text
                    color="white"
                    fontWeight="500"
                    lineHeight="35px"
                    fontSize={["20px", "20px", "30px", "30px"]}
                    fontFamily="Roboto"
                    textAlign={["center", "center", "start", "start"]}
                    w="100%"
                  >
                    {el?.name}
                  </Text>
                  <Text
                    color="white"
                    fontWeight="400"
                    lineHeight="23px"
                    fontSize={["16px", "16px", "20px", "20px"]}
                    fontFamily="Roboto"
                    textAlign={["center", "center", "start", "start"]}
                  >
                    {el?.description}
                  </Text>
                  <Flex
                    justifyContent={["center", "center", "start", "start"]}
                    w="100%"
                    gap="2"
                  >
                    {Array.from(Array(el?.rating)?.keys())?.map((el, id) => {
                      return (
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00033 14.2742L4.85033 16.7742C4.667 16.8909 4.47533 16.9409 4.27533 16.9242C4.07533 16.9076 3.90033 16.8409 3.75033 16.7242C3.60033 16.6076 3.48366 16.4616 3.40033 16.2862C3.317 16.1109 3.30033 15.9152 3.35033 15.6992L4.45033 10.9742L0.775329 7.79922C0.608662 7.64922 0.504662 7.47822 0.463329 7.28622C0.421996 7.09422 0.434329 6.90689 0.500329 6.72422C0.566996 6.54089 0.666995 6.39089 0.800329 6.27422C0.933662 6.15755 1.117 6.08255 1.35033 6.04922L6.20033 5.62422L8.07533 1.17422C8.15866 0.974219 8.288 0.824219 8.46333 0.724219C8.63866 0.624219 8.81766 0.574219 9.00033 0.574219C9.18366 0.574219 9.36266 0.624219 9.53733 0.724219C9.712 0.824219 9.84133 0.974219 9.92533 1.17422L11.8003 5.62422L16.6503 6.04922C16.8837 6.08255 17.067 6.15755 17.2003 6.27422C17.3337 6.39089 17.4337 6.54089 17.5003 6.72422C17.567 6.90755 17.5797 7.09522 17.5383 7.28722C17.497 7.47922 17.3927 7.64989 17.2253 7.79922L13.5503 10.9742L14.6503 15.6992C14.7003 15.9159 14.6837 16.1119 14.6003 16.2872C14.517 16.4626 14.4003 16.6082 14.2503 16.7242C14.1003 16.8409 13.9253 16.9076 13.7253 16.9242C13.5253 16.9409 13.3337 16.8909 13.1503 16.7742L9.00033 14.2742Z"
                            fill="white"
                          />
                        </svg>
                      );
                    })}
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
        <Flex className="swiper-button-next" color="#591433" />
      </Swiper>
    </Flex>
  );
};

export default Testimonal;
