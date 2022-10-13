import { Flex, Image, Text, HStack, Box } from "@chakra-ui/react";
import React from "react";

const Whytrekking = () => {
  const Icons = [
    {
      image: "./images/icon1.png",
      heading: "EXPLORATION",
    },

    {
      image: "./images/icon2.png",
      heading: "PROVIDE EQUIPMENTS",
    },

    {
      image: "./images/icon3.png",
      heading: "ADVENTURES",
    },

    {
      image: "./images/icon4.png",
      heading: "PROFESSIONAL GUIDE",
    },
  ];
  return (
    <>
      <Flex
        backgroundColor="black"
        width="100%"
        height="100%"
        flexDirection="column"
      >
        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "start", "start"]}
          position="relative"
          backgroundColor="black"
          p={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
        >
          <Text
            as="h1"
            fontWeight="800"
            fontSize={["35px", "33px", "47px", "60px"]}
            color="#FFFFFF"
            opacity="0.19"
            m="0"
            textAlign={["center", "center", "start", "start"]}
            textTransform="uppercase"
          >
            WHY TREKKING WITH US?
          </Text>

          <Text
            as="h3"
            position="absolute"
            fontSize={["10px", "12px", "13px", "15px"]}
            fontWeight="800"
            color="#FFFFFF"
            //textAlign="center"
            // pl="1"
            // m="auto"
            // p={["31", "31", "0", "0"]}
            // padding="40px 0px 0px 40px"
            p="1px  0px 1px 1px"
          >
            WE PROVIDE BEST HIKING AND TREKKING TO YOUR JOURNEY
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          width="100%"
          // height="20%"
          padding="40px 40px 40px 40px"
        >
          <Image
            src="/images/gallery_4.png"
            borderRadius="41px"
            width={["349px", "400px", "1304px", "1304px"]}
            height={["349px", "450px", "500px", "500px"]}
          />
        </Flex>

        <Flex key={"id"} justifyContent="space-evenly">
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            w="100%"
            h="100%"
            m={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
          >
            {Icons.map((el, key) => {
              return (
                <Flex
                  key={key}
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  mx="2"
                  my="4"
                >
                  <Image
                    src={el.image}
                    h={["40px", "40px", "60px", "90px"]}
                    w={["30px", "30px", "100px", "130px"]}
                  />
                  <Text
                    color="#FFFFFF"
                    fontSize={["10px", "20px", "30px", "30px"]}
                    fontWeight="800"
                    textAlign="center"
                  >
                    {el.heading}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Whytrekking;
