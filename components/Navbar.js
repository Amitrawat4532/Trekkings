"use client";

import { isValidMotionProp, motion } from "framer-motion";
import jump from "jump.js";
import Image from "next/image";
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
  IconButton,
  chakra,
  shouldForwardProp,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ settings, logo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const router = useRouter();

  return (
    <>
      {/* main container */}
      <ChakraBox
        position="absolute"
        left="0"
        top="0"
        w="100%"
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        zIndex={10}
        backdropBlur="32px"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          pl={["0", "0", "10px", "10px"]}
          pr="30px"
          position="absolute"
          w="100%"
          zIndex="50"
        >
          {/* Logo */}
          <Box ml="10px"
          mt={['6','6','0','0']}
          width={[140,140,180,180]} height={[130,130,180,180]} position={"relative"}>
            <Image
              src="/images/finallogo.png"
              alt="IGATPURIHILLSTREKTOURISM LOGO"
              layout="fill"
              objectFit="contain"
            />
          </Box>

          {/* Navbar container desktop */}
          <Flex
            width="auto"
            flexDirection=""
            justifyContent="enter"
            gap="4"
            pr="6"
            display={["none", "none", "flex", "flex"]}
            position="relative"
          >
            <Button
              variant="navButton"
              link="latestblog"
              onClick={() => {
                if (router.route === "/") {
                  jump(".home_container", { duration: 1000 });
                } else {
                  router.push("/");
                }
              }}
              _hover={{
                transform: "scale(1.2)",
              }}
            >
              Home
            </Button>
            <Button
              variant="navButton"
              onClick={() => jump(".about_container", { duration: 2000 })}
              _hover={{
                transform: "scale(1.2)",
              }}
            >
              About Us
            </Button>
            <Button
              variant="navButton"
              onClick={() => jump(".service_container", { duration: 3000 })}
              _hover={{
                transform: "scale(1.2)",
              }}
            >
              Service
            </Button>
            <Button
              variant="navButton"
              onClick={() => jump(".gallery_container", { duration: 4000 })}
              _hover={{
                transform: "scale(1.2)",
              }}
            >
              Gallery
            </Button>
          </Flex>
          <Flex alignItems="center" display={["none", "none", "flex", "flex"]}>
            <Link href="/contact">
              <Button variant="blogButton">Lets Connect</Button>
            </Link>
          </Flex>

          <IconButton
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            aria-label="Search database"
            display={["flex", "flex", "none", "none"]}
            color="#241314"
            background={"transparent"}
            p='4'
            fontSize="40px"
          >
            <svg
              width="35"
              height="30"
              viewBox="0 0 32 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H29.25C29.8467 0 30.419 0.237053 30.841 0.65901C31.2629 1.08097 31.5 1.65326 31.5 2.25C31.5 2.84674 31.2629 3.41903 30.841 3.84099C30.419 4.26295 29.8467 4.5 29.25 4.5H2.25C1.65326 4.5 1.08097 4.26295 0.65901 3.84099C0.237053 3.41903 0 2.84674 0 2.25ZM0 13.5C0 12.9033 0.237053 12.331 0.65901 11.909C1.08097 11.4871 1.65326 11.25 2.25 11.25H29.25C29.8467 11.25 30.419 11.4871 30.841 11.909C31.2629 12.331 31.5 12.9033 31.5 13.5C31.5 14.0967 31.2629 14.669 30.841 15.091C30.419 15.5129 29.8467 15.75 29.25 15.75H2.25C1.65326 15.75 1.08097 15.5129 0.65901 15.091C0.237053 14.669 0 14.0967 0 13.5ZM13.5 24.75C13.5 24.1533 13.7371 23.581 14.159 23.159C14.581 22.7371 15.1533 22.5 15.75 22.5H29.25C29.8467 22.5 30.419 22.7371 30.841 23.159C31.2629 23.581 31.5 24.1533 31.5 24.75C31.5 25.3467 31.2629 25.919 30.841 26.341C30.419 26.7629 29.8467 27 29.25 27H15.75C15.1533 27 14.581 26.7629 14.159 26.341C13.7371 25.919 13.5 25.3467 13.5 24.75Z"
                fill={router.route === "/" ? "#241314" : "#591433"}
              />
            </svg>
          </IconButton>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="lg"
          >
            <DrawerOverlay />
            <DrawerContent
              backdropFilter="blur(5px)"
              borderRadius="12px"
              bg="rgba(255, 255, 255, 0.58)"
            >
              <DrawerCloseButton fontSize="30px" color="#571432" m="4" />

              {/* Navbar container mobile */}
              <Flex width="100%" justifyContent="center" alignItems="end">
                <Box
                  mt="100px"
                  mb="20px"
                  position="relative"
                  height="105px"
                  width="102px"
                >
                  <Image
                    src="/images/mobilenavlogo.png"
                    alt="trekkings logo"
                    layout="fill"
                  />
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="start"
                display={["flex", "flex", "none", "none"]}
                alignItems="center"
                height="100%"
              >
                <Button
                  variant="responsiveNavButtonhome"
                  onClick={() => {
                    onClose();
                    if (router.route === "/") {
                      jump(".home_container", { duration: 1000 });
                    } else {
                      router.push("/");
                    }
                  }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    if (router.route === "/") {
                      jump(".about_container", { duration: 2000 });
                    } else {
                      router.push("/");
                    }
                  }}
                  variant="responsiveNavButton"
                >
                  About Us
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    if (router.route === "/") {
                      jump(".service_container", { duration: 3000 });
                    } else {
                      router.push("/");
                    }
                  }}
                  variant="responsiveNavButton"
                >
                  Service
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    if (router.route === "/") {
                      jump(".gallery_container", { duration: 4000 });
                    } else {
                      router.push("/");
                    }
                  }}
                  variant="responsiveNavButton"
                >
                  Gallery
                </Button>
                {/* <Button
                  onClick={() => {
                    onClose();
                    jump(".blogs_container", { duration: 5000 });
                  }}
                  variant="responsiveNavButton"
                >
                  Latest Blog
                </Button> */}
                <Link href="/contact">
                  <Button variant="responsiveNavButton">Contact US</Button>
                </Link>
                <DrawerFooter
                  borderTopWidth="1px"
                  width="80%"
                  mt="50px"
                  borderTopColor="black"
                >
                  <Flex
                    gap="15px"
                    justifyContent="center"
                    width="100%"
                    mt="36px"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.4327 13.9406C25.4327 7.59738 20.2847 2.44922 13.9417 2.44922C7.59865 2.44922 2.45068 7.59738 2.45068 13.9406C2.45068 19.5025 6.40359 24.1335 11.6435 25.2022V17.3881H9.34528V13.9406H11.6435V11.0678C11.6435 8.84994 13.4476 7.04579 15.6653 7.04579H18.5381V10.4932H16.2399C15.6079 10.4932 15.0908 11.0103 15.0908 11.6424V13.9406H18.5381V17.3881H15.0908V25.3746C20.8937 24.8 25.4327 19.9047 25.4327 13.9406Z"
                        fill="#571432"
                      />
                    </svg>

                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.34 14.707C19.34 15.4343 19.1243 16.1453 18.7202 16.7501C18.3162 17.3549 17.7418 17.8262 17.0699 18.1046C16.3979 18.3829 15.6586 18.4557 14.9452 18.3138C14.2319 18.1719 13.5766 17.8217 13.0623 17.3074C12.5481 16.7931 12.1978 16.1378 12.0559 15.4244C11.914 14.7111 11.9869 13.9717 12.2652 13.2997C12.5435 12.6277 13.0149 12.0534 13.6196 11.6493C14.2243 11.2452 14.9353 11.0295 15.6626 11.0295C16.637 11.0325 17.5706 11.421 18.2596 12.11C18.9485 12.799 19.337 13.7326 19.34 14.707ZM27.1544 9.65045V19.7635C27.1544 21.4704 26.4764 23.1073 25.2695 24.3142C24.0626 25.5211 22.4258 26.1992 20.719 26.1992H10.6063C8.8995 26.1992 7.26264 25.5211 6.05577 24.3142C4.84891 23.1073 4.1709 21.4704 4.1709 19.7635V9.65045C4.1709 7.94362 4.84891 6.3067 6.05577 5.09979C7.26264 3.89288 8.8995 3.21484 10.6063 3.21484H20.719C22.4258 3.21484 24.0626 3.89288 25.2695 5.09979C26.4764 6.3067 27.1544 7.94362 27.1544 9.65045ZM21.1787 14.707C21.1787 13.616 20.8552 12.5495 20.249 11.6423C19.6429 10.7352 18.7814 10.0282 17.7735 9.61066C16.7656 9.19315 15.6565 9.08391 14.5865 9.29676C13.5165 9.5096 12.5336 10.035 11.7622 10.8064C10.9908 11.5779 10.4654 12.5608 10.2526 13.6308C10.0398 14.7009 10.149 15.81 10.5665 16.818C10.984 17.8259 11.691 18.6875 12.5981 19.2936C13.5052 19.8997 14.5717 20.2232 15.6626 20.2232C17.1256 20.2232 18.5286 19.6421 19.5631 18.6076C20.5975 17.5731 21.1787 16.17 21.1787 14.707ZM23.0173 8.73108C23.0173 8.45833 22.9365 8.1917 22.7849 7.96492C22.6334 7.73813 22.418 7.56137 22.1661 7.45699C21.9141 7.35262 21.6368 7.32531 21.3693 7.37852C21.1018 7.43173 20.8561 7.56307 20.6632 7.75594C20.4704 7.9488 20.339 8.19453 20.2858 8.46204C20.2326 8.72955 20.2599 9.00683 20.3643 9.25882C20.4687 9.51081 20.6454 9.72619 20.8722 9.87773C21.099 10.0293 21.3656 10.1101 21.6383 10.1101C22.0041 10.1101 22.3548 9.96484 22.6134 9.70622C22.8721 9.4476 23.0173 9.09683 23.0173 8.73108Z"
                        fill="#571432"
                      />
                    </svg>

                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.36478 26.9658L5.02204 20.8759C3.93004 19.0039 3.35632 16.8748 3.35988 14.7075C3.35988 7.93726 8.84772 2.44922 15.6177 2.44922C22.3877 2.44922 27.8756 7.93726 27.8756 14.7075C27.8756 21.4778 22.3877 26.9658 15.6177 26.9658C13.4515 26.9693 11.3234 26.396 9.45203 25.3048L3.36478 26.9658ZM11.1939 8.95592C11.0356 8.96575 10.8809 9.00745 10.7391 9.07851C10.6061 9.15381 10.4847 9.24795 10.3787 9.358C10.2316 9.49652 10.1483 9.61665 10.0588 9.7331C9.60576 10.3227 9.36207 11.0465 9.36623 11.79C9.36868 12.3907 9.52558 12.9754 9.77073 13.5221C10.2721 14.6278 11.097 15.7985 12.1868 16.8834C12.4491 17.1445 12.7053 17.4068 12.9811 17.6507C14.3336 18.8416 15.9453 19.7004 17.6881 20.1588L18.3856 20.2654C18.6123 20.2777 18.8391 20.2605 19.0671 20.2495C19.4241 20.2311 19.7727 20.1344 20.0882 19.9663C20.2487 19.8836 20.4053 19.7937 20.5576 19.6966C20.5576 19.6966 20.6104 19.6623 20.7109 19.5863C20.8763 19.4637 20.9781 19.3767 21.1154 19.2333C21.2171 19.1279 21.3054 19.0041 21.3728 18.8631C21.4684 18.6633 21.564 18.282 21.6032 17.9646C21.6327 17.7218 21.6241 17.5894 21.6204 17.5073C21.6155 17.3762 21.5064 17.2401 21.3875 17.1825L20.6741 16.8625C20.6741 16.8625 19.6077 16.3979 18.9568 16.1013C18.8881 16.0714 18.8146 16.0543 18.7398 16.051C18.6559 16.0424 18.5712 16.0519 18.4913 16.0787C18.4114 16.1056 18.3381 16.1492 18.2765 16.2067V16.2043C18.2703 16.2043 18.1882 16.2741 17.302 17.348C17.2511 17.4163 17.181 17.468 17.1007 17.4964C17.0203 17.5247 16.9334 17.5285 16.8509 17.5073C16.771 17.486 16.6928 17.4589 16.6167 17.4264C16.4647 17.3627 16.412 17.3382 16.3078 17.2928L16.3017 17.2903C15.6005 16.9842 14.9512 16.5706 14.3772 16.0645C14.2228 15.9297 14.0794 15.7826 13.9323 15.6404C13.45 15.1785 13.0297 14.656 12.682 14.086L12.6097 13.9696C12.5577 13.8913 12.5157 13.8069 12.4846 13.7183C12.438 13.5381 12.5594 13.3934 12.5594 13.3934C12.5594 13.3934 12.8573 13.0674 12.9958 12.8908C13.1111 12.7441 13.2187 12.5915 13.3182 12.4336C13.4628 12.2007 13.5082 11.9617 13.4322 11.7766C13.0889 10.9381 12.7335 10.1033 12.3682 9.27464C12.2959 9.11038 12.0813 8.9927 11.8864 8.96941C11.8202 8.96205 11.7541 8.9547 11.6879 8.9498C11.5232 8.94162 11.3583 8.94448 11.1939 8.95592Z"
                        fill="#571432"
                      />
                    </svg>
                  </Flex>
                </DrawerFooter>
              </Flex>
            </DrawerContent>
          </Drawer>
        </Flex>
      </ChakraBox>
    </>
  );
};

export default Navbar;
