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
            <Text variant="blogMainheader" id="latestblog">
              OUR VLOGS
            </Text>

            <Text variant="blogMainheader1">LATEST VLOG</Text>
          </Flex>
        </Flex>

        {/* card container */}
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
                  <Text variant="blogHeader">{el.header}</Text>
                  <Text variant="blogDate">{el.date}</Text>
                  <Text variant="blogParagraph">{el.paragraph}</Text>
                  <Text variant="blogReadmore">{el.readmore_button}</Text>
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
