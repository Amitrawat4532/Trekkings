import {
  Flex,
  Box,
  Text,
  useDisclosure,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import moment from "moment";
import CalendarModal from "./CalendarModal";
import { WarningTwoIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";

const UpcomingTrek = ({ event, settings }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTrek, setSelectedTrek] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

  const onDateSelect = (date) => {
    const formmatedDate = moment(date, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY");
    const data = event.filter((x) => {
      if (x.startDate == date) {
        return x;
      }
    });
    if (data.length !== 0) {
      setSelectedTrek(data[0]);
      onOpen();
    } else {
      alert("No event found on selected date!!!");
    }
  };

  const filterByMonth = (x) => {
    const selectedMonthNumber = moment(new Date(), "MMMM").format("X");
    const month = moment(x?.startDate, "YYYY-MM-DD HH:mm").format("X");

    console.log(
      x?.name,
      "|",
      x?.startDate,
      "|",
      selectedMonthNumber,
      "|",
      month,
      "|",
      month >= selectedMonthNumber,
      "---filter"
    );
    if (month >= selectedMonthNumber) {
      return x;
    }
  };

  return (
    <>
      <Flex
        w="100vw"
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        py="2"
        flexWrap="wrap"
        gap="2"
        mb={["45px", "45px", "4", "4"]}
      >
        <Flex
          // border='1px solid green'
          flex="1"
          height="500px"
          width="100%"
          justifyContent="center"
          bg="white"
          //   bg="url('/images/m6.png')"
          //   backgroundSize="80%"
          //   backgroundRepeat="no-repeat"
          //   bgPos="center"
          p={["2", "4", "6", "8"]}
        >
          <video autoPlay loop muted>
            <source src="/images/m7.mp4" type="video/mp4"></source>
          </video>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          p={["1", "1", "4", "4"]}
          flex="1"
          height="500px"
          w="100%"
          maxW="650px"
          overflow="hidden"
        >
          <Box
            position="relative"
            bottom="-25px"
            bg="white"
            px="4"
            borderRadius="20px"
            zIndex={2}
          >
            <Text
              fontSize={["28px", "28px", "32px", "32px"]}
              fontWeight="200"
              fontFamily="anton"
              letterSpacing="1.3px"
              textTransform="uppercase"
              color="black"
              bgGradient="radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
            radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);"
              bgClip="text"
            >
              {/* {selectedMonth} */}
              UPCOMING TREKS
            </Text>
          </Box>
          <Flex
            direction="column"
            borderRadius="20px"
            mb="2"
            mx="auto"
            px={["2", "2", "6", "6"]}
            pt="10"
            pb="8"
            w="95%"
            h="100%"
            minH="300px"
            overflowY="hidden"
            background="rgb(238 238 238 / 28%)"
            boxShadow="inset 5px 5px 18px #cacaca,
            inset -5px -5px 18px #f6f6f6"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255,255,255,0.25)"
          >
            {event
              ?.filter(filterByMonth)
              // .slice(0, 4)
              .sort((a, b) => {
                const bDate = moment(b?.startDate, "YYYY-MM-DD HH:mm").format(
                  "X"
                );
                const aDate = moment(a?.startDate, "YYYY-MM-DD HH:mm").format(
                  "X"
                );

                return aDate - bDate;
              })
              .map((el, id) => {
                const date = moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
                  "DD"
                );
                const month = moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
                  "MMM"
                );
                return (
                  <Flex
                    key={id}
                    justifyContent="start"
                    alignItems="end"
                    fontSize="20px"
                    fontWeight="600"
                    color="#FF3603a7"
                    mb="4"
                    bg="#cacaca7d"
                    minHeight="70px"
                    // py="2"
                    borderRadius="10px"
                    _hover={{
                      bg: "#ff4517a7",
                      color: "black",
                    }}
                    onClick={() => {
                      onDateSelect(el?.startDate);
                    }}
                    overflow="hidden"
                    position="relative"
                    boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                  >
                    <Flex
                      as="span"
                      color="white"
                      height="100%"
                      px="2"
                      py="3"
                      ml={["3", "3", "4", "4"]}
                      bg="mainOrange"
                      h="100%"
                      fontFamily="Kanit"
                      textAlign="center"
                      fontSize={["16px", "16px", "18px", "18px"]}
                    >
                      {date}
                      <br />
                      {month}
                    </Flex>
                    <Flex direction="column" px="2" w="80%" whiteSpace="nowrap">
                      <Text
                        color="blackAlpha.800"
                        fontSize={["18px", "18px", "23px", "23px"]}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        w={["70%", "70%", "70%", "50%"]}
                      >
                        {el?.name}
                      </Text>
                      <Text
                        as="span"
                        fontSize="11px"
                        color="gray.800"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        pb="2"
                      >
                        {el?.description}
                      </Text>
                    </Flex>

                    <Flex position="absolute" right="5px" top="0">
                      {el?.travel && (
                        <Button variant="calendar_btn">
                          <Text
                            display={["none", "none", "none", "block"]}
                            mr="1"
                            p="0"
                          >
                            Travel
                          </Text>
                          <Image
                            height="15px"
                            width="15px"
                            src="/images/Travel.png"
                            alt="travel"
                          />
                        </Button>
                      )}
                      {el?.stay && (
                        <Button variant="calendar_btn">
                          <Text
                            display={["none", "none", "none", "block"]}
                            mr="1"
                            p="0"
                          >
                            Stay
                          </Text>
                          <Image
                            height="15px"
                            width="15px"
                            src="/images/Home.png"
                            alt="home"
                          />
                        </Button>
                      )}
                      {el?.food && (
                        <Button variant="calendar_btn">
                          <Text
                            display={["none", "none", "none", "block"]}
                            mr="1"
                            p="0"
                          >
                            Food
                          </Text>
                          <Image
                            height="15px"
                            width="15px"
                            src="/images/Food.png"
                            alt="food"
                          />
                        </Button>
                      )}
                    </Flex>
                  </Flex>
                );
              })}
            {event.filter(filterByMonth).length <= 0 && (
              <Box
                textAlign="center"
                py={10}
                px={6}
                bg="gray.200"
                borderRadius="20px"
              >
                <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                  NO UPCOMING EVENT FOUND!
                </Heading>
              </Box>
            )}
            <Link href="/events">
              <Text
                // as="a"
                fontWeight="400"
                fontSize={["18px", "18px", "20px", "20px"]}
                color="#FF3606"
                fontFamily="anton"
                textAlign="center"
                cursor="pointer"
                position="absolute"
                bottom="0"
                mx="auto"
                w="90%"
              >
                EXPLORE ALL TREKKING &rarr;
              </Text>
            </Link>
          </Flex>

          <CalendarModal
            onClose={onClose}
            isOpen={isOpen}
            data={selectedTrek}
            settings={settings}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default UpcomingTrek;
