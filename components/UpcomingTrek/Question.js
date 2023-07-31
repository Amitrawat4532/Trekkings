import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Question = () => {
  return (
    <>
      <Flex
        minH="80vh"
        maxW="100vw"
        padding={["28px 30px","28px 30px","113px 130px","113px 130px"]}
        justifyContent="flex-start"
        alignItems="start"
        bgColor={"#241314"}
        flexDirection={"column"}
      >
        <Text
          color= "white"
          fontSize= '32'
          fontFamily= "Inter"
          fontWeight= "700"
        >
          Frequently Asked Questions
        </Text>


        <Accordion color={'white'} w='100%' my='16' defaultIndex={[0]} allowMultiple>
          <AccordionItem py='4'>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text
                  color= '#FFF'
                  fontFamily= 'Inter'
                  fontSize= '18px'
                  fontStyle= 'normal'
                  fontWeight= '700'
                  lineHeight= '120%' /* 21.6px */
                  >
                    Section 1 title
                    </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text
                color= '#939393'
                /* Text/3 regular */
                fontFamily= 'Inter'
                fontSize= '16px'
                fontStyle= 'normal'
                fontWeight= '400'
                lineHeight= '140%' /* 22.4px */
                >

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
                </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
};

export default Question;
