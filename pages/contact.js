import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  BsInstagram,
  BsPerson,
  BsTelephonePlus,
  BsWhatsapp,
} from "react-icons/bs";
import { MdCall, MdOutlineMailOutline } from "react-icons/md";
import { createClient } from "next-sanity";

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    useCdn: false,
  });

  const settingsQuery = `*[_type == "settings"]{
    ..., 
    "logo": logo.asset->url
  }`;

  const settings = await client.fetch(settingsQuery);

  return {
    props: {
      settings,
    },
  };
}

export default function ContactPage({ settings }) {
  return (
    <Box
      p="0"
      m="0"
      minH="100vh"
      overflow="hidden"
      position="relative"
      bg="gray.200"
    >
      <Link href="/">
        <Button
          position={["relative", "relative", "absolute", "absolute"]}
          mt="8"
          ml="4"
          bg="transparent"
          color="mainOrange"
          fontWeight="normal"
          fontSize="28px"
          fontFamily="anton"
          variant="backbutton"
        >
         <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.0003 53.3346L44.667 48.668L39.3337 43.3346H53.3337V36.668H39.3337L44.667 31.3346L40.0003 26.668L26.667 40.0013L40.0003 53.3346ZM40.0003 73.3346C35.3892 73.3346 31.0559 72.4591 27.0003 70.708C22.9448 68.9569 19.417 66.5824 16.417 63.5846C13.417 60.5846 11.0425 57.0569 9.29366 53.0013C7.54477 48.9457 6.66921 44.6124 6.66699 40.0013C6.66699 35.3902 7.54255 31.0569 9.29366 27.0013C11.0448 22.9457 13.4192 19.418 16.417 16.418C19.417 13.418 22.9448 11.0435 27.0003 9.29464C31.0559 7.54575 35.3892 6.67019 40.0003 6.66797C44.6114 6.66797 48.9448 7.54352 53.0003 9.29464C57.0559 11.0457 60.5837 13.4202 63.5837 16.418C66.5837 19.418 68.9592 22.9457 70.7103 27.0013C72.4614 31.0569 73.3359 35.3902 73.3337 40.0013C73.3337 44.6124 72.4581 48.9457 70.707 53.0013C68.9559 57.0569 66.5814 60.5846 63.5837 63.5846C60.5837 66.5846 57.0559 68.9602 53.0003 70.7113C48.9448 72.4624 44.6114 73.3369 40.0003 73.3346ZM40.0003 66.668C47.4448 66.668 53.7503 64.0846 58.917 58.918C64.0837 53.7513 66.667 47.4457 66.667 40.0013C66.667 32.5569 64.0837 26.2513 58.917 21.0846C53.7503 15.918 47.4448 13.3346 40.0003 13.3346C32.5559 13.3346 26.2503 15.918 21.0837 21.0846C15.917 26.2513 13.3337 32.5569 13.3337 40.0013C13.3337 47.4457 15.917 53.7513 21.0837 58.918C26.2503 64.0846 32.5559 66.668 40.0003 66.668Z" fill="#591433"/>
</svg>

        </Button>
      </Link>
      <Flex
        bg="black"
        align="center"
        justify="center"
        id="contact"
        h={["100%", "100%", "100vh", "100vh"]}
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
                color="white"
              >
                Get in Touch
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Link
                    href={`tel:${settings[0]?.contact}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton
                      aria-label="call"
                      size="lg"
                      icon={<BsTelephonePlus size="28px" />}
                      _hover={{
                        bg: "white",
                        color: useColorModeValue("red","black" ),
                      }}
                      isRound
                    />
                  </Link>

                  <Link
                    href={`https://wa.me/91${settings[0]?.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton
                      aria-label="whatsapp"
                      size="lg"
                      icon={<BsWhatsapp size="28px" />}
                      _hover={{
                        bg: "white",
                        color: useColorModeValue("red", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link
                    href={`mailto:${settings[0]?.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton
                      aria-label="email"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdOutlineMailOutline />}
                      _hover={{
                        bg: "white",
                        color: useColorModeValue("red", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link
                    href={settings[0]?.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton
                      aria-label="github"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsInstagram />}
                      _hover={{
                        bg: "white",
                        color: useColorModeValue("red", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <MdCall />
                        </InputLeftElement>
                        <Input
                          type="tel"
                          name="contact"
                          placeholder="Your Contact No."
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="mainOrange"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
