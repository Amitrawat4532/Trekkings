import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";

const Whytrekking = ({ settings }) => {
  const countUpRef = React.useRef(null);
  const [visible, setVisible] = useState(false);

  const Testimonal_context = [
    {
      icon_1: "./images/tickicon.png",
      number: settings?.experience,
      icon_2: "./images/plusicon.png",
      heading: "Years Of Experience",
    },
    {
      icon_1: "./images/tickicon.png",
      number: settings?.totalTreks,
      icon_2: "./images/plusicon.png",
      heading: "Treks Completed",
    },

    {
      icon_1: "./images/tickicon.png",
      number: settings?.hikers,
      icon_2: "./images/plusicon.png",
      heading: "Satisfied Hikers",
    },

    {
      icon_1: "./images/tickicon.png",
      number: settings?.destination,
      icon_2: "./images/plusicon.png",
      heading: "Destinations Hiked",
    },
  ];

  return (
    <>
      {/* main container */}
      <Flex
        backgroundColor="#210011"
        width="100%"
        height="100%"
        flexDirection="column"
        minHeight="100vh"
        // justifyContent="space-around"
        // p={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
        px={["4", "4", "20", "20"]}
        py="20px"
      >
        {/* header container */}
        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          backgroundColor="transparent"
          p="20px"
          // p={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
        >
          <Text variant="whytrekkingHeader2">
            WE PROVIDE YOU THE BEST EXPERIENCE
          </Text>
          <Text variant="whytrekkingHeader1">WHY TREVELLING WITH US?</Text>
        </Flex>

        {/* img container */}
        {/* <Flex
          justifyContent="center"
          width="100%"
          pb="8"
          my="8"
          // height="20%"
        >
          <Image
            src="/images/whyTrek.png"
            alt="ILLUSTRATION"
            // borderRadius="41px"
            width="100%"
            height={["180px", "180px", "350px", "350px"]}
            objectFit="contain"
          />
        </Flex> */}

        {/* Feature Context */}
        {/* <Flex
          px="4"
          my="6"
          alignItems="start"
          justifyContent="space-evenly"
          flexDirection="row"
          flexWrap="wrap"
          gap="10"
        >
          {Testimonal_context.map((el, key) => {
            return (
              <Flex
                flexDirection="column"
                alignItems="center"
                alignSelf="start"
                key={key}
                minW="100px"
           
              >
                <Flex gap="10px" alignItems="center">
                  <AnimationOnScroll
                    animateOnce={true}
                    duration={0}
                    animateIn="animate__fadeIn"
                    afterAnimatedIn={() => setVisible(true)}
                    initiallyVisible={true}
                  >
                    {visible && (
                      <Text variant="testimonalHeader" ref={countUpRef}>
                        <CountUp end={el?.number} delay={0}></CountUp>
                      </Text>
                    )}
                  </AnimationOnScroll>
                  <Image src={el.icon_2} alt="ilustrator icon" height="20px" />
                </Flex>
                <Flex>
                  <Text variant="testimonalHeading">{el.heading}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex> */}

        <Flex
          flexDirection="column"
          gap="60px"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box position="absolute" top="30px">
            <svg
              width="291"
              height="586"
              viewBox="0 0 291 586"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M162 2C249.324 27.1479 346 86 246 118C146 150 35.9998 118 3.99975 192C-28.0002 266 295.039 278 289.037 358C283.034 438 22.0019 412 18 482C13.9981 552 260.002 516 260 552C259.998 588 162 584 162 584"
                stroke="white"
                stroke-width="3"
                stroke-dasharray="6 6"
              />
            </svg>
          </Box>

          <Flex
            w="150px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            zIndex={2}
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0068 38.75L30.7568 30L39.5068 11.25L20.7568 20L12.0068 38.75ZM25.7568 27.5C25.0485 27.5 24.4543 27.26 23.9743 26.78C23.4943 26.3 23.2552 25.7067 23.2568 25C23.2568 24.2917 23.4968 23.6975 23.9768 23.2175C24.4568 22.7375 25.0502 22.4983 25.7568 22.5C26.4652 22.5 27.0593 22.74 27.5393 23.22C28.0193 23.7 28.2585 24.2933 28.2568 25C28.2568 25.7083 28.0168 26.3025 27.5368 26.7825C27.0568 27.2625 26.4635 27.5017 25.7568 27.5ZM25.7568 50C22.2985 50 19.0485 49.3433 16.0068 48.03C12.9652 46.7167 10.3193 44.9358 8.06934 42.6875C5.81934 40.4375 4.0385 37.7917 2.72684 34.75C1.41517 31.7083 0.758503 28.4583 0.756836 25C0.756836 21.5417 1.4135 18.2917 2.72684 15.25C4.04017 12.2083 5.821 9.5625 8.06934 7.3125C10.3193 5.0625 12.9652 3.28167 16.0068 1.97C19.0485 0.658334 22.2985 0.00166667 25.7568 0C29.2152 0 32.4652 0.656667 35.5068 1.97C38.5485 3.28333 41.1943 5.06417 43.4443 7.3125C45.6943 9.5625 47.476 12.2083 48.7893 15.25C50.1027 18.2917 50.7585 21.5417 50.7568 25C50.7568 28.4583 50.1002 31.7083 48.7868 34.75C47.4735 37.7917 45.6927 40.4375 43.4443 42.6875C41.1943 44.9375 38.5485 46.7192 35.5068 48.0325C32.4652 49.3458 29.2152 50.0017 25.7568 50Z"
                fill="#FF461D"
              />
            </svg>
            <Text
              color="#ffffff"
              fontSize="16px"
              fontFamily="Roboto"
              fontWeight="400"
            >
              EXPORATION
            </Text>
          </Flex>

          <Flex
            w="150px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            zIndex={2}
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.9107 8.33333H37.2953V6.25C37.289 4.59451 36.6791 3.00878 35.5985 1.83816C34.518 0.667537 33.0542 0.00685513 31.5261 0H19.9876C18.4595 0.00685513 16.9957 0.667537 15.9151 1.83816C14.8346 3.00878 14.2247 4.59451 14.2184 6.25V8.33333H4.60299C3.58293 8.33333 2.60464 8.77232 1.88335 9.55372C1.16205 10.3351 0.756836 11.3949 0.756836 12.5V45.8333C0.756836 46.9384 1.16205 47.9982 1.88335 48.7796C2.60464 49.561 3.58293 50 4.60299 50H46.9107C47.9307 50 48.909 49.561 49.6303 48.7796C50.3516 47.9982 50.7568 46.9384 50.7568 45.8333V12.5C50.7568 11.3949 50.3516 10.3351 49.6303 9.55372C48.909 8.77232 47.9307 8.33333 46.9107 8.33333ZM18.0645 6.25C18.0645 5.69747 18.2671 5.16756 18.6278 4.77686C18.9884 4.38616 19.4776 4.16667 19.9876 4.16667H31.5261C32.0361 4.16667 32.5252 4.38616 32.8859 4.77686C33.2465 5.16756 33.4491 5.69747 33.4491 6.25V8.33333H18.0645V6.25ZM32.4876 31.25H27.6799V36.4583C27.6799 37.0109 27.4773 37.5408 27.1167 37.9315C26.756 38.3222 26.2669 38.5417 25.7568 38.5417C25.2468 38.5417 24.7577 38.3222 24.397 37.9315C24.0364 37.5408 23.8338 37.0109 23.8338 36.4583V31.25H19.0261C18.516 31.25 18.0269 31.0305 17.6662 30.6398C17.3056 30.2491 17.103 29.7192 17.103 29.1667C17.103 28.6141 17.3056 28.0842 17.6662 27.6935C18.0269 27.3028 18.516 27.0833 19.0261 27.0833H23.8338V21.875C23.8338 21.3225 24.0364 20.7926 24.397 20.4019C24.7577 20.0112 25.2468 19.7917 25.7568 19.7917C26.2669 19.7917 26.756 20.0112 27.1167 20.4019C27.4773 20.7926 27.6799 21.3225 27.6799 21.875V27.0833H32.4876C32.9976 27.0833 33.4868 27.3028 33.8474 27.6935C34.2081 28.0842 34.4107 28.6141 34.4107 29.1667C34.4107 29.7192 34.2081 30.2491 33.8474 30.6398C33.4868 31.0305 32.9976 31.25 32.4876 31.25Z"
                fill="#FF461D"
              />
            </svg>
            <Text
              color="#ffffff"
              fontSize="16px"
              fontFamily="Roboto"
              fontWeight="400"
            >
              EXPORATION
            </Text>
          </Flex>
          <Flex
            w="150px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            zIndex={2}
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.6993 5.88379L50.4884 35.1546C50.7562 36.1615 50.8245 37.2116 50.6893 38.245C50.5541 39.2784 50.2182 40.2749 49.7006 41.1775C49.183 42.0802 48.4939 42.8713 47.6727 43.5057C46.8515 44.1401 45.9143 44.6054 44.9145 44.875L26.9261 49.7295C24.9074 50.2743 22.7565 49.9893 20.9465 48.9371C19.1364 47.8849 17.8155 46.1518 17.2742 44.1189L9.48218 14.8451C9.21436 13.8383 9.14609 12.7882 9.28127 11.7548C9.41645 10.7214 9.75243 9.72491 10.27 8.82227C10.7876 7.91964 11.4767 7.12852 12.2979 6.4941C13.1191 5.85967 14.0563 5.39436 15.0561 5.12474L33.0474 0.270317C34.0471 0.000600219 35.0898 -0.0681515 36.1159 0.0679875C37.1421 0.204127 38.1315 0.542489 39.0278 1.06376C39.9241 1.58502 40.7096 2.27898 41.3396 3.10601C41.9695 3.93303 42.4315 4.87693 42.6993 5.88379ZM24.2495 14.5969C24.1536 14.2293 23.9865 13.8843 23.7579 13.5818C23.5293 13.2793 23.2436 13.0253 22.9172 12.8344C22.5908 12.6435 22.2301 12.5193 21.856 12.4691C21.4818 12.419 21.1015 12.4437 20.7369 12.542C20.3722 12.6403 20.0305 12.8101 19.7312 13.0418C19.4319 13.2734 19.1811 13.5624 18.993 13.892C18.8049 14.2215 18.6833 14.5853 18.6353 14.9624C18.5872 15.3394 18.6135 15.7223 18.7128 16.0891C18.9121 16.8253 19.3928 17.4521 20.0498 17.8323C20.7068 18.2125 21.4865 18.3153 22.2185 18.118C22.9505 17.9207 23.5751 17.4395 23.9557 16.7797C24.3363 16.1198 24.4419 15.335 24.2495 14.5969ZM9.45352 25.9018L14.503 44.8635C14.9996 46.7423 15.9918 48.4506 17.3745 49.8074L16.105 49.741C14.0179 49.6306 12.0599 48.6899 10.6615 47.1257C9.26316 45.5615 8.53897 43.502 8.64824 41.4002L9.45352 25.9018ZM6.80268 21.6333L5.78534 41.2472C5.6793 43.2646 6.12923 45.181 7.00042 46.8463L5.814 46.3845C4.84772 46.011 3.96395 45.4495 3.21315 44.732C2.46236 44.0146 1.85924 43.1552 1.43825 42.203C1.01726 41.2508 0.786628 40.2244 0.759536 39.1824C0.732445 38.1404 0.909419 37.1033 1.28035 36.1302L6.80268 21.6333Z"
                fill="#FF461D"
              />
            </svg>
            <Text
              color="#ffffff"
              fontSize="16px"
              fontFamily="Roboto"
              fontWeight="400"
            >
              EXPORATION
            </Text>
          </Flex>

          <Flex
            w="150px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            zIndex={2}
          >
            <svg
              width="34"
              height="50"
              viewBox="0 0 34 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0746 0C17.6144 0 19.67 1.98764 19.67 4.37292C19.67 6.75762 17.6144 8.74526 15.0746 8.74526C12.5347 8.74526 10.4183 6.75762 10.4183 4.37292C10.4183 1.98764 12.5354 0 15.0746 0ZM15.3771 9.14291C17.1246 9.09173 18.4756 10.1129 19.1865 11.1876L24.0238 18.7405L32.4894 22.0911C34.9078 23.0558 33.759 26.0658 31.0382 25.3846C30.9408 25.3225 30.8398 25.2655 30.7357 25.214L25.0516 37.0257C25.0516 37.0257 26.8655 40.9445 29.1635 45.3745C31.4009 49.8604 25.9585 51.7916 23.963 47.6457L21.9681 43.4434L19.0656 49.4063L17.8561 48.8951L21.2422 41.9669L15.5581 30.3258C15.3163 30.3822 15.0746 30.3258 14.772 30.3258C14.772 30.3258 8.18101 44.4087 6.36649 48.1004C4.61335 51.7916 -0.586561 49.5769 1.16658 45.9416C2.92034 42.3075 11.2651 24.6464 11.2651 24.6464L5.06244 24.7417C4.12292 24.7493 3.89806 24.6087 3.83856 23.9476C3.74273 22.2005 3.57863 18.0899 4.00893 16.1846C4.56387 13.7288 4.8952 11.0258 6.72977 10.2217C8.56496 9.41761 11.7487 11.6417 11.7487 11.6417C12.2322 10.1653 13.7442 9.14291 15.3771 9.14291ZM19.1257 18.0017V24.8176L24.3263 35.494L29.5262 24.7605L21.9681 21.8076C21.6048 21.637 21.3029 21.4099 21.0605 21.0693L19.1257 18.0017Z"
                fill="#FF461D"
              />
            </svg>
            <Text
              color="#ffffff"
              fontSize="16px"
              fontFamily="Roboto"
              fontWeight="400"
            >
              EXPORATION
            </Text>
          </Flex>
          <Box
            border="2px solid white"
            height="117px"
            width="126px"
            borderRadius="50%"
          >
            logo
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Whytrekking;
