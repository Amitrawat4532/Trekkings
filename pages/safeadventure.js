import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Safeadventure = () => {
  return (
    <Box p="0" m="0" minH="100vh" overflow="hidden" position="relative">
      <Link href="/">
        <Button
          position="absolute"
          mt="2"
          ml="2"
          bg="transparent"
          color="mainOrange"
          fontWeight="normal"
          fontSize="22px"
          fontFamily="anton"
          textAlign="center"
        >
          <Text as="span" pb="2" pr="1">
            &larr;
          </Text>
          Back
        </Button>
      </Link>

      <Flex direction={["column", "column", "row", "row"]} alignItems="end">
        <Flex direction="column" px="10" py="70px" flex="1">
          <Text variant="secretLocationHeader">SAFE ADVENTURE</Text>
          <Text variant="secretLocationText">
            Adventures are some of the moments in life, which makes our heart
            pump faster and gives us the feeling of being alive and full. It is
            an exciting experience very different from our normal daily routine.
            The adventure also brings with it a certain amount of risk. It
            brings thrill with it, and we can feel the wind rushing. Some people
            love adventures and live for them. Others use it as a means of
            escape from their normal lives. Whatever be the reason, adventure
            makes people feel great about being able to live those moments.
            <br />
            Any activity which excites us, makes us feel alive and has a thrill
            to it is defined as an adventure. Adventurous activities bring a
            fresh flavour to our lives and make us feel good emotionally and
            physically. The experience is the one which actually makes adventure
            what it is. It’s not only about the end of the summit but also the
            tough climb which challenges us and tells us how important every
            step in our lives is.
          </Text>
        </Flex>
        <Image
          flex="1"
          src="/images/safeadventure.png"
          h={["250px", "250px", "450px", "450px"]}
          w={["90%", "90%", "100%", "100%"]}
          borderLeft="20px solid #FF4417"
          borderBottom="20px solid #FF4417"
          borderTop="20px solid #FF4417"
          borderTopLeftRadius={["50px", "50px", "50px", "50px"]}
          borderBottomLeftRadius="85px"
        />
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="start"
        wrap="wrap"
        direction={["column-reverse", "column-reverse", "row", "row"]}
        pt={["0px", "0px", "50px", "70px"]}
        pb="50px"
      >
        <Image
          flex="1"
          src="/images/safeadventure2.png"
          h="300px"
          w={["90%", "90%", "100%", "100%"]}
          borderTopRightRadius="85px"
          borderBottomRightRadius="85px"
          borderRight="20px solid #FF4417"
          borderBottom="20px solid #FF4417"
          borderTop="20px solid #FF4417"
        />
        <Flex p="10" flex="1">
          <Text variant="secretLocationText">
            Whatever adventure sport you chose, it is also very important that
            all the safety measures must also be taken into account, so that to
            avoid any kind of eventuality. Adventure is good for your mind and
            body, but with a little slip of alertness, things could turn out to
            be undesirable. Nobody would ever want an adventure trip to turn out
            hazardous and threatening; therefore, it must be ensured that safety
            has been given the priority.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Safeadventure;
