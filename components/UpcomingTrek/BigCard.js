import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { CopyIcon, PhoneIcon } from "@chakra-ui/icons";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// import required modules

const BigCard = (props) => {
  const {
    name,
    price,
    startDate,
    images,
    location,
    type,
    description,
    food,
    travel,
    endDate,
  } = props.data;

  const styles = {
    cardText1: {
      color: "#000",
      fontFamily: "Raleway",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "27px",
      textTransform: "capitalize",
      padding: "10px 0 6px",
    },
    cardTextSmall: {
      color: "#000",
      opacity: ".6",
      fontFamily: "Raleway",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "27px",
      textTransform: "uppercase",
      paddingTop: "5px",
    },
    cardText2: {
      color: "#78909C",
      fontFamily: "Raleway",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      padding: "8px 0",
    },
    cardText3: {
      color: "#90A4AE",
      fontFamily: "Raleway",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      textAlign: "center",
    },
    cardText4: {
      color: "#607D8A",
      fontFamily: "Raleway",
      fontSize: ["12px", "12px", "16px", "16px"],
      fontStyle: "normal",
      fontWeight: ["400", "400", "600", "600"],
      lineHeight: "normal",
      textAlign: "center",
      paddingTop: "8px",
      textTransform: "capitalize",
    },
  };

  return (
    <>
      <Flex
        // maxH={["100%", "100%", "551px", "551px"]}
        w="100%"
        minW={["auto", "auto", "450px", "450px"]}
        borderRadius="16px"
        border="1px solid #CFD8DC"
        background="#FFF"
        boxShadow="0px 4px 40px 0px rgba(0, 0, 0, 0.08)"
        overflow="hidden"
        position={"relative"}
      >
        {/* UPCOMING badge */}
        {props?.isUpcoming && (
          <Box
            position={"absolute"}
            top={3}
            left={3}
            zIndex={100}
            pr={4}
            pl={2}
            py={1}
            rounded={"full"}
            bg={"blue.400"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            display={"flex"}
            gap={2}
          >
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99983 13.7717L13.1498 16.2817C13.9098 16.7417 14.8398 16.0617 14.6398 15.2017L13.5398 10.4817L17.2098 7.30172C17.8798 6.72172 17.5198 5.62172 16.6398 5.55172L11.8098 5.14172L9.91983 0.681719C9.57983 -0.128281 8.41983 -0.128281 8.07983 0.681719L6.18983 5.13172L1.35983 5.54172C0.479829 5.61172 0.119828 6.71172 0.789828 7.29172L4.45983 10.4717L3.35983 15.1917C3.15983 16.0517 4.08983 16.7317 4.84983 16.2717L8.99983 13.7717Z"
                fill="#EAC800"
              />
            </svg>
            <Text fontSize={"sm"} fontWeight={"bold"} color={"white"}>
              UPCOMING
            </Text>
          </Box>
        )}

        <Flex flexWrap={"wrap"} direction={"row"}>
          {/* Image */}
          <Box
            position={"relative"}
            width={"100%"}
            minW={["100%", "100%", "350px", "350px"]}
            minHeight={"220px"}
            flex={1}
            background={"gray.300"}
          >
            <Image
              src={
                Array.isArray(images)
                  ? images[0]?.img_url
                  : "/images/finallogo.png"
              }
              objectFit="cover"
              fallbackSrc="/images/logo.png"
              layout="fill"
            />
            <Box position={"absolute"} bottom="3" right="3">
              <ShowImages images={images} />
            </Box>
          </Box>

          {/* Details */}
          <Flex
            h="auto"
            w="100%"
            flex="1"
            justifyContent={"space-between"}
            px="22px"
            py="8px"
            direction={"column"}
            alignItems={"space-between"}
          >
            {/* Card Text */}
            <Flex direction={"column"}>
              <Text style={styles.cardText1}>
                {name}{" "}
                {type === "corporate" && (
                  <Text as="span" color={"gray.400"} fontSize="18px">
                    ( {type} )
                  </Text>
                )}
              </Text>
              <Text
                style={styles.cardText2}
                h={"auto"}
                // maxH={"50px"}
                w="auto"
                wordWrap="break-word"
                // overflow="hidden"
                my="3"
                // textOverflow="ellipsis"
              >
                {description}
              </Text>
            </Flex>

            <Divider color="red" h="1px" w="100%" mb="12px" />

            {/* Card Details */}
            <Flex
              flexWrap={"wrap"}
              justifyContent={"space-around"}
              alignItems={"flex-start"}
              gap={["5", "5", "3", "3"]}
            >
              {/* Location */}
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                flex="1"
                minW="20px"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 23 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 9.75C13.25 10.2141 13.0656 10.6592 12.7374 10.9874C12.4092 11.3156 11.9641 11.5 11.5 11.5C11.0359 11.5 10.5908 11.3156 10.2626 10.9874C9.93437 10.6592 9.75 10.2141 9.75 9.75C9.75 9.28587 9.93437 8.84075 10.2626 8.51256C10.5908 8.18437 11.0359 8 11.5 8C11.9641 8 12.4092 8.18437 12.7374 8.51256C13.0656 8.84075 13.25 9.28587 13.25 9.75Z"
                    stroke="#241314"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.125 10.625C21.125 15.9415 17.625 22 11.5 29C5.375 22 1.875 15.9415 1.875 10.625C1.875 8.07229 2.88906 5.62413 4.6941 3.8191C6.49913 2.01406 8.94729 1 11.5 1C14.0527 1 16.5009 2.01406 18.3059 3.8191C20.1109 5.62413 21.125 8.07229 21.125 10.625Z"
                    stroke="#241314"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
                <Text style={styles.cardText4}>{location}</Text>
              </Flex>

              {/* Date */}
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                flex="1"
                minW="20px"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 28C11.2311 28 8.52431 27.1789 6.22202 25.6406C3.91973 24.1022 2.12532 21.9157 1.06569 19.3576C0.00606596 16.7994 -0.271181 13.9845 0.269012 11.2687C0.809205 8.55301 2.14258 6.05845 4.10051 4.10051C6.05845 2.14258 8.55301 0.809205 11.2687 0.269012C13.9845 -0.271181 16.7994 0.00606596 19.3576 1.06569C21.9157 2.12532 24.1022 3.91973 25.6406 6.22202C27.1789 8.52431 28 11.2311 28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28ZM14 2.00001C11.6266 2.00001 9.30655 2.70379 7.33316 4.02237C5.35977 5.34095 3.8217 7.21509 2.91345 9.40781C2.0052 11.6005 1.76756 14.0133 2.23058 16.3411C2.69361 18.6689 3.83649 20.8071 5.51472 22.4853C7.19296 24.1635 9.33115 25.3064 11.6589 25.7694C13.9867 26.2325 16.3995 25.9948 18.5922 25.0866C20.7849 24.1783 22.6591 22.6402 23.9776 20.6668C25.2962 18.6935 26 16.3734 26 14C26 10.8174 24.7357 7.76516 22.4853 5.51472C20.2348 3.26429 17.1826 2.00001 14 2.00001Z"
                    fill="#241314"
                  />
                  <path
                    d="M18.59 20L13 14.41V5H15V13.58L20 18.59L18.59 20Z"
                    fill="#241314"
                  />
                </svg>

                <Text style={styles.cardText4}>
                  {moment(startDate, "YYYY-MM-DD HH:mm").format("DD MMM YY")} -
                  {moment(endDate, "YYYY-MM-DD HH:mm").format("DD MMM YY")}
                </Text>
              </Flex>

              {/* Food / Meals */}
              {food && (
                <Flex
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flex="1"
                  minW="20px"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 40 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9997 0.447L19.1047 0V0.00299931L19.1017 0.00699997L19.0957 0.0199995L19.0748 0.0629997C18.9702 0.286558 18.8735 0.513696 18.7847 0.743999C18.564 1.31425 18.3914 1.90196 18.2687 2.501C18.0047 3.822 17.9177 5.779 19.2927 7.154C19.9177 7.779 20.0047 8.822 19.7687 10.001C19.6291 10.6809 19.4109 11.3424 19.1187 11.972L19.1067 11.997L19.1047 12L19.9997 12.447C20.8937 12.894 20.8947 12.893 20.8947 12.893V12.891L20.8977 12.887L20.9037 12.874L20.9247 12.831L20.9948 12.681C21.3231 11.9479 21.57 11.181 21.7308 10.394C21.9948 9.072 22.0817 7.115 20.7067 5.74C20.0817 5.115 19.9948 4.072 20.2308 2.893C20.3704 2.21307 20.5886 1.55164 20.8807 0.922L20.8927 0.896999L20.8947 0.893999L19.9997 0.447Z"
                      fill="#241314"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 18.9453C0 18.6801 0.105357 18.4257 0.292893 18.2382C0.48043 18.0507 0.734784 17.9453 1 17.9453H39C39.2652 17.9453 39.5196 18.0507 39.7071 18.2382C39.8946 18.4257 40 18.6801 40 18.9453C40 19.2105 39.8946 19.4649 39.7071 19.6524C39.5196 19.84 39.2652 19.9453 39 19.9453H36C36 22.067 35.1571 24.1019 33.6569 25.6022C32.1566 27.1025 30.1217 27.9453 28 27.9453H12C9.87827 27.9453 7.84344 27.1025 6.34315 25.6022C4.84285 24.1019 4 22.067 4 19.9453H1C0.734784 19.9453 0.48043 19.84 0.292893 19.6524C0.105357 19.4649 0 19.2105 0 18.9453ZM6 19.9453H34C34 21.5366 33.3679 23.0627 32.2426 24.188C31.1174 25.3132 29.5913 25.9453 28 25.9453H12C10.4087 25.9453 8.88258 25.3132 7.75736 24.188C6.63214 23.0627 6 21.5366 6 19.9453Z"
                      fill="#241314"
                    />
                    <path
                      d="M11.1698 2.38672L11.9998 2.94672C12.8288 3.50572 12.8298 3.50472 12.8298 3.50472L12.8168 3.52472C12.729 3.66468 12.6469 3.80813 12.5708 3.95472C12.3817 4.31359 12.2309 4.69133 12.1208 5.08172C11.8808 5.97372 11.9668 6.67772 12.5948 7.14172C14.2168 8.34372 14.1308 10.1407 13.8088 11.3317C13.6616 11.861 13.4588 12.3732 13.2038 12.8597C13.0994 13.0604 12.9867 13.2566 12.8658 13.4477L12.8458 13.4797L12.8408 13.4867L12.8328 13.4987L12.8308 13.5027L12.8298 13.5037C12.8298 13.5037 12.8288 13.5057 11.9998 12.9457C11.1708 12.3857 11.1698 12.3867 11.1698 12.3867L11.1828 12.3677L11.2368 12.2817C11.3041 12.1689 11.3681 12.0542 11.4288 11.9377C11.5838 11.6397 11.7618 11.2397 11.8788 10.8097C12.1188 9.91772 12.0328 9.21472 11.4048 8.74972C9.78277 7.54772 9.86877 5.75172 10.1908 4.55972C10.3558 3.94772 10.5998 3.40972 10.7958 3.03172C10.9074 2.81775 11.0285 2.60888 11.1588 2.40572L11.1658 2.39372L11.1688 2.38872L11.1698 2.38672ZM28.9998 2.94572C28.1708 2.38572 28.1698 2.38672 28.1698 2.38672V2.38872L28.1658 2.39372L28.1578 2.40572C28.0256 2.6075 27.9047 2.81649 27.7958 3.03172C27.5998 3.40972 27.3558 3.94772 27.1908 4.55972C26.8688 5.75072 26.7828 7.54772 28.4048 8.74972C29.0328 9.21472 29.1188 9.91772 28.8778 10.8097C28.7618 11.2397 28.5838 11.6397 28.4278 11.9377C28.352 12.0844 28.2703 12.2278 28.1828 12.3677L28.1708 12.3877L28.9998 12.9457C29.8288 13.5057 29.8298 13.5037 29.8298 13.5037V13.5027L29.8338 13.4987L29.8418 13.4867L29.8568 13.4617L29.8668 13.4477C29.9877 13.2566 30.1004 13.0604 30.2048 12.8597C30.459 12.3729 30.6614 11.8608 30.8088 11.3317C31.1308 10.1407 31.2168 8.34372 29.5948 7.14172C28.9668 6.67672 28.8808 5.97372 29.1218 5.08172C29.2378 4.65172 29.4158 4.25172 29.5718 3.95372C29.6476 3.80715 29.7293 3.66369 29.8168 3.52372L29.8288 3.50472L28.9998 2.94572Z"
                      fill="#241314"
                    />
                  </svg>
                  <Text style={styles.cardText4}>Meals Included</Text>
                </Flex>
              )}

              {/* Travel */}
              {travel && (
                <Flex
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flex="1"
                  minW="20px"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6928 1H3.30814C2.11861 1 1.1543 1.96431 1.1543 3.15385V23.6154C1.1543 24.8049 2.11861 25.7692 3.30814 25.7692H22.6928C23.8823 25.7692 24.8466 24.8049 24.8466 23.6154V3.15385C24.8466 1.96431 23.8823 1 22.6928 1Z"
                      stroke="#241314"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.46199 25.7692V29M20.5389 25.7692V29M1.1543 15H24.8466"
                      stroke="#241314"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.53981 21.4624C7.13458 21.4624 7.61674 20.9803 7.61674 20.3855C7.61674 19.7907 7.13458 19.3086 6.53981 19.3086C5.94505 19.3086 5.46289 19.7907 5.46289 20.3855C5.46289 20.9803 5.94505 21.4624 6.53981 21.4624Z"
                      stroke="#241314"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.4617 21.4624C20.0565 21.4624 20.5386 20.9803 20.5386 20.3855C20.5386 19.7907 20.0565 19.3086 19.4617 19.3086C18.8669 19.3086 18.3848 19.7907 18.3848 20.3855C18.3848 20.9803 18.8669 21.4624 19.4617 21.4624Z"
                      stroke="#241314"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Text style={styles.cardText4}>Transport Included</Text>
                </Flex>
              )}
            </Flex>

            <Divider color="red" h="1px" w="100%" mt="12px" mb="16px" />

            {/* Card Pricing*/}
            <Flex alignItems={"end"} mt="3px">
              <Text
                borderRadius="17px"
                background="#27AE60"
                px="10px"
                py="4px"
                color="white"
                textAlign="center"
                fontFamily="Raleway"
                fontSize={["18px", "18px", "22px", "22px"]}
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
              >
                Rs - {price}
              </Text>
              <Text
                borderRadius="17px"
                px="10px"
                py="4px"
                color="gray.500"
                textAlign="center"
                fontFamily="Raleway"
                fontSize={["16px", "16px", "18px", "18px"]}
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
                textDecoration={"line-through"}
              >
                {props.data?.discountedPrice
                  ? `Rs ${props.data?.discountedPrice}`
                  : ""}
              </Text>
              <Text
                borderRadius="17px"
                py="4px"
                color="gray.600"
                textAlign="center"
                fontFamily="Raleway"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
              >
                per person
              </Text>
            </Flex>

            {/* Button Group */}
            <Flex
              gap="3"
              mt="20px"
              mb="2"
              flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
            >
              {/* <Button
                colorScheme="blue"
                w="100%"
                background="#241314"
                color="white"
                borderRadius="8px"
              >
                Contact Us
              </Button> */}
              <Flex justifyContent={"space-between"} w="100%" gap="3">
                <Button
                  rightIcon={<PhoneIcon />}
                  colorScheme="blue"
                  variant="outline"
                  w="100%"
                  as="a"
                  target="_blank"
                  href={`tel:${props.settings?.contact}`}
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  Call Now{" "}
                </Button>
                <Button
                  w="100%"
                  as="a"
                  target="_blank"
                  href={`https://wa.me/91${
                    props.settings?.whatsapp
                  }?text=Event Name = ${name}
                Event Date = ${moment(startDate, "YYYY-MM-DD HH:mm").format(
                  "DD MMM YYYY"
                )}
               
                `}
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  rightIcon={
                    <>
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 57 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56.9531 26.7124C55.9842 10.2486 40.9667 -2.43991 23.6695 0.398679C11.758 2.3573 2.21175 11.9801 0.359495 23.8454C-0.723364 30.7148 0.70145 37.2151 3.80755 42.58L1.27138 51.9757C0.70145 54.1047 2.66769 56.0349 4.77642 55.4388L14.0662 52.8841C18.2837 55.3537 23.2135 56.773 28.4853 56.773C44.5572 56.773 57.8935 42.6652 56.9531 26.7124ZM42.42 38.9466C41.7328 40.3509 40.5586 41.46 39.1144 42.0691C38.2596 42.4381 37.3192 42.6084 36.3218 42.6084C34.8685 42.6084 33.3012 42.2678 31.6769 41.5581C29.9458 40.801 28.3024 39.8587 26.7756 38.7479C25.1228 37.5557 23.584 36.2216 22.1022 34.7739C20.6204 33.2979 19.3095 31.7366 18.1127 30.1187C16.9443 28.5007 16.004 26.8827 15.32 25.2647C14.6361 23.6467 14.2942 22.0855 14.2942 20.6094C14.2942 19.6443 14.4652 18.7075 14.8071 17.856C15.1491 16.976 15.6905 16.1812 16.4599 15.4716C17.3718 14.5632 18.3692 14.1374 19.4235 14.1374C19.8225 14.1374 20.2214 14.2226 20.5919 14.3929C20.9623 14.5632 21.3043 14.8187 21.5607 15.1877L24.8663 19.843C25.1228 20.212 25.3222 20.5242 25.4362 20.8365C25.5787 21.1487 25.6357 21.4326 25.6357 21.7164C25.6357 22.0571 25.5217 22.3977 25.3222 22.7383C25.1228 23.079 24.8663 23.4196 24.5243 23.7602L23.4415 24.8957C23.2705 25.066 23.2135 25.2363 23.2135 25.4634C23.2135 25.5769 23.242 25.6905 23.2705 25.804C23.3275 25.9175 23.356 26.0027 23.3845 26.0879C23.641 26.5704 24.0969 27.1665 24.7238 27.9046C26.058 29.4663 27.516 30.9186 29.0838 32.2476C29.8247 32.8721 30.4516 33.2979 30.936 33.5533C31.0215 33.5817 31.107 33.6385 31.1925 33.6669C31.3065 33.7237 31.4204 33.7237 31.5629 33.7237C31.8194 33.7237 31.9904 33.6385 32.1614 33.4682L33.2442 32.3895C33.6147 32.0205 33.9566 31.765 34.2701 31.5947C34.612 31.396 34.9255 31.2825 35.2959 31.2825C35.5809 31.2825 35.8659 31.3392 36.1793 31.4812C36.4928 31.6231 36.8347 31.7934 37.1767 32.0489L41.9071 35.3984C42.2775 35.6539 42.534 35.9661 42.705 36.3068C42.8475 36.6758 42.9329 37.0164 42.9329 37.4138C42.762 37.8964 42.648 38.4357 42.42 38.9466Z"
                          fill="#54E58E"
                        />
                      </svg>
                    </>
                  }
                  colorScheme="green"
                  variant="outline"
                >
                  Chat Now
                </Button>
              </Flex>
              <Button
                w="100%"
                background="#E9E9E9"
                color="black"
                borderRadius="8px"
                as="a"
                href={props.data?.itinerary}
                target="_blank"
                // download
                // onClick={ShowImages}
              >
                View Itinerary
              </Button>
              {/* <a href={props.data?.itinerary} target="_blank" download>Download</a> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default BigCard;

// function StatsCard(props) {
//   const { title, stat, icon } = props
//   return (
//     <Stat
//       px={{ base: 2, md: 4 }}
//       py={'5'}
//       shadow={'xl'}
//       border={'1px solid'}
//       borderColor={useColorModeValue('gray.800', 'gray.500')}
//       rounded={'lg'}>
//       <Flex justifyContent={'space-between'}>
//         <Box pl={{ base: 2, md: 4 }}>
//           <StatLabel fontWeight={'medium'} isTruncated>
//             {title}
//           </StatLabel>
//           <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
//             {stat}
//           </StatNumber>
//         </Box>
//         <Box
//           my={'auto'}
//           color={useColorModeValue('gray.800', 'gray.200')}
//           alignContent={'center'}>
//           {icon}
//         </Box>
//       </Flex>
//     </Stat>
//   )
// }

export function ShowImages({ images }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<CopyIcon />}
        h="6"
        w="100%"
        px="3"
        color={"white"}
        bg="red.400"
        borderRadius={30}
        fontSize={["10px", "10px", "14px", "14px"]}
      >
        Show More Images
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Images</Text>
            <Text fontSize={"14px"} as="span" color="gray">
              ( High Quality Images may take longer to load )
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {Array.isArray(images) &&
                images.map((el, id) => (
                  <SwiperSlide key={id}>
                    {" "}
                    <Box
                      position={"relative"}
                      width={"100%"}
                      minW={["100%", "100%", "350px", "350px"]}
                      minHeight={"500px"}
                      flex={1}
                    >
                      <Image
                        src={el ? el.img_url : "/images/finallogo.png"}
                        objectFit="contain"
                        blurDataURL="/images/preloader.png"
                        layout="fill"
                      />
                    </Box>
                  </SwiperSlide>
                ))}
            </Swiper>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
