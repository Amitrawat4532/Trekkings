import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Destination from "../components/Destination";
import Videobox from "../components/videobox";
import Whytrekking from "../components/whytrekking";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonal from "../components/Testimonal";
import Testimonal2 from "../components/Testimonial2";
import moment from "moment";
// import CalendarModal from "./CalendarModal";

import Blog from "../components/Blog";
import {
  Box,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Calendar from "react-calendar";

import Footer from "../components/footer";
import UpcomingTrek from "../components/UpcomingTrek";
import { useState } from "react";

const index = () => {
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

  const onCalendarChange = (props) => {
    const month = moment(props.activeStartDate).format("MMMM");
    setSelectedMonth(month);
  };

  return (
    <>
      <Box p="0" m="0" overflow="hidden" position="relative">
        <Navbar />
        <Home />
        <UpcomingTrek />
        <About />
        UpcomingTrek <Destination />
        <Services />
        {/* <Videobox /> */}
        <Whytrekking />
        <Gallery />
        <Testimonal />
        {/* <Testimonal2 /> */}
        <Blog />
        <Footer />
        <Box position="fixed" left="5" bottom="5">
          <Popover>
            <PopoverTrigger>
              <Button>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent width="400px" ml="5">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>TREKKING CALENDAR</PopoverHeader>
              <PopoverBody>
                <Calendar
                  onChange={onChange}
                  value={value}
                  className="calendar"
                  maxDetail="month"
                  tileClassName={({ date, view }) => {
                    if (
                      trek.find(
                        (x) =>
                          x?.startDate === moment(date).format("DD-MM-YYYY")
                      )
                    ) {
                      return "highlight";
                    }
                  }}
                  tileContent={({ date, view }) => {
                    if (
                      trek.find(
                        (x) =>
                          x?.startDate === moment(date).format("DD-MM-YYYY")
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
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
    </>
  );
};

export default index;
