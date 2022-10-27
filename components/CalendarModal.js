import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const CalendarModal = ({ onClose, isOpen, scrollBehavior, data }) => {
    return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior={"inside"} size='4xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{data?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{data?.detail}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CalendarModal;
