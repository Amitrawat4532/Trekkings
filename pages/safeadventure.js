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
        >
          &larr; Back
        </Button>
      </Link>

      <Flex wrap="wrap">
        <Flex direction="column" p="10" flex="1">
          <Text variant="secretLocationHeader">SAFE ADVENTURE</Text>
          <Text variant="secretLocationText">
            Hampta Pass is a beautiful crossover trek that spreads across the
            lush green valleys of Kullu-Manali to the arid and barren landscapes
            of Chandra Valley in Lahaul. This trek presents the amalgamation of
            distinct landscapes and cultures, which is a unique experience in
            itself. The trek entwines along rocky paths, grasslands, gushing
            streams, cascading waterfalls, hanging glaciers, and the beautiful
            crescent-shaped emerald lake ‘Chandratal’. Get to witness the
            confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti,
            which is quite a surreal experience and not to mention a close
            encounter with the Buddhist culture and the lifestyle in the remote
            Himalayan villages. The inhabitants of Sethan are originally
            migrants from Tibet and Spiti Valley and you will get to observe
            their distinct culture and traditions.
          </Text>
        </Flex>
        <Image
          flex="1"
          src="/images/safeadventure.png"
          h={["300px", "300px", "450px", "450px"]}
          w="80%"
          ml="4"
          borderLeft="20px solid #FF4417"
          borderBottom="20px solid #FF4417"
          borderTopLeftRadius={["50px", "50px", "0", "0"]}
          borderBottomLeftRadius="85px"
        />
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        direction={["column-reverse", "column-reverse", "row", "row"]}
        py="50px"
      >
        <Image
          flex="1"
          src="/images/safeadventure2.png"
          h="300px"
          w="100%"
          borderTopRightRadius="85px"
          borderBottomRightRadius="85px"
          borderRight="20px solid #FF4417"
          borderBottom="20px solid #FF4417"
          borderTop="20px solid #FF4417"
        />
        <Flex p="10" flex="1">
          <Text variant="secretLocationText">
            Hampta Pass is a beautiful crossover trek that spreads across the
            lush green valleys of Kullu-Manali to the arid and barren landscapes
            of Chandra Valley in Lahaul. This trek presents the amalgamation of
            distinct landscapes and cultures, which is a unique experience in
            itself. The trek entwines along rocky paths, grasslands, gushing
            streams, cascading waterfalls, hanging glaciers, and the beautiful
            crescent-shaped emerald lake ‘Chandratal’. Get to witness the
            confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti,
            which is quite a surreal experience and not to mention a close
            encounter with the Buddhist culture and the lifestyle in the remote
            Himalayan villages. The inhabitants of Sethan are originally
            migrants from Tibet and Spiti Valley and you will get to observe
            their distinct culture and traditions.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Safeadventure;
