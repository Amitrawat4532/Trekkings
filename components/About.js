import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";

function About() {
  const cards = [
    {
      svg: (
        <path
          d="M27.625 57.375H40.375V46.75H51V34H40.375V23.375H27.625V34H17V46.75H27.625V57.375ZM34 85C24.1542 82.5208 16.0253 76.8712 9.6135 68.051C3.20167 59.2308 -0.00283146 49.4388 1.87721e-06 38.675V12.75L34 0L68 12.75V38.675C68 49.4417 64.7941 59.2351 58.3822 68.0553C51.9704 76.8754 43.843 82.5237 34 85Z"
          fill="#FF461D"
        />
      ),
      header: "SECRET LOCATIONS",
      description:
        " We xplore for the fun and provide you with the best and beutiful locations available here so that you can add a new chapter of your adventure with beautiful memories",
      link: "/secretlocation",
    },
    {
      svg: (
        <path
          d="M30 0C13.5525 0 0.25 13.3025 0.25 29.75C0.25 52.0625 30 85 30 85C30 85 59.75 52.0625 59.75 29.75C59.75 13.3025 46.4475 0 30 0ZM30 40.375C27.1821 40.375 24.4796 39.2556 22.487 37.263C20.4944 35.2704 19.375 32.5679 19.375 29.75C19.375 26.9321 20.4944 24.2296 22.487 22.237C24.4796 20.2444 27.1821 19.125 30 19.125C32.8179 19.125 35.5204 20.2444 37.513 22.237C39.5056 24.2296 40.625 26.9321 40.625 29.75C40.625 32.5679 39.5056 35.2704 37.513 37.263C35.5204 39.2556 32.8179 40.375 30 40.375Z"
          fill="#FF461D"
        />
      ),
      header: "SAFE ADVENTURE",
      description:
        " We take a spical care with our team of our beloved customer so they dont face any difficulties while the journey and we take the whole responsibilities during the trek",
      link: "/safeadventure",
    },
    {
      svg: (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.4089 0C27.488 0 30.7895 3.379 30.7895 7.434C30.7895 11.488 27.488 14.867 23.4089 14.867C19.3297 14.867 15.9306 11.488 15.9306 7.434C15.9306 3.379 19.3308 0 23.4089 0ZM23.8947 15.543C26.7013 15.456 28.8712 17.192 30.0129 19.019L37.7818 31.859L51.3782 37.555C55.2622 39.195 53.4173 44.312 49.0474 43.154C48.8911 43.0484 48.7289 42.9515 48.5616 42.864L39.4326 62.944C39.4326 62.944 42.3458 69.606 46.0366 77.137C49.6299 84.763 40.8892 88.046 37.6843 80.998L34.4803 73.854L29.8188 83.991L27.8763 83.122L33.3144 71.344L24.1855 51.554C23.7972 51.65 23.4089 51.554 22.923 51.554C22.923 51.554 12.3374 75.495 9.42318 81.771C6.60753 88.046 -1.74384 84.281 1.07181 78.101C3.88846 71.923 17.2907 41.899 17.2907 41.899L7.3288 42.061C5.81987 42.074 5.45874 41.835 5.36317 40.711C5.20926 37.741 4.94571 30.753 5.63679 27.514C6.52806 23.339 7.06021 18.744 10.0066 17.377C12.9541 16.01 18.0673 19.791 18.0673 19.791C18.8439 17.281 21.2722 15.543 23.8947 15.543ZM29.9153 30.603V42.19L38.2677 60.34L46.6191 42.093L34.4803 37.073C33.8969 36.783 33.412 36.397 33.0227 35.818L29.9153 30.603Z"
          fill="#FF461D"
        />
      ),
      header: "PROFESSIONAL HIKERS",
      description:
        "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer",
      link: "/professionalhikers",
    },
  ];

  return (
    <>
      {/* main container */}
      <Flex
        className="about_container"
        width="100%"
        // minHeight="70vh"
        height="100%"
        justifyContent="center"
        // backgroundImage="url('/images/bg1.png')"
        pb="40px"
        pt="80px"
        flexWrap="wrap"
        gap="80px"
        backgroundSize="70%"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        // border="1px solid red"
      >
        {/* card container */}
        {cards.map((el, id) => {
          return (
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__bounceIn"
              key={id}
            >
              <Flex
                width={["80%", "80%", "350px", "350px"]}
                height="100%"
                maxHeight="420px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#210011"
                direction="column"
                border="1px solid #949494"
                boxShadow="15px 15px 8px rgba(0, 0, 0, 0.25)"
                borderRadius="30px"
                p={["10px", "10px", "20px", "20px"]}
                m="auto"
                position="relative"
              >
                <Box pt={["60px", "60px", "53px", "53px"]}>
                  <svg
                    width="68"
                    height="85"
                    viewBox="0 0 68 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {el?.svg}
                  </svg>
                </Box>

                <Flex
                  alignItems="center"
                  flexDirection="column"
                  gap="10px"
                  justifyContent="center"
                  // p={["10px", "10px", "20px", "20px"]}
                  pt={["20px", "20px", "40px", "40px"]}
                >
                  <Text
                    variant="aboutHeader"
                    pb={["15px", "15px", "24px", "24px"]}
                  >
                    {el?.header}
                  </Text>
                  <Text
                    variant="aboutParagraph"
                    pb={["20px", "20px", "40px", "40px"]}
                  >
                    {el?.description}
                  </Text>
                  <Link href={el?.link}>
                    <Text variant="aboutbutton" fontWeight="600" pb="50px">
                      READ MORE &rarr;
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </AnimationOnScroll>
          );
        })}
      </Flex>

      {/* ***************************div end************************8 */}
      <Flex gap="10px" justifyContent="center" py="6" px="2">
        <Text
          as="h1"
          fontWeight="400"
          fontSize={["10px", "10px", "20px", "20px"]}
          letterSpacing="0.01em"
          color="#210011"
          fontFamily="Roboto"
          textAlign="center"
        >
          Dont hesistate to contact us for more details.
        </Text>
        <Link href="/events">
          <Text
            // as="a"
            fontWeight="400"
            fontSize={["8px", "8px", "16px", "16px"]}
            color="#FF3606"
            fontFamily="Roboto"
            alignSelf="center"
            cursor="pointer"
          >
            EXPLORE ALL TREKKING &rarr;
          </Text>
        </Link>
      </Flex>
    </>
  );
}

export default About;
