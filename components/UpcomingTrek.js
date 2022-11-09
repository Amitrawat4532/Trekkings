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

const UpcomingTrek = () => {
  const trek = [
    {
      title: "IgatPuri Trek -1jdpfajfpoajdpfojapfjspojfposdjp",
      startDate: "04-10-2022",
      endDate: "04-10-2022",
      images: ["/images/c1.png", "/images/c2.png", "/images/c3.png"],
      detail:
        "IgatPuri Trek detailss Id ea et nisi irure irure labore esse sint.",
    },
    {
      title: "IgatPuri Trek -2",
      startDate: "07-10-2022",
      endDate: "07-10-2022",
      images: ["/images/c3.png", "/images/c1.png", "/images/c2.png"],

      detail:
        "IgatPuri Trek detailss Id ea et nisi irure irure labore esse sint.",
    },
    {
      title: "IgatPuri Trek -3",
      startDate: "12-11-2022",
      endDate: "12-11-2022",
      images: ["/images/c2.png", "/images/c3.png", "/images/c1.png"],

      detail:
        "IgatPuri Trek detailss Id ea et nisi irure irure labore esse sint.",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTrek, setSelectedTrek] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

  const onDateSelect = (date) => {
    const formmatedDate = moment(date, "DD/MM/YYYY").format("DD-MM-YYYY");
    const data = trek.filter((x) => {
      if (x.startDate == formmatedDate) {
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
    const month = moment(x?.startDate, "DD-MM-YYYY").format("MMMM");
    if (month === selectedMonth) {
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
        mt="4"
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
          // border='1px solid green'
          p={["2", "2", "4", "4"]}
          flex="1"
          height="500px"
          w="100%"
          maxW="650px"
        >
          <Text
            fontSize="32px"
            fontWeight="800"
            fontFamily="serif"
            textTransform="uppercase"
            color="black"
          >
            {/* {selectedMonth} */}
            UPCOMING TREKS
          </Text>
          <Box
            // border='1px solid green'
            my="2"
            mx="auto"
            p="6"
            w="100%"
            h="100%"
            overflowY="auto"
          >
            {trek.filter(filterByMonth).map((el, id) => {
              const date = moment(el?.startDate, "DD/MM/YYYY").format("DD");
              const month = moment(el?.startDate, "DD/MM/YYYY").format("MMM");
              // const imgNum = slideImages(el?.images);
              const imgNum = 0;
              return (
                <React.Fragment key={id}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontSize="20px"
                    fontWeight="600"
                    color="#FF3603a7"
                    mb="4"
                    bg="#cbd5e0ad"
                    height="70px"
                    // px="2"
                    borderRadius="20px"
                    _hover={{
                      bg: "#ff4517a7",
                      color: "black",
                    }}
                    onClick={() => {
                      onDateSelect(el?.startDate);
                    }}
                    overflow="hidden"
                  >
                    <Flex
                      as="span"
                      color="white"
                      height="100%"
                      px="2"
                      py="2"
                      ml={["4", "4", "6", "6"]}
                      bg="mainOrange"
                      fontFamily="Kanit"
                      textAlign="center"
                    >
                      {date}
                      <br />
                      {month}
                    </Flex>
                    <Box
                      whiteSpace="nowrap"
                      color="blackAlpha.800"
                      fontSize="25px"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      width="50%"
                      px={["2", "2", "4", "4"]}
                    >
                      {el?.title}
                    </Box>

                    <Flex>
                      <Button variant="calendar_btn">
                        <Image
                          height="25px"
                          width="25px"
                          src="/images/Travel.png"
                        />
                      </Button>
                      <Button variant="calendar_btn">
                        <Image
                          height="25px"
                          width="25px"
                          src="/images/Home.png"
                        />
                      </Button>
                      <Button variant="calendar_btn">
                        <Image
                          height="25px"
                          width="25px"
                          src="/images/Food.png"
                        />
                      </Button>
                    </Flex>
                  </Flex>
                </React.Fragment>
              );
            })}
            {trek.filter(filterByMonth).length <= 0 && (
              <Box
                textAlign="center"
                py={10}
                px={6}
                bg="gray.200"
                borderRadius="20px"
              >
                <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                  NO EVENT FOUND!
                </Heading>
              </Box>
            )}
          </Box>

          <CalendarModal
            onClose={onClose}
            isOpen={isOpen}
            data={selectedTrek}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default UpcomingTrek;
