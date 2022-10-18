import { Box, Button, Flex, Image, Text, Input } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* ***********IMAGE********** */}
      <Flex
        background="#FF4417"
        width="100%"
        height={["121px", "200px", "210px", "300px"]}
      >
        <Image src="./images/footer1.png" />
        <Image src="./images/footer2.png" />
      </Flex>
      {/* ***********end************** */}

      {/* ***********footer links div******* */}
      <Flex
        background="black"
        width="100%"
        justifyContent="center"
        flexWrap="wrap"
      >
        {/* *****footer logo***** */}
        <Flex
          width={["250px", "350px", "450px", "555px"]}
          height={["180px", "180px", "288px", "288px"]}
        >
          <Image src="./images/footerlogo.png" width="100%" height="100%" />
        </Flex>
        {/* *****end***** */}

        {/* *********main link div******** */}
        <Flex
          //   gap="100px"

          width={["58%", "64%", "54%", "54%"]}
          justifyContent="start"
          margin="auto"
        >
          <Box width={["376px"]}>
            <Text variant="footerQuicklink">QUICK LINKS</Text>

            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              ABOUT US
            </Text>
            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              TREKKING
            </Text>
            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              GALLERY
            </Text>
            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              OUR TEAM
            </Text>
          </Box>
          <Box width="376px">
            <Text variant="footerQuicklink">USEFUL LINKS</Text>

            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              SUPPORT
            </Text>

            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              DISCLAMAIR
            </Text>

            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              ELEMENT
            </Text>

            <Text variant="footerQuicklinks">
              <Text as="span" variant="footerQuicklinksSpan">
                &#9830;
              </Text>
              PRIVACY POLICY
            </Text>
          </Box>
        </Flex>
        {/* ***************** */}
      </Flex>
      {/* ***********end footer links div******* */}

      <Flex
        backgroundColor="black"
        height="200px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="20px"
        pb="30px"
      >
        <Text
          as="h1"
          fontWeight="400"
          fontSize={["20px", "24px", "28px", "30px"]}
          letterSpacing="0.02em"
          color="#FF3606"
          fontFamily="anton"
        >
          CONNECT WITH US--
        </Text>
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          justifyContent="center"
          gap={["10px", "10px", "0px", "0px"]}
        >
          <Input
            type="email"
            placeHolder="enter your email I'd"
            background="#fffff"
            width={["250px", "300px", "350px", "400px"]}
            height={["38px", "45px", "55px", "60px"]}
            borderRadius={["50px", "50px", "0px", "0px"]}
            fontSize={["15px", "12px", "15px", "15px"]}
            color="black"
          />
          <Button variant="footerButton">Send</Button>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
