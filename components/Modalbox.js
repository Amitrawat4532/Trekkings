import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalBody,  useDisclosure } from '@chakra-ui/react';
import Contact from './Contact';

 export default function Popup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
          <Button
            onClick={onOpen}
            m={4}
            variant="blogButton"
          >Lets Connect</Button>
  
        <Modal onClose={onClose} size={'4xl'} isOpen={isOpen} isCentered>
          <ModalOverlay   />
          <ModalContent bg="transparent" border='0' p='0'
          //  backdropFilter='auto'
          //  backdropInvert='10%'
          //  backdropBlur='2px'
           >
            <ModalBody 
            bg="transparent" border='0' p='0'
            >
              <Contact close={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }