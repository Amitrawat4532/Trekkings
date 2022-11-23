import { Box, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Professionalhikers = () => {
  return (
    <Box p="0" m="0" minH="100vh" overflow="hidden" position="relative">
      <Link href="/">
        <Button
          position="absolute"
          mt="2"
          ml="2"
          //   bg="transparent"
          color="mainOrange"
          fontWeight="normal"
          fontSize="22px"
          fontFamily="anton"
        >
          <Text as="span" pb="2" pr="1">
            &larr;
          </Text>{" "}
          Back
        </Button>
      </Link>
      <Image
        src="/images/professionalhikers.png"
        h="100%"
        w="100%"
        fallbackSrc="/images/logo.png"
      />
    </Box>
  );
};

export default Professionalhikers;
