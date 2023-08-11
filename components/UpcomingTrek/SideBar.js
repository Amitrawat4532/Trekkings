import { RepeatIcon } from "@chakra-ui/icons";
import {
  Flex,
  Stack,
  Checkbox,
  Divider,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  FormLabel,
  Select,
  RadioGroup,
  Radio,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Tooltip,
  SliderMark,
  filter,
  CheckboxGroup,
} from "@chakra-ui/react";
import React from "react";

const SideBar = ({ data, setFilterData, filterData }) => {
  const styles = {
    label: {
      color: "#969696",
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
    sidebarLabel: {
      color: "#FFF",
      fontFamily: "Poppins",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      textTransform: "capitalize",
    },
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <>
      <Flex
        flex="1"
        maxW="299px"
        minW="250px"
        h={"100%"}
        bg="#241314"
        borderRadius={"10"}
        py="22px"
        px="28px"
        direction={"column"}
        display={["none", "none", "flex", "flex"]}
      >
        <Flex justifyContent={"space-between"}>
          <Text style={styles.sidebarLabel}>Filter</Text>
          <RepeatIcon
            h="5"
            w="5"
            color="white"
            onClick={() => {
              setFilterData({
                searchInput: "",
                location: "",
                tourType: "",
                budget: 7999,
                services: "",
              });
            }}
          />
        </Flex>

        <Stack spacing={3} direction="column" color="white" my="30px">
          <Text style={styles.label}>Services</Text>
          <CheckboxGroup
            colorScheme="green"
            value={filterData.services}
            onChange={(e) => {
              setFilterData({ ...filterData, services: e });
            }}
          >
            <Stack spacing={2} direction={"column"}>
              <Checkbox value={"food"}>Food</Checkbox>
              <Checkbox value={"transport"}>Transport</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Stack>
        <Divider />
        <Stack spacing={3} direction="column" color="white" my="30px">
          <Text style={styles.label}>Tour Type</Text>
          <RadioGroup
            value={filterData.tourType}
            onChange={(e) => {
              setFilterData({ ...filterData, tourType: e });
            }}
          >
            <Stack direction="column">
              <Radio value="">All</Radio>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
              <Radio value="corporate">Corporate</Radio>
            </Stack>
          </RadioGroup>
        </Stack>
        <Divider />
        <Stack spacing={3} direction="column" color="white" my="30px">
          <Text style={styles.label}>Budget</Text>
          <Slider
            my="2"
            aria-label="slider-ex-4"
            value={filterData.budget}
            min={499}
            max={7999}
            onChange={(v) => setFilterData({ ...filterData, budget: v })}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderMark value={499} mt="3" ml="-2.5" fontSize="sm">
              499
            </SliderMark>
            <SliderTrack bg="red.100">
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderMark value={7999} mt="3" ml="-2.5" fontSize="sm">
              7999
            </SliderMark>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`Rs ${filterData.budget}`}
            >
              <SliderThumb boxSize={6} />
            </Tooltip>
          </Slider>
        </Stack>
      </Flex>

      <Button
        ref={btnRef}
        bg="#241314"
        color="white"
        onClick={onOpen}
        display={["flex", "flex", "none", "none"]}
      >
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>

          <DrawerBody>
            <FormLabel htmlFor="loc">Location</FormLabel>
            <Select
              id="loc"
              placeholder="Filter By Location"
              value={filterData.location}
              onChange={(e) =>
                setFilterData({ ...filterData, location: e.target.value })
              }
              size="sm"
            >
              {data?.map((el) => (
                <option value={el.location}>{el.location.toUpperCase()}</option>
              ))}
            </Select>

            <Divider color="black" my="4" w="100%" h="10px" />

            <FormLabel htmlFor="tourType" mt="5">
              Services
            </FormLabel>
            <CheckboxGroup
              colorScheme="green"
              value={filterData.services}
              onChange={(e) => {
                setFilterData({ ...filterData, services: e });
              }}
            >
              <Stack spacing={3} direction="column" color="black">
                <Checkbox value="food">Food</Checkbox>
                <Checkbox value="transport">Transport</Checkbox>
              </Stack>
            </CheckboxGroup>

            <Divider color="black" my="4" w="100%" h="10px" />

            <FormLabel htmlFor="tourType" mt="5">
              Tour Type
            </FormLabel>
            <RadioGroup
            value={filterData.tourType}
            onChange={(e) => {
              setFilterData({ ...filterData, tourType: e });
            }}
          >
            <Stack spacing={3} direction={"column"}>
              <Radio value="">All</Radio>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
              <Radio value="corporate">Corporate</Radio>
            </Stack>
          </RadioGroup>

            <Divider color="black" my="4" w="100%" h="10px" />

            <FormLabel htmlFor="tourType" mt="5">
              Budget
            </FormLabel>
            <Slider
              my="2"
              aria-label="slider-ex-4"
              value={filterData.budget}
              min={499}
              max={7999}
              onChange={(v) => setFilterData({ ...filterData, budget: v })}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderMark value={499} mt="3" ml="-2.5" fontSize="sm">
                499
              </SliderMark>
              <SliderTrack bg="red.100">
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderMark value={7999} mt="3" ml="-4" fontSize="sm">
                7999
              </SliderMark>
              <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`Rs ${filterData.budget}`}
              >
                <SliderThumb boxSize={6} />
              </Tooltip>
            </Slider>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg="#241314"
              color="white"
              onClick={() => {
                setFilterData({
                  searchInput: "",
                  location: "",
                  tourType: "",
                  budget: 7999,
                  services: "",
                });
              }}
            >
              Reset
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
