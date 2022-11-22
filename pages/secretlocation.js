import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Secretlocation = () => {
  const secretlocation = [
    {
      title: "Hampta Pass Trek",
      description:
        "Hampta Pass is a beautiful crossover trek that spreads across the lush green valleys of Kullu-Manali to the arid and barren landscapes of Chandra Valley in Lahaul. This trek presents the amalgamation of distinct landscapes and cultures, which is a unique experience in itself. The trek entwines along rocky paths, grasslands, gushing streams, cascading waterfalls, hanging glaciers, and the beautiful crescent-shaped emerald lake ‘Chandratal’. Get to witness the confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti, which is quite a surreal experience and not to mention a close encounter with the Buddhist culture and the lifestyle in the remote Himalayan villages. The inhabitants of Sethan are originally migrants from Tibet and Spiti Valley and you will get to observe their distinct culture and traditions.",
      image: "/images/l2.jpg",
      bg: "white",
    },
    {
      title: "Hampta Pass Trek",
      description:
        "Hampta Pass is a beautiful crossover trek that spreads across the lush green valleys of Kullu-Manali to the arid and barren landscapes of Chandra Valley in Lahaul. This trek presents the amalgamation of distinct landscapes and cultures, which is a unique experience in itself. The trek entwines along rocky paths, grasslands, gushing streams, cascading waterfalls, hanging glaciers, and the beautiful crescent-shaped emerald lake ‘Chandratal’. Get to witness the confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti, which is quite a surreal experience and not to mention a close encounter with the Buddhist culture and the lifestyle in the remote Himalayan villages. The inhabitants of Sethan are originally migrants from Tibet and Spiti Valley and you will get to observe their distinct culture and traditions.",
      image: "/images/l2.jpg",
      bg: "rgba(0, 0, 0, 0.5)",
    },
    {
      title: "Hampta Pass Trek",
      description:
        "Hampta Pass is a beautiful crossover trek that spreads across the lush green valleys of Kullu-Manali to the arid and barren landscapes of Chandra Valley in Lahaul. This trek presents the amalgamation of distinct landscapes and cultures, which is a unique experience in itself. The trek entwines along rocky paths, grasslands, gushing streams, cascading waterfalls, hanging glaciers, and the beautiful crescent-shaped emerald lake ‘Chandratal’. Get to witness the confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti, which is quite a surreal experience and not to mention a close encounter with the Buddhist culture and the lifestyle in the remote Himalayan villages. The inhabitants of Sethan are originally migrants from Tibet and Spiti Valley and you will get to observe their distinct culture and traditions.",
      image: "/images/l2.jpg",
      bg: "mainOrange",
    },
    {
      title: "Hampta Pass Trek",
      description:
        "Hampta Pass is a beautiful crossover trek that spreads across the lush green valleys of Kullu-Manali to the arid and barren landscapes of Chandra Valley in Lahaul. This trek presents the amalgamation of distinct landscapes and cultures, which is a unique experience in itself. The trek entwines along rocky paths, grasslands, gushing streams, cascading waterfalls, hanging glaciers, and the beautiful crescent-shaped emerald lake ‘Chandratal’. Get to witness the confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti, which is quite a surreal experience and not to mention a close encounter with the Buddhist culture and the lifestyle in the remote Himalayan villages. The inhabitants of Sethan are originally migrants from Tibet and Spiti Valley and you will get to observe their distinct culture and traditions.",
      image: "/images/l2.jpg",
      bg: "white",
    },
    {
      title: "Hampta Pass Trek",
      description:
        "Hampta Pass is a beautiful crossover trek that spreads across the lush green valleys of Kullu-Manali to the arid and barren landscapes of Chandra Valley in Lahaul. This trek presents the amalgamation of distinct landscapes and cultures, which is a unique experience in itself. The trek entwines along rocky paths, grasslands, gushing streams, cascading waterfalls, hanging glaciers, and the beautiful crescent-shaped emerald lake ‘Chandratal’. Get to witness the confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti, which is quite a surreal experience and not to mention a close encounter with the Buddhist culture and the lifestyle in the remote Himalayan villages. The inhabitants of Sethan are originally migrants from Tibet and Spiti Valley and you will get to observe their distinct culture and traditions.",
      image: "/images/l2.jpg",
      bg: "rgba(0, 0, 0, 0.5)",
    },
    {
      title: "Hampta Pass Trek",
      description:
        "Hampta Pass is a beautiful crossover trek that spreads across the lush green valleys of Kullu-Manali to the arid and barren landscapes of Chandra Valley in Lahaul. This trek presents the amalgamation of distinct landscapes and cultures, which is a unique experience in itself. The trek entwines along rocky paths, grasslands, gushing streams, cascading waterfalls, hanging glaciers, and the beautiful crescent-shaped emerald lake ‘Chandratal’. Get to witness the confluence of three passes, Hampta Pass, Rohtang Pass, and Spiti, which is quite a surreal experience and not to mention a close encounter with the Buddhist culture and the lifestyle in the remote Himalayan villages. The inhabitants of Sethan are originally migrants from Tibet and Spiti Valley and you will get to observe their distinct culture and traditions.",
      image: "/images/l2.jpg",
      bg: "mainOrange",
    },
  ];

  return (
    <Box p="0" m="0" minH="100vh" overflow="hidden" position="relative">
      <Link href="/">
        <Button
          position="absolute"
          mt="4"
          ml="4"
          bg="transparent"
          color="mainOrange"
          fontWeight="normal"
          fontSize="28px"
          fontFamily="anton"
        >
          &larr; Back
        </Button>
      </Link>

      {secretlocation?.map((el, id) => {
        return (
          <Flex
            key={id}
            h="100%"
            justifyContent="center"
            alignItems="start"
            px={["3", "4", "8", "10"]}
            py="80px"
            wrap="wrap"
            bg={el?.bg}
            flexDirection={id % 2 === 0 ? "row" : "row-reverse"}
          >
            <Flex alignItems="start" flex="1.2" minW="400px" order={id - 1}>
              <Flex
                alignItems="center"
                direction="column"
                order={Math.floor(Math.random() * 3)}
              >
                <Text variant="secretLocationNumber">0{id + 1}</Text>
                <Box bg="rgba(0, 0, 0, 0.5)" h="200px" w="1" />
              </Flex>
              <Flex
                minH="460px"
                //   border="1px solid black"
                mx={["2", "4"]}
                justifyContent="start"
                alignItems="center"
                flexDirection="column"
                px={["2", "4", "8", "10"]}
                py="5"
              >
                <Text variant="secretLocationHeader">Hampta Pass Trek</Text>
                <Text variant="secretLocationText">
                  Hampta Pass is a beautiful crossover trek that spreads across
                  the lush green valleys of Kullu-Manali to the arid and barren
                  landscapes of Chandra Valley in Lahaul. This trek presents the
                  amalgamation of distinct landscapes and cultures, which is a
                  unique experience in itself. The trek entwines along rocky
                  paths, grasslands, gushing streams, cascading waterfalls,
                  hanging glaciers, and the beautiful crescent-shaped emerald
                  lake ‘Chandratal’. Get to witness the confluence of three
                  passes, Hampta Pass, Rohtang Pass, and Spiti, which is quite a
                  surreal experience and not to mention a close encounter with
                  the Buddhist culture and the lifestyle in the remote Himalayan
                  villages. The inhabitants of Sethan are originally migrants
                  from Tibet and Spiti Valley and you will get to observe their
                  distinct culture and traditions.
                </Text>
                {/* <Button variant="blogButton">Book Now</Button> */}
              </Flex>
            </Flex>

            <Image
              flex="1"
              p="8"
              h={["300px", "300px", "450px", "450px"]}
              w="100%"
              src="/images/l2.jpg"
            />
          </Flex>
        );
      })}
    </Box>
  );
};

export default Secretlocation;
