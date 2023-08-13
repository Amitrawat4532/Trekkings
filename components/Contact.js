import { Flex, Text, Box, Button, ModalCloseButton } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

const Contact = (props) => {
  const [responseStatus, setResponseStatus] = useState("");
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    Contact: "",
    Travellers: "",
    Date: "",
    Email: "",
    Message: "",
  });

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://docs.google.com/forms/d/1nB0F_OFkB9nTxXadOAKvrezganWziZv1DsOfwiORPNo/formResponse",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.Text())
      .then((data) => {
        setResponseStatus(data?.status);
      })
      .catch((error) => {
        setResponseStatus("An error occurred while submitting the form.");
      });
      alert('Form Submitted Successfully')
      props.close();

  }
 
  return (
    <Flex
      h="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      overflow="hidden"
    >
      <Flex
        bg='url("/images/contactimg.png")'
        h="280px"
        w='100%'
        bgRepeat="no-repeat"
        objectFit="contain"
        alt="contact us "
        alignItems="end"
        position="relative"
        mt="10px"
      >
        <Box position="absolute" right="2%" top="2%">
          <ModalCloseButton>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.1092 3.89954C25.3242 3.69206 25.4957 3.44384 25.6138 3.16936C25.7318 2.89488 25.794 2.59963 25.7968 2.30085C25.7995 2.00207 25.7427 1.70573 25.6297 1.42913C25.5167 1.15253 25.3498 0.901213 25.1386 0.689833C24.9275 0.478453 24.6763 0.311248 24.3999 0.197974C24.1234 0.0846992 23.8271 0.0276249 23.5284 0.0300794C23.2296 0.0325339 22.9344 0.0944686 22.6598 0.21227C22.3852 0.330072 22.1369 0.501381 21.9292 0.716202L12.9112 9.73217L3.89614 0.716202C3.69015 0.495118 3.44175 0.317792 3.16575 0.194803C2.88975 0.0718142 2.59181 0.00568112 2.2897 0.000350197C1.98759 -0.00498073 1.6875 0.0505999 1.40734 0.163775C1.12717 0.27695 0.87267 0.445402 0.659013 0.659081C0.445356 0.87276 0.276922 1.12729 0.163758 1.40748C0.0505946 1.68768 -0.00498021 1.9878 0.000350161 2.28994C0.00568053 2.59208 0.0718068 2.89005 0.194783 3.16608C0.31776 3.4421 0.495067 3.69053 0.716128 3.89654L9.72516 12.9155L0.710128 21.9315C0.312687 22.358 0.0963157 22.9222 0.1066 23.5052C0.116885 24.0882 0.353023 24.6444 0.765263 25.0567C1.1775 25.469 1.73366 25.7051 2.31657 25.7154C2.89947 25.7257 3.46361 25.5093 3.89014 25.1118L12.9112 16.0958L21.9262 25.1148C22.3527 25.5123 22.9169 25.7287 23.4998 25.7184C24.0827 25.7081 24.6388 25.472 25.0511 25.0597C25.4633 24.6474 25.6995 24.0912 25.7097 23.5082C25.72 22.9252 25.5037 22.361 25.1062 21.9345L16.0972 12.9155L25.1092 3.89954Z"
                fill="#571432"
              />
            </svg>
          </ModalCloseButton>
        </Box>
        <Flex
          px={["20px", "20px", "40px", "40px"]}
          pb="15px"
          w="100%"
          position="relative"
        >
          <Text
            lineHeight="32px"
            color="white"
            fontSize={["20px", "20px", "32px", "32px"]}
            fontWeight="700"
          >
            IGATPURIHILLSTOTREAKTOURISM
          </Text>
          <Box
            position="absolute"
            right="40px"
            top={["-150px", "-150px", "-100px", "-100px"]}
          >
            <Image
              src="/images/svgcontact.png"
              alt="contact img"
              height="100"
              width="100"
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Flex>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <Flex
          w={["100%", "100%", "990px", "990px"]}
          h="100%"
          bgColor="white"
          px={["21px", "21px", "83px", "83px"]}
          flexWrap="wrap"
        >
          <Flex
            gap="5px"
            flexDirection="column"
            width={["100%", "100%", "50%", "50%"]}
            py={["15px", "15px", "20px", "25px"]}
          >
            <label
              htmlFor="name"
              color="black"
              fontSize="16px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              name="entry.1464953987"
              className="inputbox"
              placeholder="Enter your full name"
              fontSize="17px"
              bgColor="red"
              width="350px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            />
            <Box pt="7px">
              <svg
                width="348"
                height="2"
                viewBox="0 0 348 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.832031H347.924"
                  stroke="#8D8D8D"
                  stroke-width="1.25152"
                />
              </svg>
            </Box>
          </Flex>

          <Flex
            gap="5px"
            flexDirection="column"
            width={["100%", "100%", "50%", "50%"]}
            py={["15px", "15px", "20px", "25px"]}
          >
            <label
              htmlFor="phone"
              color="black"
              fontSize="16px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              required
              name="entry.427502725"
              placeholder="+91 1234567890"
              className="inputbox"
              fontSize="17px"
              width="350px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            />
            <Box pt="7px">
              <svg
                width="348"
                height="2"
                viewBox="0 0 348 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.832031H347.924"
                  stroke="#8D8D8D"
                  stroke-width="1.25152"
                />
              </svg>
            </Box>
          </Flex>

          <Flex
            gap="5px"
            flexDirection="column"
            width={["100%", "100%", "50%", "50%"]}
            py={["15px", "15px", "20px", "25px"]}
          >
            <label
              htmlFor="mail"
              color="black"
              fontSize="16px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            >
              E-mail
            </label>
            <input
              type="email"
              id="mail"
              required
              name="entry.1880272626"
              className="inputbox"
              placeholder="abc@gmail.com"
              fontSize="17px"
              width="350px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            />
            <Box pt="7px">
              <svg
                width="348"
                height="2"
                viewBox="0 0 348 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.832031H347.924"
                  stroke="#8D8D8D"
                  stroke-width="1.25152"
                />
              </svg>
            </Box>
          </Flex>

          <Flex
            gap="5px"
            flexDirection="column"
            width={["100%", "100%", "50%", "50%"]}
            py={["15px", "15px", "20px", "25px"]}
          >
            <lable
              htmlFor="travellers"
              color="black"
              fontSize="16px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            >
              No. of Travellers
            </lable>
            <input
              pattern="[0-9]{10}"
              type="number"
              min="0"
              step="1"
              id="travellers"
              required
              className="inputbox"
              name="entry.1777147701"
              placeholder="eg. 2"
              fontSize="17px"
              width="350px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            />
            <Box pt="7px">
              <svg
                width="348"
                height="2"
                viewBox="0 0 348 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.832031H347.924"
                  stroke="#8D8D8D"
                  stroke-width="1.25152"
                />
              </svg>
            </Box>
          </Flex>

          <Flex
            gap="5px"
            flexDirection="column"
            width="100%"
            py={["15px", "15px", "20px", "25px"]}
          >
            <label
              htmlFor="message"
              color="black"
              fontSize="16px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
        //       required
              name="entry.1548824761"
              placeholder="write your message..."
              fontSize="17px"
              width="350px"
              fontFamily="Popins"
              fontWeight="500"
              lineHeight="25px"
            />
            <Box pt="7px" display={["none", "none", "flex", "flex"]}>
              <svg
                width="821"
                height="3"
                viewBox="0 0 821 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.58594H821"
                  stroke="#8D8D8D"
                  stroke-width="1.25152"
                />
              </svg>
            </Box>
            <Box pt="7px" display={["flex", "flex", "none", "none"]}>
              <svg
                width="348"
                height="2"
                viewBox="0 0 348 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.832031H347.924"
                  stroke="#8D8D8D"
                  stroke-width="1.25152"
                />
              </svg>
            </Box>
          </Flex>

          <Flex
            gap="15px"
            flexDirection="column"
            width={["100%", "100%", "50%", "50%"]}
            py={["15px", "15px", "20px", "25px"]}
          >
            <Flex alignItems="center" gap="15px">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 9.24907C13.7502 11.7491 11.8652 14.1031 9.22022 14.6291C7.93022 14.886 6.59204 14.7293 5.39623 14.1815C4.20042 13.6336 3.20794 12.7224 2.56012 11.5777C1.91229 10.4329 1.64214 9.11296 1.78813 7.80574C1.93413 6.49853 2.48882 5.27069 3.37322 4.29707C5.18722 2.29907 8.25022 1.74907 10.7502 2.74907"
                  stroke="#4A9400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.75 8.25L8.25 10.75L14.25 4.25"
                  stroke="#4A9400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Text
                color="#565656"
                fontSize="14px"
                fontFamily="Popins"
                fontWeight="500"
                lineHeight="25px"
              >
                We assure the privacy of your contact data
              </Text>
            </Flex>

            <Flex alignItems="center" gap="15px">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 9.24907C13.7502 11.7491 11.8652 14.1031 9.22022 14.6291C7.93022 14.886 6.59204 14.7293 5.39623 14.1815C4.20042 13.6336 3.20794 12.7224 2.56012 11.5777C1.91229 10.4329 1.64214 9.11296 1.78813 7.80574C1.93413 6.49853 2.48882 5.27069 3.37322 4.29707C5.18722 2.29907 8.25022 1.74907 10.7502 2.74907"
                  stroke="#4A9400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.75 8.25L8.25 10.75L14.25 4.25"
                  stroke="#4A9400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Text
                color="#565656"
                fontSize="14px"
                fontFamily="Popins"
                fontWeight="500"
                lineHeight="25px"
              >
                This data will be used by our team to contact you and no other
                purpose
              </Text>
            </Flex>
          </Flex>

          <Flex
            gap="15px"
            flexDirection="column"
            width={["100%", "100%", "50%", "50%"]}
            py={["15px", "15px", "20px", "25px"]}
            alignItems={["center", "center", "end", "end"]}
          >
            <Button
              bgColor="#241314"
              variant="ContactButton"
              type="submit"
              color="white"
              fontFamily="Poppins"
              fontSize="24px"
              fontWeight="500"
              maxW={["100%", "100%", "294px", "294px"]}
              width="100%"
              px={["18px", "18px", "72px", "72px"]}
              py={["24px", "24px", "40px", "40px"]}
            >
              Send details
            </Button>
          </Flex>

          {/* <Flex width="100%">
            <Text
              fontSize="25px"
              color={responseStatus.includes("successfully") ? "green" : "red"}
            >
              {responseStatus}
            </Text>
          </Flex> */}
        </Flex>
      </form>
    </Flex>
  );
};

export default Contact;
