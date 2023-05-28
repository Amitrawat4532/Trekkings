import { Text, Flex, Box, Button, Progress, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Autoplay, Mousewheel, Pagination, S } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import "swiper/css/pagination";

function Destination({}) {
  const ContactData = [
    {
      img: "/images/swiper.png",
      name: "1 - Himaliyan Range of Mountain",
    },
    {
      img: "/images/destination1.png",
      name: "2 - Great ranges of mountain",
    },
    {
      img: "/images/destination2.png",
      name: "3 - The dense forest",
    },
    {
      img: "/images/swiper.png",
      name: "4 - Great ranges of mountain",
    },
    {
      img: "/images/destination1.png",
      name: "5 - Great ranges of mountain",
    },
    {
      img: "/images/destination2.png",
      name: "6 - The dense forest",
    },
    {
      img: "/images/swiper.png",
      name: "7 - The dense forest",
    },
    {
      img: "/images/destination1.png",
      name: "8 - Great ranges of mountain",
    },
    {
      img: "/images/destination2.png",
      name: "9 - The dense forest",
    },
    {
      img: "/images/destination1.png",
      name: "10 - Great ranges of mountain",
    },
    
  ];

  const [swiperData, setSwiperData] = useState({ progress: 0, activeIndex: 1 });
  const [isTouch, setTouch] = useCycle(false, true);
  const [swiper, setSwiper] = useState(null);


  const swiperProgressHandler = (progressVal, activeVal) => {
    setSwiperData({
      ...swiperData,
      progress: Math.round(progressVal * 10) * 10,
      activeIndex: activeVal,
    });
  };

  return (
    <>
      {/* main container */}
      <Flex
        h="100%"
        w={["100%", "100%", "100%", "100%"]}
        backgroundColor="#210011"
        flexDirection="column"
        pt={["6", "6", "54px", "54px"]}
        pb="4"
        justifyContent="space-around"
        // gap="7"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "center", "center"]}
          pb={["33px", "33px", "50px", "50px"]}
        >
          <Text variant="destinationHeading1">MOST POPULAR TREKKING</Text>
          <Text variant="destinationHeader">Destination</Text>
        </Flex>
        {/* header end */}

        <Flex overflow="hidden" alignItems="center" height="100%" width="100%">
          <Swiper
            onSlideChange={(e) => {
              swiperProgressHandler(e.progress, e.activeIndex);
              console.log(swiper ?? swiper, e.activeIndex);
            }}
            onSwiper={setSwiper}
            style={{
              position: "relative",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            slidesPerView={1}
            modules={[Autoplay, Mousewheel, Pagination]}
            mousewheel={false}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                spaceBetween: 100,
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              900: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 10,
                slidesPerView: 4,
              },
             
            }}
            navigation={true}
            centeredSlides={true}
            direction={"horizontal"}
            loop={true}
            grabCursor={true}
            onTouchStart={(e) => setTouch(true)}
            onTouchEnd={(e) => setTouch(false)}
          >
            {ContactData.map((item, i) => {
              return (
                <SwiperSlide
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "600px",
                  }}
                >
                  {({ isActive, isPrev, isNext }) => (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      initial={{
                        scale: 1,
                        opacity: 1,
                      }}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        opacity: isTouch
                          ? 0.49
                          : isActive
                          ? 1
                          : isPrev || isNext
                          ? 0.55
                          : 0.49,
                      }}
                    >
                      <Text
                        as="h1"
                        color="white"
                        fontSize="16px"
                        fontFamily="Roboto"
                        fontWeight="600"
                      >
                        {item.name}
                      </Text>
                      <Flex flexDirection="row" pb="10px" gap="6px">
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99983 13.7717L13.1498 16.2817C13.9098 16.7417 14.8398 16.0617 14.6398 15.2017L13.5398 10.4817L17.2098 7.30172C17.8798 6.72172 17.5198 5.62172 16.6398 5.55172L11.8098 5.14172L9.91983 0.681719C9.57983 -0.128281 8.41983 -0.128281 8.07983 0.681719L6.18983 5.13172L1.35983 5.54172C0.479829 5.61172 0.119828 6.71172 0.789828 7.29172L4.45983 10.4717L3.35983 15.1917C3.15983 16.0517 4.08983 16.7317 4.84983 16.2717L8.99983 13.7717Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99983 13.7717L13.1498 16.2817C13.9098 16.7417 14.8398 16.0617 14.6398 15.2017L13.5398 10.4817L17.2098 7.30172C17.8798 6.72172 17.5198 5.62172 16.6398 5.55172L11.8098 5.14172L9.91983 0.681719C9.57983 -0.128281 8.41983 -0.128281 8.07983 0.681719L6.18983 5.13172L1.35983 5.54172C0.479829 5.61172 0.119828 6.71172 0.789828 7.29172L4.45983 10.4717L3.35983 15.1917C3.15983 16.0517 4.08983 16.7317 4.84983 16.2717L8.99983 13.7717Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99983 13.7717L13.1498 16.2817C13.9098 16.7417 14.8398 16.0617 14.6398 15.2017L13.5398 10.4817L17.2098 7.30172C17.8798 6.72172 17.5198 5.62172 16.6398 5.55172L11.8098 5.14172L9.91983 0.681719C9.57983 -0.128281 8.41983 -0.128281 8.07983 0.681719L6.18983 5.13172L1.35983 5.54172C0.479829 5.61172 0.119828 6.71172 0.789828 7.29172L4.45983 10.4717L3.35983 15.1917C3.15983 16.0517 4.08983 16.7317 4.84983 16.2717L8.99983 13.7717Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99983 13.7717L13.1498 16.2817C13.9098 16.7417 14.8398 16.0617 14.6398 15.2017L13.5398 10.4817L17.2098 7.30172C17.8798 6.72172 17.5198 5.62172 16.6398 5.55172L11.8098 5.14172L9.91983 0.681719C9.57983 -0.128281 8.41983 -0.128281 8.07983 0.681719L6.18983 5.13172L1.35983 5.54172C0.479829 5.61172 0.119828 6.71172 0.789828 7.29172L4.45983 10.4717L3.35983 15.1917C3.15983 16.0517 4.08983 16.7317 4.84983 16.2717L8.99983 13.7717Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99983 13.7717L13.1498 16.2817C13.9098 16.7417 14.8398 16.0617 14.6398 15.2017L13.5398 10.4817L17.2098 7.30172C17.8798 6.72172 17.5198 5.62172 16.6398 5.55172L11.8098 5.14172L9.91983 0.681719C9.57983 -0.128281 8.41983 -0.128281 8.07983 0.681719L6.18983 5.13172L1.35983 5.54172C0.479829 5.61172 0.119828 6.71172 0.789828 7.29172L4.45983 10.4717L3.35983 15.1917C3.15983 16.0517 4.08983 16.7317 4.84983 16.2717L8.99983 13.7717Z"
                            fill="white"
                          />
                        </svg>
                      </Flex>
                      <motion.div
                        style={{
                          position: "relative",
                        }}
                      >
                        <Image src={item.img} height="450px" width="328px" />
                        <Box position="absolute" top={"10px"} right={"10px"}>
                          <Box
                            as="svg"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.125 33.1875L25 33.3125L24.8625 33.1875C18.925 27.8 15 24.2375 15 20.625C15 18.125 16.875 16.25 19.375 16.25C21.3 16.25 23.175 17.5 23.8375 19.2H26.1625C26.825 17.5 28.7 16.25 30.625 16.25C33.125 16.25 35 18.125 35 20.625C35 24.2375 31.075 27.8 25.125 33.1875ZM30.625 13.75C28.45 13.75 26.3625 14.7625 25 16.35C23.6375 14.7625 21.55 13.75 19.375 13.75C15.525 13.75 12.5 16.7625 12.5 20.625C12.5 25.3375 16.75 29.2 23.1875 35.0375L25 36.6875L26.8125 35.0375C33.25 29.2 37.5 25.3375 37.5 20.625C37.5 16.7625 34.475 13.75 30.625 13.75Z"
                              fill="#FF461D"
                            />
                            <rect
                              x="0.75"
                              y="0.75"
                              width="48.5"
                              height="48.5"
                              rx="24.25"
                              stroke="#FF461D"
                              stroke-width="1.5"
                            />
                          </Box>
                        </Box>
                      </motion.div>
                    </motion.a>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <motion.div
            animate={{
              opacity: isTouch ? 0 : 1,
            }}
            className="bg-[#EBEBED] h-14 dark:bg-dark-200  w-auto mx-7 absolute inset-0 my-auto z-[-2] rounded-[8px]"
          />
        </Flex>

        <Flex
          flexWrap="wrap"
          justifyContent={"space-between"}
          mb="30px"
          px={["20px", "20px", "100px", "100px"]}
          gap="20px"
        >
          <Flex flexDirection="row" gap={["10px", "10px", "20px", "20px"]}>
            <Box
              as="svg"
              width={["40px", "40px", "80px", "80px"]}
              height={["40px", "40px", "80px", "80px"]}
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                swiper?.slidePrev();
              }}
            >
              <path
                d="M39.9998 53.3346L44.6665 48.668L39.3332 43.3346H53.3332V36.668H39.3332L44.6665 31.3346L39.9998 26.668L26.6665 40.0013L39.9998 53.3346ZM39.9998 73.3346C35.3887 73.3346 31.0554 72.4591 26.9998 70.708C22.9443 68.9569 19.4165 66.5824 16.4165 63.5846C13.4165 60.5846 11.0421 57.0569 9.29317 53.0013C7.54428 48.9457 6.66873 44.6124 6.6665 40.0013C6.6665 35.3902 7.54206 31.0569 9.29317 27.0013C11.0443 22.9457 13.4187 19.418 16.4165 16.418C19.4165 13.418 22.9443 11.0435 26.9998 9.29464C31.0554 7.54575 35.3887 6.67019 39.9998 6.66797C44.6109 6.66797 48.9443 7.54352 52.9998 9.29464C57.0554 11.0457 60.5832 13.4202 63.5832 16.418C66.5832 19.418 68.9587 22.9457 70.7098 27.0013C72.4609 31.0569 73.3354 35.3902 73.3332 40.0013C73.3332 44.6124 72.4576 48.9457 70.7065 53.0013C68.9554 57.0569 66.5809 60.5846 63.5832 63.5846C60.5832 66.5846 57.0554 68.9602 52.9998 70.7113C48.9443 72.4624 44.6109 73.3369 39.9998 73.3346ZM39.9998 66.668C47.4443 66.668 53.7498 64.0846 58.9165 58.918C64.0832 53.7513 66.6665 47.4457 66.6665 40.0013C66.6665 32.5569 64.0832 26.2513 58.9165 21.0846C53.7498 15.918 47.4443 13.3346 39.9998 13.3346C32.5554 13.3346 26.2498 15.918 21.0832 21.0846C15.9165 26.2513 13.3332 32.5569 13.3332 40.0013C13.3332 47.4457 15.9165 53.7513 21.0832 58.918C26.2498 64.0846 32.5554 66.668 39.9998 66.668Z"
                fill="#FF461D"
              />
            </Box>
            <Box
              as="svg"
              width={["40px", "40px", "80px", "80px"]}
              height={["40px", "40px", "80px", "80px"]}
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                swiper?.slideNext();
              }}
            >
              <path
                d="M40.0002 53.3346L35.3335 48.668L40.6668 43.3346H26.6668V36.668H40.6668L35.3335 31.3346L40.0002 26.668L53.3335 40.0013L40.0002 53.3346ZM40.0002 73.3346C44.6113 73.3346 48.9446 72.4591 53.0002 70.708C57.0557 68.9569 60.5835 66.5824 63.5835 63.5846C66.5835 60.5846 68.9579 57.0569 70.7068 53.0013C72.4557 48.9457 73.3313 44.6124 73.3335 40.0013C73.3335 35.3902 72.4579 31.0569 70.7068 27.0013C68.9557 22.9457 66.5813 19.418 63.5835 16.418C60.5835 13.418 57.0557 11.0435 53.0002 9.29464C48.9446 7.54575 44.6113 6.67019 40.0002 6.66797C35.3891 6.66797 31.0557 7.54352 27.0002 9.29464C22.9446 11.0457 19.4168 13.4202 16.4168 16.418C13.4168 19.418 11.0413 22.9457 9.29017 27.0013C7.53906 31.0569 6.66461 35.3902 6.66683 40.0013C6.66683 44.6124 7.54239 48.9457 9.2935 53.0013C11.0446 57.0569 13.4191 60.5846 16.4168 63.5846C19.4168 66.5846 22.9446 68.9602 27.0002 70.7113C31.0557 72.4624 35.3891 73.3369 40.0002 73.3346ZM40.0002 66.668C32.5557 66.668 26.2502 64.0846 21.0835 58.918C15.9168 53.7513 13.3335 47.4457 13.3335 40.0013C13.3335 32.5569 15.9168 26.2513 21.0835 21.0846C26.2502 15.918 32.5557 13.3346 40.0002 13.3346C47.4446 13.3346 53.7502 15.918 58.9168 21.0846C64.0835 26.2513 66.6668 32.5569 66.6668 40.0013C66.6668 47.4457 64.0835 53.7513 58.9168 58.918C53.7502 64.0846 47.4446 66.668 40.0002 66.668Z"
                fill="#FF461D"
              />
            </Box>
          </Flex>

          <Flex
            w={["60%", "60%", "441px", "441px"]}
            gap={["10px", "10px", "24px", "24px"]}
            alignItems="center"
          >
            <Text
              color="#FF461D"
              fontSize={["15px", "15px", "30px", "30px"]}
              alignSelf="center"
              fontWeight="600"
              fontFamily="Roboto"
            >
              {swiperData.activeIndex}
            </Text>
            <Box>
              <Progress
                colorScheme="red"
                height={["4px", "4px", "6px", "6px"]}
                w={["150px", "190px", "381px", "381px"]}
                value={swiperData.progress}
                borderRadius="30px"
                bgColor="#8C8C8C"
              />
            </Box>
          </Flex>

          <Button
            bgColor="#FF461D"
            alignSelf="center"
            fontSize="16px"
            color="white"
            px="30px"
            margin={["auto", "auto", "0px", "0px"]}
            borderRadius="60px"
          >
            Explore more
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9373 16.082L16.4373 10.582C16.5207 10.4987 16.5798 10.4084 16.6148 10.3112C16.6498 10.2139 16.667 10.1098 16.6665 9.99867C16.6665 9.88756 16.649 9.78339 16.614 9.68617C16.579 9.58894 16.5201 9.49867 16.4373 9.41533L10.9373 3.91533C10.7845 3.76256 10.5934 3.68283 10.364 3.67617C10.1345 3.6695 9.93677 3.74922 9.77066 3.91533C9.60399 4.06811 9.51705 4.25922 9.50982 4.48867C9.5026 4.71811 9.5826 4.91589 9.74982 5.082L13.8332 9.16533H4.52066C4.28455 9.16533 4.08649 9.24533 3.92649 9.40533C3.76649 9.56533 3.68677 9.76311 3.68732 9.99867C3.68732 10.2348 3.76705 10.4328 3.92649 10.5928C4.08594 10.7528 4.28399 10.8326 4.52066 10.832H13.8332L9.74982 14.9153C9.59705 15.0681 9.51705 15.2626 9.50982 15.4987C9.5026 15.7348 9.5826 15.9292 9.74982 16.082C9.9026 16.2487 10.097 16.332 10.3332 16.332C10.5693 16.332 10.7707 16.2487 10.9373 16.082Z"
                fill="white"
              />
            </svg>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
export default Destination;
