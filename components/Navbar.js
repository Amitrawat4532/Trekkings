import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import jump from "jump.js";
import React, { useRef } from "react";

import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = ({ settings }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      {/* main container */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pl={["0", "0", "10px", "10px"]}
        pr="30px"
        position="absolute"
        w="100%"
        // border="2px solid white"
        zIndex="5"
      >
        <Box>
          <Image
            src={settings?.logo}
            alt="IGATPURIHILLSTREKTOURISM LOGO"
            width={["140px", "140px", "200px", "200px"]}
            // height={["120", "140", "256", "200"]}
            h="100%"
            // bgColor="black"
            // borderRadius="50%"
            mt="1"
            className="footerImg"
            filter="contrast(135%)"
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
            variant="navButton"
            onClick={() => jump(".blogs_container", { duration: 5000 })}
          >
            Latest Blog
          </Button>
          <Link href="/contact">
            <Button variant="blogButton">Contact Us</Button>
          </Link>
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
              <Link href="/contact">
                <Button variant="responsiveNavButton">Contact Us</Button>
              </Link>
            </Flex>

            {/* ***************Navbar  footer mobile view******************** */}
            <DrawerFooter borderTopWidth="1px">
              <Flex
                height="4vh"
                width="100%"
                justifyContent="space-evenly"
                alignItems="center"
                py="6"
              >
                <a
                  href={`tel:${settings?.contact}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    h="30px"
                    w="30px"
                    src="./images/viber.png"
                    alt="call icon"
                  />
                </a>
                <a
                  href={`https://wa.me/91${settings?.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    h="30px"
                    w="30px"
                    src="./images/whatsapp.png"
                    alt="whatsapp icon"
                  />
                </a>
                <a
                  href={`mailto:${settings?.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    h="30px"
                    w="30px"
                    src="./images/gmail.png"
                    alt="gmail icon"
                  />
                </a>
                <a href={settings?.instagram} target="_blank" rel="noreferrer">
                  <Image
                    h="30px"
                    w="30px"
                    src="./images/instagram.png"
                    alt="instagram icon"
                  />
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
