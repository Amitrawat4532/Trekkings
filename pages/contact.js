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
      // bg="gray.200"
      bgImage="url('/images/Background_final.png')"
    >
      <Link href="/">
        <Button
          position={["relative", "relative", "absolute", "absolute"]}
          mt="4"
          ml="4"
          bg="transparent"
          color="mainOrange"
          fontWeight="normal"
          fontSize="28px"
          fontFamily="anton"
        >
          <Text as="span" pb="2" pr="1">
            &larr;
          </Text>
          Back
        </Button>
      </Link>
      <Flex
        // bg="gray.200"
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
                      variant="ghost"
                      size="lg"
                      icon={<BsTelephonePlus size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
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
                      variant="ghost"
                      size="lg"
                      icon={<BsWhatsapp size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
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
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdOutlineMailOutline />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
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
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsInstagram />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
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
