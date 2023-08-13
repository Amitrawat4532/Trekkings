import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalBody,  useDisclosure } from '@chakra-ui/react';
import Contact from './Contact';

 export default function Popup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('full')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    
    // const sizes = ['full']
  
    return (
      <>
          <Button
            onClick={() => handleSizeClick(size)}
            m={4}
            variant="blogButton"
          >Lets Connect</Button>
  
        <Modal onClose={onClose} size={size} isOpen={isOpen} isCentered>
          <ModalOverlay   />
          <ModalContent bg="none"
           backdropFilter='auto'
           backdropInvert='10%'
           backdropBlur='2px'>
            <ModalBody >
              <Contact />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }