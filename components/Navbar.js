import React, { useRef } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          width="2em"
          height="2em"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton fontSize="30px" fontWeight="900" color="red" />
            {/* ***************Navbar******************** */}

            <Flex
              flexDirection="column"
              // justifyContent="center"
              display={["flex", "flex", "none", "none"]}
              // alignItems="center"
              height="100vh"
              border="2px solid black"
            >
              <Button
                fontSize="15px"
                color="black"
                bg="transparent"
                h="80%"
                fontWeight="800"
                marginTop="50px"
              >
                Home
              </Button>
              <Button
                fontSize="15px"
                color="black"
                bg="transparent"
                h="100%"
                fontWeight="800"
              >
                About Us
              </Button>
              <Button
                fontSize="15px"
                color="black"
                bg="transparent"
                h="100%"
                fontWeight="800"
              >
                Service
              </Button>
              <Button
                fontSize="15px"
                color="black"
                bg="transparent"
                h="100%"
                fontWeight="800"
              >
                Gallery
              </Button>
              <Button
                fontSize="15px"
                color="black"
                bg="transparent"
                h="100%"
                fontWeight="800"
              >
                Latest Blog
              </Button>
            </Flex>

            {/* ***************Navbar******************** */}
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Navbar;
