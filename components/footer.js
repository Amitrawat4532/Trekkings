import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* ***********IMAGE********** */}
      <Flex background="#FF4417" width="100%" height="300px">
        <Image src="./images/footer1.png" />
        <Image src="./images/footer2.png" />
      </Flex>
      {/* ***********end************** */}

      {/* ***********footer links div******* */}
      <Flex
        background="black"
        border="2px solid blue"
        width="100%"
        justifyContent="end"
      >
        {/* *****footer logo***** */}
        <Flex width="300px" height="300px" border="2px solid blue">
          <Image
            src="./images/footerlogo.png"
            width="100%"
            height="100%"
            border="2px solid blue"
          />
        </Flex>
        {/* *****end***** */}

        {/* *********main link div******** */}
        <Flex
          //   gap="100px"
          border="2px solid blue"
          width="70%"
          justifyContent="end"
        >
          <Box border="2px solid blue" width="200px">
            <Text as="h1" color="#FFFFFF">
              QUICK LINKS
            </Text>

            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>
              ABOUT US
            </Text>
            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>{" "}
              TREKKING
            </Text>
            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>{" "}
              GALLERY{" "}
            </Text>
            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>{" "}
              OUR TEAM
            </Text>
          </Box>
          <Box border="2px solid blue" width="300px">
            <Text as="h1" color="#FFFFFF">
              USEFUL LINKS
            </Text>
            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>{" "}
              SUPPORT
            </Text>
            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>{" "}
              DISCLAMAIR
            </Text>
            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>{" "}
              ELEMENT
            </Text>
            <Text as="h3" color="#FFFFFF">
              <Text as="span" color="red">
                &#9830;
              </Text>{" "}
              PRIVACY POLICY
            </Text>
          </Box>
        </Flex>
        {/* ***************** */}
      </Flex>
      {/* ***********end footer links div******* */}
    </>
  );
};
export default Footer;
