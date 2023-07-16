import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Flex, Text } from "@chakra-ui/react";

const Testimonal = () => {
  const swiperData = [
    {
      images: "/images/testimonaltwo.png",
      name: "Oliver Morries",
      para: "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer.",
    },
    {
      images: "/images/testimonaltwo.png",
      name: "Rajesh Rawat",
      para: "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer.",
    },
    {
      images: "/images/testimonaltwo.png",
      name: "Rajesh Rawat",
      para: "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer.",
    },
    {
      images: "/images/testimonaltwo.png",
      name: "Rajesh Rawat",
      para: "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer.",
    },
    {
      images: "/images/testimonaltwo.png",
      name: "Rajesh Rawat",
      para: "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer.",
    },
    {
      images: "/images/testimonaltwo.png",
      name: "Rajesh Rawat",
      para: "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer.",
    },
    {
      images: "/images/testimonaltwo.png",
      name: "Oliver Morries",
      para: "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer.",
    },
  ];
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperData.map((el, id) => {
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
                  <Image src={el.images} layout="fill" alt="testimonal" />
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
                    {el.name}
                  </Text>
                  <Text
                    color="white"
                    fontWeight="400"
                    lineHeight="23px"
                    fontSize={["16px", "16px", "20px", "20px"]}
                    fontFamily="Roboto"
                    textAlign={["center", "center", "start", "start"]}
                  >
                    {el.para}
                  </Text>
                  <Flex
                    justifyContent={["center", "center", "start", "start"]}
                    w="100%"
                  >
                    <svg
                      width="160"
                      height="24"
                      viewBox="0 0 160 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0003 18.2742L7.85033 20.7742C7.667 20.8909 7.47533 20.9409 7.27533 20.9242C7.07533 20.9076 6.90033 20.8409 6.75033 20.7242C6.60033 20.6076 6.48366 20.4616 6.40033 20.2862C6.317 20.1109 6.30033 19.9152 6.35033 19.6992L7.45033 14.9742L3.77533 11.7992C3.60866 11.6492 3.50466 11.4782 3.46333 11.2862C3.422 11.0942 3.43433 10.9069 3.50033 10.7242C3.567 10.5409 3.667 10.3909 3.80033 10.2742C3.93366 10.1576 4.117 10.0826 4.35033 10.0492L9.20033 9.62422L11.0753 5.17422C11.1587 4.97422 11.288 4.82422 11.4633 4.72422C11.6387 4.62422 11.8177 4.57422 12.0003 4.57422C12.1837 4.57422 12.3627 4.62422 12.5373 4.72422C12.712 4.82422 12.8413 4.97422 12.9253 5.17422L14.8003 9.62422L19.6503 10.0492C19.8837 10.0826 20.067 10.1576 20.2003 10.2742C20.3337 10.3909 20.4337 10.5409 20.5003 10.7242C20.567 10.9076 20.5797 11.0952 20.5383 11.2872C20.497 11.4792 20.3927 11.6499 20.2253 11.7992L16.5503 14.9742L17.6503 19.6992C17.7003 19.9159 17.6837 20.1119 17.6003 20.2872C17.517 20.4626 17.4003 20.6082 17.2503 20.7242C17.1003 20.8409 16.9253 20.9076 16.7253 20.9242C16.5253 20.9409 16.3337 20.8909 16.1503 20.7742L12.0003 18.2742Z"
                        fill="white"
                      />
                      <path
                        d="M46.0003 18.2742L41.8503 20.7742C41.667 20.8909 41.4753 20.9409 41.2753 20.9242C41.0753 20.9076 40.9003 20.8409 40.7503 20.7242C40.6003 20.6076 40.4837 20.4616 40.4003 20.2862C40.317 20.1109 40.3003 19.9152 40.3503 19.6992L41.4503 14.9742L37.7753 11.7992C37.6087 11.6492 37.5047 11.4782 37.4633 11.2862C37.422 11.0942 37.4343 10.9069 37.5003 10.7242C37.567 10.5409 37.667 10.3909 37.8003 10.2742C37.9337 10.1576 38.117 10.0826 38.3503 10.0492L43.2003 9.62422L45.0753 5.17422C45.1587 4.97422 45.288 4.82422 45.4633 4.72422C45.6387 4.62422 45.8177 4.57422 46.0003 4.57422C46.1837 4.57422 46.3627 4.62422 46.5373 4.72422C46.712 4.82422 46.8413 4.97422 46.9253 5.17422L48.8003 9.62422L53.6503 10.0492C53.8837 10.0826 54.067 10.1576 54.2003 10.2742C54.3337 10.3909 54.4337 10.5409 54.5003 10.7242C54.567 10.9076 54.5797 11.0952 54.5383 11.2872C54.497 11.4792 54.3927 11.6499 54.2253 11.7992L50.5503 14.9742L51.6503 19.6992C51.7003 19.9159 51.6837 20.1119 51.6003 20.2872C51.517 20.4626 51.4003 20.6082 51.2503 20.7242C51.1003 20.8409 50.9253 20.9076 50.7253 20.9242C50.5253 20.9409 50.3337 20.8909 50.1503 20.7742L46.0003 18.2742Z"
                        fill="white"
                      />
                      <path
                        d="M80.0003 18.2742L75.8503 20.7742C75.667 20.8909 75.4753 20.9409 75.2753 20.9242C75.0753 20.9076 74.9003 20.8409 74.7503 20.7242C74.6003 20.6076 74.4837 20.4616 74.4003 20.2862C74.317 20.1109 74.3003 19.9152 74.3503 19.6992L75.4503 14.9742L71.7753 11.7992C71.6087 11.6492 71.5047 11.4782 71.4633 11.2862C71.422 11.0942 71.4343 10.9069 71.5003 10.7242C71.567 10.5409 71.667 10.3909 71.8003 10.2742C71.9337 10.1576 72.117 10.0826 72.3503 10.0492L77.2003 9.62422L79.0753 5.17422C79.1587 4.97422 79.288 4.82422 79.4633 4.72422C79.6387 4.62422 79.8177 4.57422 80.0003 4.57422C80.1837 4.57422 80.3627 4.62422 80.5373 4.72422C80.712 4.82422 80.8413 4.97422 80.9253 5.17422L82.8003 9.62422L87.6503 10.0492C87.8837 10.0826 88.067 10.1576 88.2003 10.2742C88.3337 10.3909 88.4337 10.5409 88.5003 10.7242C88.567 10.9076 88.5797 11.0952 88.5383 11.2872C88.497 11.4792 88.3927 11.6499 88.2253 11.7992L84.5503 14.9742L85.6503 19.6992C85.7003 19.9159 85.6837 20.1119 85.6003 20.2872C85.517 20.4626 85.4003 20.6082 85.2503 20.7242C85.1003 20.8409 84.9253 20.9076 84.7253 20.9242C84.5253 20.9409 84.3337 20.8909 84.1503 20.7742L80.0003 18.2742Z"
                        fill="white"
                      />
                      <path
                        d="M114 18.2742L109.85 20.7742C109.667 20.8909 109.475 20.9409 109.275 20.9242C109.075 20.9076 108.9 20.8409 108.75 20.7242C108.6 20.6076 108.484 20.4616 108.4 20.2862C108.317 20.1109 108.3 19.9152 108.35 19.6992L109.45 14.9742L105.775 11.7992C105.609 11.6492 105.505 11.4782 105.463 11.2862C105.422 11.0942 105.434 10.9069 105.5 10.7242C105.567 10.5409 105.667 10.3909 105.8 10.2742C105.934 10.1576 106.117 10.0826 106.35 10.0492L111.2 9.62422L113.075 5.17422C113.159 4.97422 113.288 4.82422 113.463 4.72422C113.639 4.62422 113.818 4.57422 114 4.57422C114.184 4.57422 114.363 4.62422 114.537 4.72422C114.712 4.82422 114.841 4.97422 114.925 5.17422L116.8 9.62422L121.65 10.0492C121.884 10.0826 122.067 10.1576 122.2 10.2742C122.334 10.3909 122.434 10.5409 122.5 10.7242C122.567 10.9076 122.58 11.0952 122.538 11.2872C122.497 11.4792 122.393 11.6499 122.225 11.7992L118.55 14.9742L119.65 19.6992C119.7 19.9159 119.684 20.1119 119.6 20.2872C119.517 20.4626 119.4 20.6082 119.25 20.7242C119.1 20.8409 118.925 20.9076 118.725 20.9242C118.525 20.9409 118.334 20.8909 118.15 20.7742L114 18.2742Z"
                        fill="white"
                      />
                      <path
                        d="M148 18.2742L143.85 20.7742C143.667 20.8909 143.475 20.9409 143.275 20.9242C143.075 20.9076 142.9 20.8409 142.75 20.7242C142.6 20.6076 142.484 20.4616 142.4 20.2862C142.317 20.1109 142.3 19.9152 142.35 19.6992L143.45 14.9742L139.775 11.7992C139.609 11.6492 139.505 11.4782 139.463 11.2862C139.422 11.0942 139.434 10.9069 139.5 10.7242C139.567 10.5409 139.667 10.3909 139.8 10.2742C139.934 10.1576 140.117 10.0826 140.35 10.0492L145.2 9.62422L147.075 5.17422C147.159 4.97422 147.288 4.82422 147.463 4.72422C147.639 4.62422 147.818 4.57422 148 4.57422C148.184 4.57422 148.363 4.62422 148.537 4.72422C148.712 4.82422 148.841 4.97422 148.925 5.17422L150.8 9.62422L155.65 10.0492C155.884 10.0826 156.067 10.1576 156.2 10.2742C156.334 10.3909 156.434 10.5409 156.5 10.7242C156.567 10.9076 156.58 11.0952 156.538 11.2872C156.497 11.4792 156.393 11.6499 156.225 11.7992L152.55 14.9742L153.65 19.6992C153.7 19.9159 153.684 20.1119 153.6 20.2872C153.517 20.4626 153.4 20.6082 153.25 20.7242C153.1 20.8409 152.925 20.9076 152.725 20.9242C152.525 20.9409 152.334 20.8909 152.15 20.7742L148 18.2742Z"
                        fill="white"
                      />
                    </svg>
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default Testimonal;
