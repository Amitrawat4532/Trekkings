import { Flex ,Text,Image, Box, Button,ModalCloseButton} from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
        
     <Flex h="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="column" overflow="hidden" mt={["500px","500px","10px","10px"]} > 
      <Flex bg='url("/images/contactimg.png")' h="280px" w={["100%","100%","990px","990px"]}  bgRepeat="no-repeat" objectFit="contain" alt="contact us " alignItems="end"  position="relative" mt="10px" >
        <Box position="absolute" right="40px" top="20px" >
<ModalCloseButton  fontSize="80px" ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.94 0 0 8.94 0 20C0 31.06 8.94 40 20 40C31.06 40 40 31.06 40 20C40 8.94 31.06 0 20 0ZM28.6 28.6C28.415 28.7854 28.1952 28.9325 27.9532 29.0329C27.7113 29.1332 27.4519 29.1849 27.19 29.1849C26.9281 29.1849 26.6687 29.1332 26.4268 29.0329C26.1848 28.9325 25.965 28.7854 25.78 28.6L20 22.82L14.22 28.6C13.846 28.974 13.3389 29.184 12.81 29.184C12.2811 29.184 11.774 28.974 11.4 28.6C11.026 28.226 10.816 27.7189 10.816 27.19C10.816 26.9281 10.8675 26.6688 10.9677 26.4269C11.068 26.185 11.2148 25.9652 11.4 25.78L17.18 20L11.4 14.22C11.026 13.846 10.816 13.3389 10.816 12.81C10.816 12.2811 11.026 11.774 11.4 11.4C11.774 11.026 12.2811 10.816 12.81 10.816C13.3389 10.816 13.846 11.026 14.22 11.4L20 17.18L25.78 11.4C25.9652 11.2148 26.185 11.068 26.4269 10.9677C26.6688 10.8675 26.9281 10.816 27.19 10.816C27.4519 10.816 27.7112 10.8675 27.9531 10.9677C28.195 11.068 28.4148 11.2148 28.6 11.4C28.7852 11.5852 28.932 11.805 29.0323 12.0469C29.1325 12.2888 29.184 12.5481 29.184 12.81C29.184 13.0719 29.1325 13.3312 29.0323 13.5731C28.932 13.815 28.7852 14.0348 28.6 14.22L22.82 20L28.6 25.78C29.36 26.54 29.36 27.82 28.6 28.6Z" fill="#241314"/>
</svg>
</ModalCloseButton>

        </Box>
        <Flex  px={["20px","20px","40px","40px"]} pb="15px" w="100%" position="relative" >
        <Text lineHeight="32px" color="white" fontSize={["20px","20px","32px","32px"]} fontWeight="700">IGATPURIHILLSTOTREAKTOURISM</Text>
         <Image src="/images/svgcontact.png"  position="absolute" right="40px" top={["-150px","-150px","-100px","-100px"]} />
        </Flex>

      </Flex>
      <Flex w={["100%","100%","990px","990px"]} h="100%" bgColor="white" px={["21px","21px","83px","83px"]}  flexWrap="wrap" >
        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">First Name</Text>
         <input type='text' placeholder='Mac' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

       

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">Last Name</Text>
         <input type='text' placeholder='Tyre' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">Phone Number</Text>
         <input type='number' placeholder='+10 00 00 00 00' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">E-mail</Text>
         <input type='email' placeholder='abc@gmail.com' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">Date of Travel</Text>
         <input type='text' placeholder='28 Nov' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">
        Traveller Count

         </Text>
         <input type='number' placeholder='8' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width="100%"  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">
        Message

         </Text>
         <input type='text' placeholder='write your message...' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px" display={["none","none","flex","flex"]}>
         <svg width="821" height="3" viewBox="0 0 821 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1.58594H821" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>

        </Box>
        <Box pt="7px" display={["flex","flex","none","none"]}>
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>

        </Box>
        </Flex>

        <Flex gap="15px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
        <Flex alignItems="center" gap="15px">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 9.24907C13.7502 11.7491 11.8652 14.1031 9.22022 14.6291C7.93022 14.886 6.59204 14.7293 5.39623 14.1815C4.20042 13.6336 3.20794 12.7224 2.56012 11.5777C1.91229 10.4329 1.64214 9.11296 1.78813 7.80574C1.93413 6.49853 2.48882 5.27069 3.37322 4.29707C5.18722 2.29907 8.25022 1.74907 10.7502 2.74907" stroke="#4A9400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.75 8.25L8.25 10.75L14.25 4.25" stroke="#4A9400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<Text color="#565656" fontSize="14px" fontFamily="Popins" fontWeight="500" lineHeight="25px">We assure the privacy of your contact data</Text>
        </Flex>

        <Flex alignItems="center" gap="15px">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 9.24907C13.7502 11.7491 11.8652 14.1031 9.22022 14.6291C7.93022 14.886 6.59204 14.7293 5.39623 14.1815C4.20042 13.6336 3.20794 12.7224 2.56012 11.5777C1.91229 10.4329 1.64214 9.11296 1.78813 7.80574C1.93413 6.49853 2.48882 5.27069 3.37322 4.29707C5.18722 2.29907 8.25022 1.74907 10.7502 2.74907" stroke="#4A9400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.75 8.25L8.25 10.75L14.25 4.25" stroke="#4A9400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<Text color="#565656" fontSize="14px" fontFamily="Popins" fontWeight="500" lineHeight="25px">This data will be used by our team to contact you and no other purpose</Text>
        </Flex>
        </Flex>

        <Flex gap="15px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px' alignItems={["center","center","end","end"]}>
        <Button bgColor="#241314" color="white" fontFamily="Poppins" fontSize="24px" fontWeight="500" maxW={["100%","100%","294px","294px"]} width="100%" px={["18px","18px","72px","72px"]}  py={["24px","24px","40px","40px"]}>Send details</Button>
        </Flex>

        

        
      </Flex>
    </Flex>
  )
}

export default Contact
