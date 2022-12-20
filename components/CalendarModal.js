import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
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
        <ModalBody px="4">
          <Flex
            fontSize="16px"
            wrap="wrap"
            mb="4"
            justifyContent="space-between"
            w={["100%", "100%", "70%", "60%"]}
          >
            <Box flex="1">
              <Text variant="calendarModalText">Start Date -</Text>
              {moment(data?.startDate, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY")}
            </Box>

            <Box flex="1">
              <Text variant="calendarModalText">End Date -</Text>
              {moment(data?.endDate, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY")}
            </Box>

            <Box flex="1">
              <Text variant="calendarModalText">Amount -</Text>
              {data?.price} ₹
            </Box>
          </Flex>

          <Flex
            fontSize="16px"
            wrap="wrap"
            mb="4"
            justifyContent="space-between"
            w={["100%", "100%", "70%", "60%"]}
          >
            {data?.food && (
              <Box flex="1">
                <Text variant="calendarModalText">Food -</Text>
                Available
              </Box>
            )}
            {data?.stay && (
              <Box flex="1">
                <Text variant="calendarModalText">Stay -</Text>
                Available
              </Box>
            )}
            {data?.travel && (
              <Box flex="1">
                <Text variant="calendarModalText">Travel -</Text>
                Available
              </Box>
            )}
          </Flex>

          <Text variant="calendarModalText" fontSize="16px">
            Description -
          </Text>
          <Box mb="6">{data?.description}</Box>
          <Text variant="calendarModalText" fontSize="16px">
            Images -
          </Text>
          <Flex
            my="3"
            gap="2"
            // maxH="250px"
            w="100%"
            h="100%"
            overflowX="auto"
            overflowY="hidden"
          >
            {data?.images?.map((el, id) => {
              return (
                <Image
                  key={id}
                  alt={`${data?.name}  ${el?.id} `}
                  src={el?.img_url}
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  fallbackSrc="/images/preloader.png"
                ></Image>
              );
            })}
          </Flex>
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
