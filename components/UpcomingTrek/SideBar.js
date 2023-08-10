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
} from "@chakra-ui/react";
import React from "react";

const SideBar = ({ data, setLocation, location, setSearchInput }) => {
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
  const [sliderValue, setSliderValue] = React.useState(5);

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
        <Text style={styles.sidebarLabel}>Filter</Text>

        <Stack spacing={3} direction="column" color="white" my="30px">
          <Text style={styles.label}>Services</Text>
          <Checkbox>Food</Checkbox>
          <Checkbox>Transport</Checkbox>
        </Stack>
        <Divider />
        <Stack spacing={3} direction="column" color="white" my="30px">
          <Text style={styles.label}>Tour Type</Text>
          <RadioGroup value={"public"}>
            <Stack direction="column">
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
          my='2'
            aria-label="slider-ex-4"
            // defaultValue={30}
            min={499}
            max={7999}
            onChange={(v) => setSliderValue(v)}
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
              label={`Rs ${sliderValue}`}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              size="sm"
            >
              {data?.map((el) => (
                <option value={el.location}>{el.location.toUpperCase()}</option>
              ))}
            </Select>

            <FormLabel htmlFor="tourType" mt="5">
              Tour Type
            </FormLabel>
            <Stack spacing={3} direction={"row"}>
              <Checkbox size="md" colorScheme="green" defaultChecked>
                Group
              </Checkbox>
              <Checkbox size="md" colorScheme="green" defaultChecked>
                Corporate
              </Checkbox>
              <Checkbox size="md" colorScheme="green" defaultChecked>
                Personal
              </Checkbox>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg="#241314"
              color="white"
              onClick={() => {
                setSearchInput("");
                setLocation("");
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
