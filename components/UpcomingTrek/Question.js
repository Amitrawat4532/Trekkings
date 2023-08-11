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

const Question = ({data}) => {
  return (
    <>
      <Flex
        minH="auto"
        my={['30','30','40','40']}
        mx='auto'
        borderRadius={'30'}
        maxW={["90vw","90vw","80vw","80vw"]}
        padding={["28px 20px","28px 20px","50px 100px","50px 100px"]}
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


        <Accordion color={'white'} w='100%' my='10' defaultIndex={[0]} allowMultiple>
          {
            data?.map((el,id)=>{
              return  <AccordionItem py='4' key={id}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                    color= '#FFF'
                    fontFamily= 'Inter'
                    fontSize= {['14px','14px','18px','18px']}
                    fontStyle= 'normal'
                    fontWeight= '700'
                    lineHeight= '120%' /* 21.6px */
                    >
                      {el?.question}
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
                  fontSize= {['14px','14px','18px','18px']}
                  fontStyle= 'normal'
                  fontWeight= '400'
                  lineHeight= '140%' /* 22.4px */
                  >
  
                {el?.answer}
                  </Text>
              </AccordionPanel>
            </AccordionItem>
            })
          }
         
        </Accordion>
      </Flex>
    </>
  );
};

export default Question;
