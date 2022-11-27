import {
  Flex,
  Box,
  Image,
  Text,
  Divider,
  useDisclosure,
  Badge,
  Heading,
  Button,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import CalendarModal from "./CalendarModal";
import { WarningTwoIcon } from "@chakra-ui/icons";

const CalendarComp = ({ event }) => {
  const [value, onChange] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTrek, setSelectedTrek] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

  const onDateSelect = (date) => {
    const formmatedDate = moment(date, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY");
    const data = event.filter((x) => {
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
    const month = moment(x?.startDate, "YYYY-MM-DD HH:mm").format("MMMM");
    if (month === selectedMonth) {
      return x;
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            py="8"
            borderRadius="80px"
            bg="white"
            boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
          >
            <Image src="/images/calendarIcon.png" w="35px" h="35px" />
          </Button>
        </PopoverTrigger>
        <PopoverContent width="350px" ml="5">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>TREKKING CALENDAR</PopoverHeader>
          <PopoverBody>
            <Calendar
              onChange={onChange}
              value={value}
              className="calendar"
              // maxDetail="month"
              tileClassName={({ date, view }) => {
                if (
                  event.find((x) => {
                    const formmatedDate = moment(
                      x?.startDate,
                      "YYYY-MM-DD HH:mm"
                    ).format("DD-MM-YYYY");
                    return (
                      formmatedDate ===
                      moment(date, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY")
                    );
                  })
                ) {
                  return "highlight";
                }
              }}
              tileContent={({ date, view }) => {
                if (
                  event.find((x) => {
                    const formmatedDate = moment(
                      x?.startDate,
                      "YYYY-MM-DD HH:mm"
                    ).format("DD-MM-YYYY");
                    return (
                      formmatedDate ===
                      moment(date, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY")
                    );
                  })
                ) {
                  const today = new Date();
                  const formmatedDate = moment(date, "YYYY-MM-DD HH:mm").format(
                    "X"
                  );
                  const formmatedToday = moment(
                    today,
                    "YYYY-MM-DD HH:mm"
                  ).format("X");
                  if (Number(formmatedDate) - Number(formmatedToday) < 0) {
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
                        {moment(date, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY")}
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
              // nextAriaLabel={(props)=>onCalendarChange(props)}
              // onViewChange={(props) => onCalendarChange(props)}
              // onClickDay={(props) => onDateSelect(props)}
              // onActiveStartDateChange={(props) => onCalendarChange(props)}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CalendarComp;
