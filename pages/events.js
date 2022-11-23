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
} from "@chakra-ui/react";

import { SearchIcon, WarningTwoIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { createClient } from "next-sanity";
import moment from "moment";
import Link from "next/link";

export async function getStaticProps(context) {
  const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    useCdn: false,
  });

  const eventQuery = `*[_type == "events"]{
        ..., 
        images[]{"img_url": asset->url}
      }`;

  const event = await client.fetch(eventQuery);

  return {
    props: {
      event,
    },
  };
}

const Events = ({ event }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Box p="0" m="0" minH="100vh" overflow="hidden" position="relative">
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
        <InputGroup size="lg" w={["300px", "500px", "700px", "700px"]}>
          <Input
            type={"text"}
            placeholder="Search Events"
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
            return Object.values(row.name)
              .join("")
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((el, id) => {
            const date = moment(el?.startDate, "YYYY-MM-DD HH:mm").format("DD");
            const month = moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
              "MMM"
            );
            return (
              <Flex
                key={id}
                justifyContent="start"
                alignItems="start"
                fontSize="20px"
                fontWeight="600"
                color="#FF3603a7"
                mb="8"
                bg="#cbd5e0ad"
                height="100%"
                // px="2"
                borderRadius="20px"
                _hover={{
                  bg: "#ff4517a1",
                  color: "black",
                }}
                // onClick={() => {
                //   onDateSelect(el?.startDate);
                // }}
                overflow="hidden"
                position="relative"
                direction="column"
              >
                {/* Date and Month */}
                <Flex
                  as="span"
                  color="white"
                  height="auto"
                  px="2"
                  py="2"
                  ml={["4", "4", "6", "6"]}
                  bg="mainOrange"
                  fontFamily="Kanit"
                  textAlign="center"
                  position="absolute"
                >
                  {date} {month}
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

                  <HStack
                    my="3"
                    wrap="wrap"
                    justifyContent="space-evenly"
                    gap="2"
                    flex="1"
                    mt="60px"
                    mx="auto"
                  >
                    {el?.images?.map((el, id) => {
                      return (
                        <Image
                          key={id}
                          src={el?.img_url}
                          width={["160px", "120px"]}
                          height={["100px", "100px"]}
                          objectFit="cover"
                          fallbackSrc="/images/logo.png"
                        ></Image>
                      );
                    })}
                  </HStack>
                </Flex>
                {/* Dates and Amount */}
                <Flex
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
