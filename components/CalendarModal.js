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

const CalendarModal = ({ onClose, isOpen, data, settings }) => {
  const fullDate = moment(data?.startDate, "YYYY-MM-DD HH:mm").format(
    "DD MMM YYYY"
  );
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
          <a
            href={`https://wa.me/91${settings[0]?.whatsapp}?text=Event Name = ${data?.name}
                     Event Date = ${fullDate}

                     `}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            style={{ width: "100%" }}
          >
            <Button colorScheme="teal" variant="solid" mx="1">
              Book Now
              <Text as="span" pb="2" pl="2" fontSize="35px">
                &#8594;
              </Text>
            </Button>
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CalendarModal;
