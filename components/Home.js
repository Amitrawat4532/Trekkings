import { Box, Flex, Text ,Image, effect} from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Autoplay, Mousewheel,EffectFade} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import React from 'react';


const Home = () => {
  const ContactData = [
    {
      img: "/images/newfinalbg.png",
    },
    {
      img: "/images/swiperbg.png",
    },
    {
      img: "/images/swiperbg2.png",
    },
    {
      img: "/images/swiperbg3.png",
    },
    {
      img: "/images/swiperbg4.png",
    },
    {
      img: "/images/swiperbg5.png",
    },
    {
      img: "/images/swiperbg6.png",
    },
    
    
  ];
  return (
    <>
      {/* main container */}
      <Flex
        className="home_container"
        w="100%"
        h="100vh"
        justifyContent="end"
        alignItems="center"
        position="relative"
        flexDirection="column"
      >
        {/* heading container */}
        <Box>
          <Text variant="homeHeader1" pt={["0px", "0px", "130px", "130px"]}>
            MAKE THE
          </Text>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            initiallyVisible={true}
            animateOnce={true}
          >
            <Text variant="homeHeader2" textShadow="0px 0px 40px 0px rgba(0, 0, 0, 0.65)">IMPOSSIBLE</Text>
          </AnimationOnScroll>
        </Box>
          
          <Flex  width="100%"  justifyContent="space-between" mt="50px" pb="20px" pl="30px" flexDirection={["column","column","row","row"]} alignItems="center">

            <Flex flexDirection="column"  p="18px 30px" bg="rgba(255, 255, 255, 0.08)" borderRadius="16px" boxShadow="0px 0px 15px 0px rgba(0, 0, 0, 0.10)" gap="10px">
              <Text color="white" fontSize={["18px","18px","22px","22px"]} fontFamily="Poppins" fontWeight="600" letterSpacing="0.66px">Hi Trekkers!</Text>
              <Text color="white" fontSize={["14px","14px","18px","18px"]} fontFamily="Poppins" fontWeight="400" letterSpacing="0.66px">Welcome! Explore and start your <br/>adventure now........</Text>
              <Flex
            gap="15px"
            
          >
            
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.613 11.847C21.613 6.45675 17.2383 2.08203 11.848 2.08203C6.45773 2.08203 2.08301 6.45675 2.08301 11.847C2.08301 16.5733 5.44217 20.5086 9.89501 21.4167V14.7765H7.94201V11.847H9.89501V9.40578C9.89501 7.52114 11.4281 5.98803 13.3128 5.98803H15.754V8.91753H13.801C13.2639 8.91753 12.8245 9.35696 12.8245 9.89403V11.847H15.754V14.7765H12.8245V21.5632C17.7558 21.075 21.613 16.9151 21.613 11.847Z" fill="white"/>
</svg>


<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 12.5C15.625 13.1181 15.4417 13.7223 15.0983 14.2362C14.755 14.7501 14.2669 15.1506 13.6959 15.3871C13.1249 15.6236 12.4965 15.6855 11.8903 15.565C11.2842 15.4444 10.7273 15.1467 10.2903 14.7097C9.85325 14.2727 9.55562 13.7158 9.43505 13.1097C9.31447 12.5035 9.37635 11.8751 9.61288 11.3041C9.8494 10.7331 10.2499 10.245 10.7638 9.90166C11.2777 9.55828 11.8819 9.375 12.5 9.375C13.328 9.37758 14.1214 9.70764 14.7069 10.2931C15.2924 10.8786 15.6224 11.672 15.625 12.5ZM22.2656 8.20312V16.7969C22.2656 18.2473 21.6895 19.6383 20.6639 20.6639C19.6383 21.6895 18.2473 22.2656 16.7969 22.2656H8.20312C6.75272 22.2656 5.36172 21.6895 4.33613 20.6639C3.31055 19.6383 2.73438 18.2473 2.73438 16.7969V8.20312C2.73438 6.75272 3.31055 5.36172 4.33613 4.33613C5.36172 3.31055 6.75272 2.73438 8.20312 2.73438H16.7969C18.2473 2.73438 19.6383 3.31055 20.6639 4.33613C21.6895 5.36172 22.2656 6.75272 22.2656 8.20312ZM17.1875 12.5C17.1875 11.5729 16.9126 10.6666 16.3975 9.89576C15.8824 9.12491 15.1504 8.5241 14.2938 8.16931C13.4373 7.81453 12.4948 7.7217 11.5855 7.90257C10.6762 8.08344 9.841 8.52988 9.18544 9.18544C8.52988 9.841 8.08344 10.6762 7.90257 11.5855C7.7217 12.4948 7.81453 13.4373 8.16931 14.2938C8.5241 15.1504 9.12491 15.8824 9.89576 16.3975C10.6666 16.9126 11.5729 17.1875 12.5 17.1875C13.7432 17.1875 14.9355 16.6936 15.8146 15.8146C16.6936 14.9355 17.1875 13.7432 17.1875 12.5ZM18.75 7.42188C18.75 7.1901 18.6813 6.96353 18.5525 6.77082C18.4237 6.5781 18.2407 6.4279 18.0266 6.3392C17.8124 6.25051 17.5768 6.2273 17.3495 6.27252C17.1222 6.31773 16.9134 6.42934 16.7495 6.59323C16.5856 6.75712 16.474 6.96593 16.4288 7.19325C16.3835 7.42057 16.4068 7.6562 16.4955 7.87033C16.5842 8.08446 16.7344 8.26749 16.9271 8.39625C17.1198 8.52502 17.3463 8.59375 17.5781 8.59375C17.8889 8.59375 18.187 8.47028 18.4068 8.25052C18.6265 8.03075 18.75 7.73268 18.75 7.42188Z" fill="white"/>
</svg>


<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.08719 22.9154L3.49552 17.7404C2.56754 16.1496 2.08 14.3404 2.08302 12.4987C2.08302 6.74557 6.74656 2.08203 12.4997 2.08203C18.2528 2.08203 22.9164 6.74557 22.9164 12.4987C22.9164 18.2518 18.2528 22.9154 12.4997 22.9154C10.6588 22.9183 8.85037 22.4312 7.2601 21.5039L2.08719 22.9154ZM8.74031 7.6112C8.60579 7.61955 8.47435 7.65498 8.35386 7.71536C8.24086 7.77935 8.1377 7.85935 8.0476 7.95286C7.9226 8.07057 7.85177 8.17266 7.77573 8.27161C7.39074 8.77265 7.18366 9.38767 7.18719 10.0195C7.18927 10.5299 7.3226 11.0268 7.53094 11.4914C7.95698 12.431 8.65802 13.4258 9.58406 14.3477C9.80698 14.5695 10.0247 14.7924 10.2591 14.9997C11.4084 16.0117 12.7781 16.7414 14.2591 17.131L14.8518 17.2216C15.0445 17.232 15.2372 17.2174 15.4309 17.2081C15.7343 17.1924 16.0305 17.1103 16.2986 16.9674C16.4351 16.8972 16.5682 16.8207 16.6976 16.7383C16.6976 16.7383 16.7424 16.7091 16.8278 16.6445C16.9684 16.5404 17.0549 16.4664 17.1716 16.3445C17.258 16.2549 17.333 16.1497 17.3903 16.0299C17.4716 15.8602 17.5528 15.5362 17.5861 15.2664C17.6111 15.0602 17.6039 14.9477 17.6007 14.8779C17.5966 14.7664 17.5039 14.6508 17.4028 14.6018L16.7966 14.3299C16.7966 14.3299 15.8903 13.9352 15.3372 13.6831C15.2789 13.6577 15.2164 13.6432 15.1528 13.6404C15.0815 13.633 15.0095 13.6411 14.9416 13.6639C14.8737 13.6867 14.8115 13.7238 14.7591 13.7727V13.7706C14.7539 13.7706 14.6841 13.8299 13.9309 14.7424C13.8877 14.8005 13.8282 14.8444 13.7599 14.8685C13.6916 14.8927 13.6177 14.8959 13.5476 14.8779C13.4797 14.8597 13.4132 14.8367 13.3486 14.8091C13.2195 14.7549 13.1747 14.7341 13.0861 14.6956L13.0809 14.6935C12.485 14.4333 11.9333 14.0819 11.4455 13.6518C11.3143 13.5372 11.1924 13.4122 11.0674 13.2914C10.6576 12.8989 10.3004 12.455 10.0049 11.9706L9.94344 11.8716C9.89929 11.8051 9.8636 11.7334 9.83719 11.6581C9.79761 11.5049 9.90073 11.382 9.90073 11.382C9.90073 11.382 10.1539 11.1049 10.2716 10.9549C10.3696 10.8303 10.461 10.7006 10.5455 10.5664C10.6684 10.3685 10.707 10.1654 10.6424 10.0081C10.3507 9.29557 10.0486 8.5862 9.73823 7.88203C9.67677 7.74245 9.49448 7.64245 9.32886 7.62266C9.2726 7.61641 9.21635 7.61016 9.1601 7.60599C9.02022 7.59904 8.88004 7.60147 8.74031 7.6112Z" fill="white"/>
</svg>


          </Flex>
          

            </Flex>
            <Flex height="full" justifyContent="center" mr="30px" flexDirection={["row","row","column","column"]} alignItems="center" gap={["10px","10px","0px","0px"]}>
         <img src="/images/svg img.png" />        

  

         <Text color="white" fontSize={["16px","16px","22px","22px"]} fontFamily="Poppins" fontWeight="600" letterSpacing="0.66px" pl={["0","0","20px","20px"]}>REGISTERED</Text>


          </Flex>
          </Flex>

          <Swiper
           
            style={{
              position: "absolute",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width:"100%",
              zIndex:"-1"
            }}
            effect={'fade'}
            slidesPerView={1}
            modules={[Autoplay, Mousewheel,EffectFade]}
            mousewheel={false}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              1600: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
               
              },
            }}
            centeredSlides={true}
            direction={"horizontal"}
            loop={true}
            grabCursor={true}
          >
            {ContactData.map((item, i) => {
              return (
                <SwiperSlide
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"red"
                  }}
                >   
                        <Image src={item.img}  height="100%" width="100%" alt="logo"  />
                </SwiperSlide>
              );
            })}
          </Swiper>
             </Flex>
    </>
  );
};

export default Home;



