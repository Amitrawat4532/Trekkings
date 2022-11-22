import React, { useRef } from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ButtonGroup } from "@chakra-ui/react";
import jump from "jump.js";

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
            height={["140", "170", "256", "200"]}
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
          pr="6"
          display={["none", "none", "flex", "flex"]}
          position="relative"
          top="-5px"
        >
          <Button
            variant="navButton"
            link="latestblog"
            onClick={() => jump(".home_container", { duration: 1000 })}
          >
            Home
          </Button>
          <Button
            variant="navButton"
            onClick={() => jump(".about_container", { duration: 2000 })}
          >
            About Us
          </Button>
          <Button
            variant="navButton"
            onClick={() => jump(".service_container", { duration: 3000 })}
          >
            Service
          </Button>
          <Button
            variant="navButton"
            onClick={() => jump(".gallery_container", { duration: 4000 })}
          >
            Gallery
          </Button>
          <Button
            variant="blogButton"
            onClick={() => jump(".blogs_container", { duration: 5000 })}
          >
            Latest Blog
          </Button>
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
          fontSize="40px"
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent backdropFilter="blur(20px)" bg="rgba(255,255,255,0.5)">
            <DrawerCloseButton fontSize="30px" color="red" m="4" />

            {/* Navbar container desktop */}

            <Flex
              flexDirection="column"
              justifyContent="center"
              display={["flex", "flex", "none", "none"]}
              alignItems="center"
              height="100%"
            >
              <Button
                variant="responsiveNavButton"
                onClick={() => {
                  onClose();
                  jump(".home_container", { duration: 1000 });
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  jump(".about_container", { duration: 2000 });
                }}
                variant="responsiveNavButton"
              >
                About Us
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  jump(".service_container", { duration: 3000 });
                }}
                variant="responsiveNavButton"
              >
                Service
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  jump(".gallery_container", { duration: 4000 });
                }}
                variant="responsiveNavButton"
              >
                Gallery
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  jump(".blogs_container", { duration: 5000 });
                }}
                variant="responsiveNavButton"
              >
                Latest Blog
              </Button>
            </Flex>

            {/* ***************Navbar  footer mobile view******************** */}
            <DrawerFooter borderTopWidth="1px">
              <Flex
                height="4vh"
                width="100%"
                justifyContent="space-evenly"
                mb="15px"
              >
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image h="30px" w="30px" src="./images/instagram.png" />
                </a>
                <a href="tel:+91 1234567890" target="_blank" rel="noreferrer">
                  <Image h="30px" w="30px" src="./images/viber.png" />
                </a>
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image h="30px" w="30px" src="./images/gmail.png" />
                </a>
                <a
                  href="https://wa.me/8080463271"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image h="30px" w="30px" src="./images/whatsapp.png" />
                </a>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
