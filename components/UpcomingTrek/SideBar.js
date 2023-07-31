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
} from "@chakra-ui/react";
import React from "react";

const SideBar = ({ data, setLocation, location , setSearchInput }) => {
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

  return (
    <>
      <Flex
        flex="1"
        maxW="299px"
        minW="250px"
        h={"50vh"}
        bg="#241314"
        borderRadius={"10"}
        py="22px"
        px="28px"
        direction={"column"}
        display={["none", "none", "flex", "flex"]}
      >
        <Text style={styles.sidebarLabel}>Filter</Text>

        <Stack spacing={3} direction="column" color="white" my="30px">
          <Text style={styles.label}>Destination</Text>
          <Checkbox>Checkbox</Checkbox>
          <Checkbox>Checkbox</Checkbox>
        </Stack>
        <Divider />
        <Stack spacing={3} direction="column" color="white" my="30px">
          <Text style={styles.label}>Destination</Text>
          <Checkbox>Checkbox</Checkbox>
          <Checkbox>Checkbox</Checkbox>
        </Stack>
      </Flex>

      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}
        display={["flex", "flex","none", "none"]}
      
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
              Cancel
            </Button>
            <Button colorScheme="blue"
            onClick={() => {
              setSearchInput("");
              setLocation("");
            }}
            >Reset</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
