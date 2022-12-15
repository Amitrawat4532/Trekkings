import {
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Input,
  IconButton,
  Text,
  Image,
  Heading,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
} from "@chakra-ui/react";

import { SearchIcon, WarningTwoIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { createClient } from "next-sanity";
import moment from "moment";
import Link from "next/link";

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    useCdn: false,
  });

  const eventQuery = `*[_type == "events"]{
        ..., 
        images[]{"img_url": asset->url}
      }`;
  const settingsQuery = `*[_type == "settings"]{
    ..., 
    "logo": logo.asset->url
  }`;

  const event = await client.fetch(eventQuery);
  const settings = await client.fetch(settingsQuery);

  return {
    props: {
      event,
      settings,
    },
  };
}

const Events = ({ event, settings }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Box
      p="0"
      m="0"
      minH="100vh"
      overflow="hidden"
      position="relative"
      background="repeating-radial-gradient(circle, transparent, transparent 3.5px, rgba(255, 55, 5, 0.07) 3.5px, rgba(255, 55, 5, 0.07) 4.5px), repeating-radial-gradient(circle, transparent, transparent 3.5px, rgba(255, 55, 5, 0.07) 3.5px, rgba(255, 55, 5, 0.07) 4.5px), rgba(20, 23, 38, 0)"
      backgroundSize="20px 20px"
      backgroundPosition="0 0, 10px 10px, 20px 10px"
      backgroundColor="rgba(20, 23, 38, 0)"
    >
      <Link href="/">
        <Button
          position="absolute"
          mt="4"
          ml="4"
          bg="transparent"
          color="mainOrange"
          fontWeight="normal"
          fontSize="28px"
          fontFamily="anton"
        >
          <Text as="span" pb="2" pr="1">
            &larr;
          </Text>
          Back
        </Button>
      </Link>

      <Flex
        justifyContent="center"
        alignItems="center"
        pt={["80px", "80px", "50px", "50px"]}
        pb="10"
      >
        <InputGroup size="lg" w={["80%", "80%", "700px", "700px"]}>
          <Input
            type={"text"}
            placeholder="Search Events By Location"
            bg="white"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <InputRightElement width="auto" pr="2">
            <IconButton
              aria-label="Search database"
              bg="transparent"
              color="mainOrange"
              fontWeight="900"
              icon={<SearchIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Box
        // border='1px solid green'
        my="2"
        mx="auto"
        py="10"
        px="4"
        w={["100%", "100%", "80%", "80%"]}
        h="100%"
      >
        {event
          ?.filter((row) => {
            return Object.values(row?.name)
              .join("")
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .sort((a, b) => {
            const bDate = moment(b?.startDate, "YYYY-MM-DD HH:mm").format("X");
            const aDate = moment(a?.startDate, "YYYY-MM-DD HH:mm").format("X");

            return bDate - aDate;
          })
          .map((el, id) => {
            const fullDate = moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
              "DD MMM YYYY"
            );
            const date = moment(el?.startDate, "YYYY-MM-DD HH:mm").format("DD");
            const month = moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
              "MMM"
            );
            const selectedMonthNumber = moment(new Date(), "DD-MM-YY").format(
              "X"
            );
            const monthNumber = moment(
              el?.startDate,
              "YYYY-MM-DD HH:mm"
            ).format("X");
            return (
              <Flex
                key={id}
                justifyContent="start"
                alignItems="start"
                fontSize="20px"
                fontWeight="600"
                color="#FF3603a7"
                mb="10"
                bg="#cbd5e0ad"
                height="100%"
                // px="2"
                borderRadius="20px"
                // _hover={{
                //   bg: "#ff4517a1",
                //   color: "black",
                // }}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                overflow="hidden"
                position="relative"
                direction="column"
              >
                {/* Date and Month */}
                <Flex
                  as="span"
                  color="white"
                  height="auto"
                  ml={["4", "4", "6", "6"]}
                  fontFamily="Kanit"
                  textAlign="center"
                  position="absolute"
                >
                  <Box bg="mainOrange" px="2" py="2">
                    {date} {month}
                  </Box>
                  {monthNumber >= selectedMonthNumber && (
                    <Text
                      py="2"
                      px="4"
                      bgGradient="radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                    radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);"
                      bgClip="text"
                      fontSize={["16px", "16px", "20px", "20px"]}
                      fontWeight="extrabold"
                    >
                      UPCOMING!!
                    </Text>
                  )}
                </Flex>

                <Flex direction={["column", "column", "row", "row"]} flex="1">
                  {/* Name and Description */}
                  <Flex
                    direction="column"
                    px="8"
                    pt="50px"
                    w="100%"
                    h="100%"
                    flex="1"
                    // border="2px solid red"
                  >
                    <Text color="blackAlpha.800" fontSize="33px">
                      {el?.name}
                    </Text>
                    <Text as="span" fontSize="16px" pt="4" color="gray.800">
                      {el?.description}
                    </Text>
                  </Flex>

                  {/* Dates and Amount */}
                  <Flex
                    mt={["10px", "10px", "50px", "50px"]}
                    w="100%"
                    wrap="wrap"
                    px="8"
                    pb="8"
                    color="black"
                    flex="1"
                    gap="2"
                    justifyContent={[
                      "space-between",
                      "space-between",
                      "start",
                      "start",
                    ]}
                  >
                    <Box
                      minW={["auto", "auto", "150px", "150px"]}
                      fontSize={["15px", "15px", "20px", "20px"]}
                    >
                      <Text
                        fontSize={["13px", "13px", "16px", "16px"]}
                        pt="4"
                        color="gray.800"
                        textAlign={["center", "center", "start", "start"]}
                      >
                        Starting Date -
                      </Text>
                      {moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
                        "DD-MM-YYYY"
                      )}
                    </Box>

                    <Box
                      minW={["auto", "auto", "150px", "150px"]}
                      fontSize={["15px", "15px", "20px", "20px"]}
                    >
                      <Text
                        fontSize={["13px", "13px", "16px", "16px"]}
                        textAlign={["center", "center", "start", "start"]}
                        pt="4"
                        color="gray.800"
                      >
                        End Date -
                      </Text>
                      {moment(el?.endDate, "YYYY-MM-DD HH:mm").format(
                        "DD-MM-YYYY"
                      )}
                    </Box>

                    <Box
                      minW={["auto", "auto", "150px", "150px"]}
                      fontSize={["15px", "15px", "20px", "20px"]}
                    >
                      <Text
                        fontSize={["13px", "13px", "16px", "16px"]}
                        textAlign={["center", "center", "start", "start"]}
                        pt="4"
                        color="gray.800"
                      >
                        Amount -
                      </Text>
                      {el?.price} ₹
                    </Box>
                  </Flex>
                </Flex>

                <Accordion mt="4" w="100%" bg="white" allowToggle>
                  <AccordionItem>
                    <AccordionButton color="black">
                      <Box flex="1" textAlign="left">
                        <Text fontSize="18px" fontWeight="600">
                          Show Images
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Flex
                        my="3"
                        justifyContent="start"
                        gap="2"
                        flex="1"
                        mx="auto"
                        w="auto"
                        maxH="220px"
                        overflowY="hidden"
                        overflowX="scroll"
                      >
                        {el?.images?.map((el, id) => {
                          return (
                            <Image
                              key={id}
                              src={el?.img_url}
                              width="100%"
                              height={["200px", "200px"]}
                              objectFit="contain"
                              fallbackSrc="/images/logo.png"
                            ></Image>
                          );
                        })}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                {/* Food / Travel / Stay */}
                <Flex position="absolute" right="2" top="2">
                  {el?.travel && (
                    <Button variant="calendar_btn">
                      <Text
                        display={["none", "none", "none", "block"]}
                        mr="1"
                        px="2"
                      >
                        Travel
                      </Text>
                      <Image
                        height="25px"
                        width="25px"
                        src="/images/Travel.png"
                      />
                    </Button>
                  )}
                  {el?.stay && (
                    <Button variant="calendar_btn">
                      <Text
                        display={["none", "none", "none", "block"]}
                        mr="1"
                        px="2"
                      >
                        Stay
                      </Text>
                      <Image
                        height="25px"
                        width="25px"
                        src="/images/Home.png"
                      />
                    </Button>
                  )}
                  {el?.food && (
                    <Button variant="calendar_btn">
                      <Text
                        display={["none", "none", "none", "block"]}
                        mr="1"
                        px="2"
                      >
                        Food
                      </Text>
                      <Image
                        height="25px"
                        width="25px"
                        src="/images/Food.png"
                      />
                    </Button>
                  )}
                </Flex>

                {/* Book Now Button */}
                {monthNumber >= selectedMonthNumber && (
                  <Flex justifyContent="end" alignItems="end" w="100%">
                    <a
                      href={`https://wa.me/91${settings[0]?.whatsapp}?text=Event Name = ${el?.name}
                     Event Date = ${fullDate}
                    
                     `}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Chat on WhatsApp"
                      style={{ width: "100%" }}
                    >
                      <Button
                        // position="relative"
                        // w={["100%", "100%", "200px", "200px"]}
                        w="100%"
                        // right="0"
                        // bottom="0"
                        py="6"
                        bg="mainOrange"
                        color="white"
                        _hover={{
                          color: "black",
                          transform: "scale(1.1)",
                        }}
                        borderRadius="0"
                      >
                        Book Now
                        <Text as="span" pb="2" pl="2" fontSize="35px">
                          &#8594;
                        </Text>
                      </Button>
                    </a>
                  </Flex>
                )}
              </Flex>
            );
          })}
        {event?.filter((row) => {
          return Object.values(row.name)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        }).length <= 0 && (
          <Box
            textAlign="center"
            py={10}
            px={6}
            bg="gray.200"
            borderRadius="20px"
          >
            <WarningTwoIcon boxSize="50px" color="orange.300" />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              NO EVENT FOUND!
            </Heading>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Events;
