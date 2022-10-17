import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Blog = () => {
  const vlogs = [
    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },

    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },

    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },

    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },
  ];
  return (
    <>
      <Flex
        background="  #FF4417"
        width="100%"
        heigh="100%"
        flexDirection="column"
      >
        {/* Title */}
        <Flex width="100%" height={["90px", "100px", "150px", "180px"]}>
          <Flex
            position="relative"
            width="100%"
            heigh="100px"
            alignSelf="start"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              as="h1"
              fontWeight="400"
              fontSize={["46px", "60px", "90px", "100px"]}
              letterSpacing="0.04em"
              color="white"
              opacity="0.5"
              padding="0px 20px"
              fontFamily="anton"
            >
              OUR VLOGS
            </Text>

            <Text
              as="h3"
              fontWeight="400"
              fontSize={["10px", "15px", "20px", "30px"]}
              letterSpacing="0.04em"
              color="black"
              position="absolute"
              textAlign="center"
              fontFamily="anton"
            >
              LATEST VLOG
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="5%"
          alignItems="center"
        >
          {vlogs.map((el, key) => {
            return (
              <Flex alignItems="center" key={key}>
                <Flex
                  // width="545px"
                  // height="405px"
                  flexDirection="column"
                  p="20px 0px 20px 0px"
                  alignItems={["center", "center", "start", "start"]}
                >
                  <Image
                    src={el.Image}
                    borderRadius="61px"
                    width={["250px", "350px", "400px", "500px"]}
                    height={["200px", "250px", "300px", "405px"]}
                  />
                  <Text
                    fontWeight="700"
                    fontSize={["15px", "20px", "30px", "30px"]}
                    letterSpacing="0.02em"
                    color="#000000"
                    fontFamily="anton"
                  >
                    {el.header}
                  </Text>
                  <Text
                    fontWeight="400"
                    fontSize={["15px", "20px", "30px", "35px"]}
                    letterSpacing="0.02em"
                    color="white"
                    fontFamily="anton"
                  >
                    {el.date}
                  </Text>
                  <Text
                    fontWeight="400"
                    fontSize={["10px", "13px", "17px", "23px"]}
                    letterSpacing="0.02em"
                    color="white"
                    fontFamily="anton"
                  >
                    {el.paragraph}
                  </Text>
                  <Text
                    fontWeight="400"
                    fontSize={["10px", "15px", "20px", "25px"]}
                    letterSpacing="0.02em"
                    color="#000000"
                    fontFamily="anton"
                  >
                    {el.readmore_button}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default Blog;
