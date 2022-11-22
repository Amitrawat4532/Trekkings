import { Box, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Professionalhikers = () => {
  return (
    <Box
      p="0"
      m="0"
      minH="100vh"
      overflow="hidden"
      position="relative"
      bgImg="url('/images/professionalhikers.png')"
      bgSize="100%"
      bgRepeat="no-repeat"
    >
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
          &larr; Back
        </Button>
      </Link>
    </Box>
  );
};

export default Professionalhikers;
