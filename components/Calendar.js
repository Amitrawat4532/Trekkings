import {
  Flex,
  Box,
  Text,
  Divider,
  useDisclosure,
  Badge,
  Heading,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import CalendarModal from "./CalendarModal";
import { WarningTwoIcon } from "@chakra-ui/icons";

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());
  const trek = [
    {
      title: "IgatPuri Trek -1",
      startDate: "04-10-2022",
      endDate: "04-10-2022",
      images: [],
      detail:
        "IgatPuri Trek detailss Id ea et nisi irure irure labore esse sint.",
    },
    {
      title: "IgatPuri Trek -2",
      startDate: "07-10-2022",
      endDate: "07-10-2022",
      images: [],
      detail:
        "IgatPuri Trek detailss Id ea et nisi irure irure labore esse sint.",
    },
    {
      title: "IgatPuri Trek -3",
      startDate: "12-11-2022",
      endDate: "12-11-2022",
      images: [],
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
        p="10"
        gap="4"
      >
        <Flex
          // border='1px solid green'
          flex="1"
          height="500px"
          width="100%"
          p={["2", "2", "4", "4"]}
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
          p="4"
          flex="1"
          height="500px"
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
              const date = moment(el?.startDate, "DD/MM/YYYY").format("DD MMM");
              return (
                <React.Fragment key={id}>
                  <Text
                    fontSize="20px"
                    fontWeight="600"
                    color="#FF3606"
                    m="2"
                    bg="gray.200"
                    py="5"
                    px="2"
                    borderRadius="20px"
                    _hover={{
                      bg: "#ff4517a7",
                      color: "black",
                    }}
                    onClick={() => {
                      onDateSelect(el?.startDate);
                    }}
                  >
                    <Text
                      as="span"
                      bg="white"
                      p="2"
                      m="2"
                      borderRadius="20px"
                      color="orange.900"
                    >
                      {date}
                    </Text>
                    {el?.title}
                  </Text>
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
