import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const Footer = ({ settings }) => {
  return (
    <>
      {/* ***********IMAGE********** */}
      <Flex
        // background="#FF4417"
        bgImage="url('/images/space5.jpg')"
        bgPosition="0 -694px"
        width="100%"
        // height={["121px", "200px", "210px", "300px"]}
        h="100%"
      >
        <Image
          src="./images/footer1.png"
          alt="mountain"
          className="footerImg"
        />
        <Image
          className="footerImg"
          alt="mountain"
          src="./images/footer2.png"
          position="relative"
          top={["10px", "10px", "25px", "25px"]}
          width="50vw"
        />
      </Flex>
      {/* ***********end************** */}

      {/* ***********footer links div******* */}
      <Flex
        background="black"
        width="100%"
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        // flexWrap="wrap"
      >
        {/* *****footer logo***** */}
        <Flex
          width={["100%", "100%", "80%", "80%"]}
          height="100%"
          justifyContent="center"
        >
          <Image
            className="footerImg"
            src={settings?.logo}
            alt="IGATPURIHILLSTREKTOURISM LOGO"
            width={["150px", "150px", "300px", "300px"]}
            h="100%"
            objectFit="contain"
            filter="contrast(125%)"
          />
        </Flex>
        {/* *****end***** */}

        {/* *********main link div******** */}
        <Flex width="100%" justifyContent="center" margin="auto">
          <Box width="100%" pl={["20%", "20%", "0%", "0%"]}>
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
          <Box width="100%" pl={["10%", "10%", "0%", "0%"]}>
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
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="20px"
        pt="30px"
        pb="80px"
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
            textAlign="center"
            placeholder="ENTER YOUR EMAIL ID"
            background="#fffff"
            width={["250px", "300px", "350px", "400px"]}
            height={["38px", "45px", "50px", "50px"]}
            borderRadius={["50px", "50px", "0px", "0px"]}
            fontSize={["15px", "12px", "15px", "15px"]}
            color="black"
          />
          <Button variant="footerButton">Send</Button>
        </Flex>
        {/* <Flex
          width={["100%", "100%", "500px", "500px"]}
          justifyContent="space-evenly"
          alignItems="center"
          // py="6"
          // bg="red"
          color="white"
          fontSize={["15px", "12px", "25px", "25px"]}
          fontFamily="Anton"
        >
          <a href={`tel:${settings?.contact}`} target="_blank" rel="noreferrer">
            <Image h="50px" w="50px" src="/images/viber.png" />
          </a>
          <a
            href={`https://wa.me/91${settings?.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image h="50px" w="100%" src="/images/whatsapp.png" />
          </a>
          <a
            href={`mailto:${settings?.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image h="50px" w="100%" src="/images/gmail.png" />
          </a>
          <a href={settings?.instagram} target="_blank" rel="noreferrer">
            <Image h="50px" w="100%" src="/images/instagram.png" />
          </a>
        </Flex> */}
      </Flex>

      <Flex
        height="50px"
        justifyContent="center"
        alignItems="center"
        bgColor="black"
      >
        <Text
          fontSize={["13px", "13px", "20px", "20px"]}
          color="whiteAlpha.600"
          textAlign="center"
        >
          ?? 2022 {settings?.name}. All right reserved.
        </Text>
      </Flex>
    </>
  );
};
export default Footer;
