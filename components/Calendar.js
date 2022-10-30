import {
  Flex,
  Box,
  Text,
  Divider,
  useDisclosure,
  Badge,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import CalendarModal from "./CalendarModal";
import { WarningTwoIcon } from "@chakra-ui/icons";
import Image from "next/image";

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());
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

  const onCalendarChange = (props) => {
    const month = moment(props.activeStartDate).format("MMMM");
    setSelectedMonth(month);
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
        bg="white"
        w="100vw"
        h="100% "
        justifyContent="center"
        alignItems="center"
        flexDirection={["column", "column", "row", "row"]}
        py={["1", "3", "6", "8"]}
        flexWrap="wrap"
        gap="2"
      >
        <Flex
          // border='1px solid green'
          flex="1"
          height="500px"
          width="100%"
          p={["2", "4", "6", "8"]}
        >
          <Calendar
            onChange={onChange}
            value={value}
            className="calendar"
            tileClassName={({ date, view }) => {
              if (
                trek.find(
                  (x) => x?.startDate === moment(date).format("DD-MM-YYYY")
                )
              ) {
                return "highlight";
              }
            }}
            tileContent={({ date, view }) => {
              if (
                trek.find(
                  (x) => x?.startDate === moment(date).format("DD-MM-YYYY")
                )
              ) {
                const today = new Date();
                if (date < today) {
                  return (
                    <Badge
                      variant="solid"
                      colorScheme="blue"
                      position="absolute"
                      top="1px"
                      right="1px"
                      borderRadius="7px"
                      padding="1px 3px"
                      fontSize="7px"
                    >
                      {moment(date).format("DD-MM-YYYY")}
                    </Badge>
                  );
                } else {
                  return (
                    <Badge
                      variant="solid"
                      colorScheme="yellow"
                      position="absolute"
                      top="1px"
                      right="1px"
                      borderRadius="7px"
                      padding="1px 3px"
                      fontSize="7px"
                      bgGradient="radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                      radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);"
                    >
                      Upcoming
                    </Badge>
                  );
                }
              }
            }}
            // selectRange={true}
            // next2Label={false}
            // prev2Label={false}
            onViewChange={(props) => onCalendarChange(props)}
            // nextAriaLabel={(props)=>onCalendarChange(props)}
            onClickDay={(props) => onDateSelect(props)}
            onActiveStartDateChange={(props) => onCalendarChange(props)}
          />
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
            {selectedMonth}
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
                    color="#FF3606"
                    mb="4"
                    bg="gray.300"
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

export default CalendarComp;
