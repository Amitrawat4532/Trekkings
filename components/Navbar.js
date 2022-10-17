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
          <Button
            fontSize="25px"
            color="white"
            bg="transparent"
            h="100%"
            border="0"
            borderRadius="0"
            m="0"
            px="4"
            py="2"
            fontFamily="anton"
            fontWeight="200"
          >
            Home
          </Button>
          <Button
            fontSize="25px"
            color="white"
            bg="transparent"
            h="100%"
            border="0"
            borderRadius="0"
            m="0"
            px="4"
            py="2"
            fontFamily="anton"
            fontWeight="200"
          >
            About Us
          </Button>
          <Button
            fontSize="25px"
            color="white"
            bg="transparent"
            h="100%"
            border="0"
            borderRadius="0"
            m="0"
            px="4"
            py="2"
            fontFamily="anton"
            fontWeight="200"
          >
            Service
          </Button>
          <Button
            fontSize="25px"
            color="white"
            bg="transparent"
            h="100%"
            border="0"
            borderRadius="0"
            m="0"
            px="4"
            py="2"
            fontWeight="200"
            fontFamily="anton"
          >
            Gallery
          </Button>
          <Button
            fontSize="25px"
            color="white"
            bg="#FF3606"
            h="100%"
            border="0"
            borderRadius="0"
            m="0"
            px="4"
            py="2"
            fontFamily="anton"
            fontWeight="200"
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
            {/* ***************Navbar******************** */}

            <Flex
              flexDirection="column"
              justifyContent="center"
              display={["flex", "flex", "none", "none"]}
              alignItems="center"
              height="100%"
            >
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="200"
              >
                Home
              </Button>
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="200"
              >
                About Us
              </Button>
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="200"
              >
                Service
              </Button>
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="200"
              >
                Gallery
              </Button>
              <Button
                fontSize="25px"
                color="black"
                bg="transparent"
                h="100px"
                w="100%"
                fontFamily="anton"
                fontWeight="200"
              >
                Latest Blog
              </Button>
            </Flex>

            {/* ***************Navbar******************** */}
            <DrawerFooter borderTopWidth="1px">
              <Flex height="6vh" width="100%" justifyContent="space-evenly">
                <Image src="./images/instagram.png" />
                <Image src="./images/viber.png" />
                <Image src="./images/gmail.png" />
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
