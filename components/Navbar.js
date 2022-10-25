import React, { useRef } from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ButtonGroup } from "@chakra-ui/react";

import {
  Box,
  Button,
  Flex,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerFooter,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      {/* main container */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pl={["0", "30px", "30px", "30px"]}
        pr="30px"
        position="absolute"
        w="100%"
        // border="2px solid white"
      >
        <Box>
          <Image
            src="/images/logo.png"
            width={["200", "250", "328", "328"]}
            height={["140", "170", "256", "256"]}
          />
        </Box>

        {/* Navbar container desktop */}
        <Flex
          backgroundColor="rgba(255,255,255,0.3)"
          width="70%"
          flexDirection=""
          justifyContent="end"
          gap="2"
          transform="translateY(-30px)"
          pr="5"
          display={["none", "none", "flex", "flex"]}
        >
          <Button variant="navButton" link="latestblog">
            Home
          </Button>
          <Button variant="navButton">About Us</Button>
          <Button variant="navButton">Service</Button>
          <Button variant="navButton">Gallery</Button>
          <Button variant="blogButton">Latest Blog</Button>
        </Flex>

        <IconButton
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          aria-label="Search database"
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          color="red"
          background="tranparent"
          fontSize="50px"
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton fontSize="30px" color="red" m="4" />

            {/* Navbar container desktop */}

            <Flex
              flexDirection="column"
              justifyContent="center"
              display={["flex", "flex", "none", "none"]}
              alignItems="center"
              height="100%"
            >
              <Button variant="responsiveNavButton">Home</Button>
              <Button variant="responsiveNavButton">About Us</Button>
              <Button variant="responsiveNavButton">Service</Button>
              <Button variant="responsiveNavButton">Gallery</Button>
              <Button variant="responsiveNavButton">Latest Blog</Button>
            </Flex>

            {/* ***************Navbar  footer mobile view******************** */}
            <DrawerFooter borderTopWidth="1px">
              <Flex
                height="4vh"
                width="100%"
                justifyContent="space-evenly"
                mb="15px"
              >
                <Image src="./images/instagram.png" />
                <Image src="./images/viber.png" />
                <Image src="./images/gmail.png" />
                <Image src="./images/whatsapp.png" />
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
