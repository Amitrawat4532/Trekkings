import { Flex ,Text,Image, Box, Button} from '@chakra-ui/react'
import React,{useState} from 'react'

const Contact = () => {

        const [responseMessage, setResponseMessage] = useState('');
        const [formData, setFormData] = useState({
                Fname: '',
                Lname: '',
                Contact: '',
                Travellers: '',
                Date: '',
                Email: '',
                Message: '',
              });

        function Submit(e) {
                e.preventDefault();
                const formEle = document.querySelector("form");
                const formDatab = new FormData(formEle);
                fetch(
                  "https://script.google.com/macros/s/AKfycbxWRg97mPleekv0jUG1JVAGV5H_dHoY8MJZ_Bwl6zQmLWYWo_yAj3yI3h7jQWi4_jv9/exec",
                  {
                    method: "POST",
                    body: formDatab
                  }
                )
                .then((res) => res.text())
                .then((data) => {
                  console.log(data);
                  setResponseMessage(data);
                })
                .catch((error) => {
                  console.log(error);
                  setResponseMessage('An error occurred while submitting the form.');
                });
              }
              const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData((prevData) => ({ ...prevData, [name]: value }));
              };
  return (
        
     <Flex h="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="column" overflow="hidden" mt={["500px","500px","10px","10px"]} > 
      <Flex bg='url("/images/contactimg.png")' h="280px" w={["100%","100%","990px","990px"]}  bgRepeat="no-repeat" objectFit="contain" alt="contact us " alignItems="end"  position="relative" mt="10px" >
        <Box position="absolute" right="40px" top="20px" >

        </Box>
        <Flex  px={["20px","20px","40px","40px"]} pb="15px" w="100%" position="relative" >
        <Text lineHeight="32px" color="white" fontSize={["20px","20px","32px","32px"]} fontWeight="700">IGATPURIHILLSTOTREAKTOURISM</Text>

         <Image src="/images/svgcontact.png"  position="absolute" right="40px" top={["-150px","-150px","-100px","-100px"]} alt='contact img' />
        </Flex>

      </Flex>
      <form className="form" onSubmit={(e) => Submit(e)}>

      <Flex w={["100%","100%","990px","990px"]} h="100%" bgColor="white" px={["21px","21px","83px","83px"]}  flexWrap="wrap" >
        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">First Name</Text>
         <input type='text' name='Fname' placeholder='Mac' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>

        </Flex>

       
        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">Last Name</Text>
         <input type='text' name='Lname' placeholder='Tyre' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">Phone Number</Text>
         <input type='number' name='Contact' placeholder='+10 00 00 00 00' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">E-mail</Text>
         <input type='email' name='Email' placeholder='abc@gmail.com' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black" fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">Date of Travel</Text>
         <input type='text' name='Date' placeholder='28 Nov' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
         <Box pt="7px">
        <svg width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.832031H347.924" stroke="#8D8D8D" stroke-width="1.25152"/>
</svg>
        </Box>
        </Flex>

        <Flex gap="5px" flexDirection="column" width={["100%","100%","50%","50%"]}  py='30px'>
         <Text color="black"  fontSize="16px" fontFamily="Popins" fontWeight="500" lineHeight="25px">
        Traveller Count

         </Text>
         <input type='number' name="Travellers" placeholder='8' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
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
         <input type='text' name='Message' placeholder='write your message...' fontSize="17px" width="350px" fontFamily="Popins" fontWeight="500" lineHeight="25px" />
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
        <Button bgColor="#241314" type='submit' color="white" fontFamily="Poppins" fontSize="24px" fontWeight="500" maxW={["100%","100%","294px","294px"]} width="100%" px={["18px","18px","72px","72px"]}  py={["24px","24px","40px","40px"]}>Send details</Button>
        </Flex>

<Flex width="100%">
<Text  fontSize="25px" color={responseMessage.includes("successfully") ? "green" : "red"}>{responseMessage}</Text>

</Flex>
        
      </Flex>
</form>
    </Flex>
  )
}

export default Contact
