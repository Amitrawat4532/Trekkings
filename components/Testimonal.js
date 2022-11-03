import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Testimonal = () => {
  return (
    <>
      {/* Header container*/}
      <Flex
        width="100%"
        height="100%"
        background="#606060"
        flexDirection="column"
        justifyContent="space-evenly"
        minHeight="60vh"
        py="5"
      >
        <Flex
          position="relative"
          width="100%"
          heigh="auto"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="testimonalHeader1">TESTIMONALS</Text>

          <Text variant="testimonalHeader2">WHAT THEY SAY ABOUT US</Text>
        </Flex>
        {/* $$$$$$$$$$$$$testimonal container$$$$$$$$$$$$4 */}
        <Flex background="#606060">
          <Image
            src="./images/leftarrow.png"
            width={["60px", "65px", "76px", "76px"]}
            height={["62px", "68px", "78px", "78px"]}
            alignSelf="center"
          />
          {/* Main Testimonal */}
          <Flex
            width="100%"
            background="#606060"
            justifyContent="center"
            alignItems="center"
            gap="5%"
            padding={["20px", "30px", "40px", "70px"]}
            flexDirection={["column", "column", "row", "row"]}
          >
            <Flex
              // width={["100%", "100%", "240px", "30%"]}
              width={["100px", "100px", "200px", "200px"]}
              height="100%"
              justifyContent="center"
              position="relative"
            >
              <Image
                src="./images/testimonal.png"
                //  width="100%"
                //  height="100%"
                width={["100px", "100px", "200px", "200px"]}
                height={["100px", "100px", "178px", "178px"]}
              />
              <Box
                width={["50px", "50px", "60px", "60px"]}
                height={["50px", "50px", "60px", "60px"]}
                borderRadius="50px"
                background="#ABAAAA"
                p="15px"
                position="absolute"
                right="-10px"
                top="-10px"
              >
                <Image src="./images/uppercoma.png" />
              </Box>
            </Flex>
            <Flex
              width={["100%", "100%", "60%", "68%"]}
              flexDirection="column"
              justifyContent="center"
            >
              <Text variant="testimonalParagraph">
                Trekking has always helped me in getting mental peace and a
                peaceful time to spend with inner me. and i would specially
                thanx to this company for helping me to connect with my inner
                spirit.
              </Text>
              <Flex
                width="100%"
                justifyContent={["center", "center", "start", "start"]}
              >
                <Image src="./images/stars.png" width="162px" height="30px" />
              </Flex>
              <Text variant="testimonalHeading1">NELSON MANDELA</Text>
              <Text variant="testimonalHeading2">PRESIDENT OF AMERICA</Text>
            </Flex>
          </Flex>
          <Image
            src="./images/rightarrow.png"
            width={["60px", "65px", "76px", "76px"]}
            height={["62px", "68px", "78px", "78px"]}
            alignSelf="center"
          />
        </Flex>
      </Flex>
    </>
  );
};
export default Testimonal;
