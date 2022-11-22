import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";

const CalendarModal = ({ onClose, isOpen, scrollBehavior, data }) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior={"inside"}
      size={["lg", "lg", "3xl", "4xl"]}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{data?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack fontSize="16px" wrap="wrap" mb="4">
            <Box minW={["100px", "200px"]}>
              <Text variant="calendarModalText">Starting Date -</Text>
              {moment(data?.startDate, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY")}
            </Box>

            <Box minW={["100px", "200px"]}>
              <Text variant="calendarModalText">End Date -</Text>
              {moment(data?.endDate, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY")}
            </Box>

            <Box minW={["100px", "200px"]}>
              <Text variant="calendarModalText">Amount -</Text>
              {data?.price} ₹
            </Box>
          </HStack>

          <HStack fontSize="16px" wrap="wrap" mb="4">
            {data?.food && (
              <Box minW={["100px", "200px"]}>
                <Text variant="calendarModalText">Food -</Text>
                Available
              </Box>
            )}
            {data?.stay && (
              <Box minW={["100px", "200px"]}>
                <Text variant="calendarModalText">Stay -</Text>
                Available
              </Box>
            )}
            {data?.travel && (
              <Box minW={["100px", "200px"]}>
                <Text variant="calendarModalText">Travel -</Text>
                Available
              </Box>
            )}
          </HStack>
          <Box my="6">{data?.description}</Box>
          <HStack my="3" wrap="wrap" gap="2">
            {data?.images?.map((el, id) => {
              return (
                <Image
                  key={id}
                  src={el?.img_url}
                  width={["160px", "250px"]}
                  height={["100px", "200px"]}
                  objectFit="cover"
                  fallbackSrc="/images/logo.png"
                ></Image>
              );
            })}
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button variant="ghost">Book Now!</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CalendarModal;
