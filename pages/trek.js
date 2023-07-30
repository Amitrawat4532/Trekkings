import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { createClient } from "next-sanity";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BigCard from "../components/UpcomingTrek/BigCard";
import SideBar from "../components/UpcomingTrek/SideBar";
import Footer from "../components/footer";

import SmallCard from "../components/UpcomingTrek/SmallCard";
import Question from "../components/UpcomingTrek/Question";

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    useCdn: false,
  });

  const eventQuery = `*[_type == "events"]{
        ..., 
        images[]{"img_url": asset->url},
        "itinerary": itinerary.asset->url,
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

const Trek = ({ event, settings }) => {
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Box
        top={["150px", "150px", "200px", "200px"]}
        position={"relative"}
        maxW="100vw"
        h={"100%"}
        p={["40px 10px", "40px 10px", "40px 20px", "40px 20px"]}
        display="flex"
        justifyContent={"center"}
      >
        {/* Search bar */}
        <InputGroup
          w={["90vw", "90vw", "80vw", "80vw"]}
          size={"lg"}
          zIndex={1000}
        >
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<Search2Icon color="gray.300" />}
          />

          {/* Main Input */}
          <Input
            placeholder="What trek are you looking for ?"
            borderRadius={"30"}
            fontSize={["16px", "16px", "18px", "18px"]}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            boxShadow="1.6197646856307983px 1.6197646856307983px 17.817411422729492px 0px rgba(0, 0, 0, 0.12)"
          />

          {/* Location Bar */}
          <InputRightElement
            display={["none", "none", "flex", "flex"]}
            pr="8vw"
            w="30vw"
          >
            <Select
              placeholder="Search By Location"
              borderTopWidth="0"
              borderBottom="0"
              borderRight="0"
              borderRadius="0"
              borderLeftWidth={2}
              borderColor={"rgba(20, 20, 20, 0.10)"}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {event?.map((el) => (
                <option value={el.location}>{el.location.toUpperCase()}</option>
              ))}
            </Select>
          </InputRightElement>

          {/* Search Button */}
          <InputRightElement
            display={["none", "none", "flex", "flex"]}
            children="Search"
            bg="#241314"
            w="8vw"
            borderTopRightRadius={"30"}
            borderBottomRightRadius={"30"}
            color="white"
            _hover={{
              bgColor: "#24131478",
            }}
          ></InputRightElement>
        </InputGroup>
      </Box>

      <Flex
        // border="2px solid red"
        h={"auto"}
        top={["150px", "150px", "200px", "200px"]}
        position={"relative"}
        minH="100vh"
        justifyContent="start"
        px="9vw"
        gap="10"
        my="5"
        // flexWrap={'wrap'}
        flexDirection={["column", "column", "row", "row"]}
      >
        {/* SideBar */}
        <SideBar
          data={event}
          setLocation={setLocation}
          location={location}
          setSearchInput={setSearchInput}
        />

        {/* Trek Card Section */}
        <Flex
          // border="3px solid green"
          gap="10"
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {event
            ?.filter((row) => {
              const currentDate = new Date();
              const trekStartDate = new Date(row.startDate);

              return (
                Object.values(row?.name)
                  .join("")
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) &&
                trekStartDate > currentDate &&
                (location === ""
                  ? true
                  : row.location.toLowerCase() === location.toLowerCase())
              );
            })
            .sort((a, b) => {
              const bDate = new Date(b.startDate);
              const aDate = new Date(a.startDate);

              return aDate - bDate;
            })
            .map((el, id) => {
              const dates = event.map(
                (dateString) => new Date(dateString.startDate)
              );
              const currentDate = new Date();
              const upcomingDates = dates.filter((date) => date > currentDate);
              const latestUpcomingDate = new Date(Math.min(...upcomingDates));
              return (
                <Box key={id} w="100%"
                alignItems='stretch'
                flex='1'
                >
                  {/* {new Date(latestUpcomingDate).getDate() ==
                  new Date(el.startDate).getDate() ? (
                    <BigCard data={el} />
                  ) : (
                    <SmallCard data={el} />
                  )} */}
                    <BigCard data={el} isUpcoming={new Date(latestUpcomingDate).getTime() ==
                  new Date(el.startDate).getTime() ? true : false} />

                </Box>
              );
            })}

          {event
            ?.filter((row) => {
              const currentDate = new Date();
              const trekStartDate = new Date(row.startDate);

              return (
                Object.values(row?.name)
                  .join("")
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) &&
                trekStartDate > currentDate &&
                (location === ""
                  ? true
                  : row.location.toLowerCase() === location.toLowerCase())
              );
            })
            .sort((a, b) => {
              const bDate = new Date(b.startDate);
              const aDate = new Date(a.startDate);

              return aDate - bDate;
            }).length === 0 && (
            <Flex w="100%" h="100%">
              <Box textAlign="center" py={10} px={6}>
                <Heading
                  display="inline-block"
                  as="h2"
                  size="2xl"
                  bgGradient="linear(to-r, teal.400, teal.600)"
                  backgroundClip="text"
                >
                  No Trek Found for your Search
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                  Try With Different Location
                </Text>
                <Text color={"gray.500"} mb={6}>
                  The trek you&apos;re looking for is not available now!!!
                </Text>

                <Button
                  colorScheme="teal"
                  bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                  color="white"
                  variant="solid"
                  onClick={() => {
                    setSearchInput("");
                    setLocation("");
                  }}
                >
                  Show Available Treks
                </Button>
              </Box>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Box top={["150px", "150px", "200px", "200px"]} position={"relative"}>
<Question />

</Box>


      {/* Footer */}
      <Box top={["150px", "150px", "200px", "200px"]} position={"relative"}>
        <Footer />
      </Box>
    </>
  );
};

export default Trek;
