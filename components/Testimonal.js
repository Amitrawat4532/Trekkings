// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import React from "react";

// const Testimonal = () => {
//   return (
//     <>
//       {/* Header container*/}
//       <Flex
//         width="100%"
//         height="100%"
//         background="#606060"
//         flexDirection="column"
//         justifyContent="space-evenly"
//         minHeight="60vh"
//         pb="5"
//       >
//         <Flex
//           position="relative"
//           width="100%"
//           heigh="auto"
//           alignSelf="start"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Text variant="testimonalHeader1">TESTIMONALS</Text>

//           <Text variant="testimonalHeader2">WHAT THEY SAY ABOUT US</Text>
//         </Flex>

//         {/* $$$$$$$$$$$$$testimonal container$$$$$$$$$$$$4 */}
//         <Flex background="#606060">
//           <Image
//             src="./images/leftarrow.png"
//             width={["60px", "65px", "76px", "76px"]}
//             // height={["62px", "68px", "78px", "78px"]}
//             h="auto"
//             alignSelf="center"
//           />
//           {/* Main Testimonal */}
//           <Flex
//             width="100%"
//             background="#606060"
//             justifyContent="center"
//             alignItems="center"
//             gap="5%"
//             p="20px"
//             flexDirection={["column", "column", "row", "row"]}
//           >
//             <Flex
//               // width={["100%", "100%", "240px", "30%"]}
//               width={["100px", "100px", "200px", "200px"]}
//               height="100%"
//               justifyContent="center"
//               position="relative"
//             >
//               <Image
//                 src="./images/testimonal.png"
//                 //  width="100%"
//                 //  height="100%"
//                 width={["100px", "100px", "200px", "200px"]}
//                 height={["100px", "100px", "178px", "178px"]}
//               />
//               <Box
//                 w="30px"
//                 h="30px"
//                 borderRadius="50px"
//                 background="#ABAAAA"
//                 p="5px"
//                 position="absolute"
//                 right={["0px", "0px", "10px", "10px"]}
//                 top="0px"
//               >
//                 <Image src="./images/uppercoma.png" />
//               </Box>
//             </Flex>
//             <Flex
//               width={["100%", "100%", "60%", "68%"]}
//               flexDirection="column"
//               justifyContent="center"
//             >
//               <Text variant="testimonalParagraph">
//                 Trekking has always helped me in getting mental peace and a
//                 peaceful time to spend with inner me. and i would specially
//                 thanx to this company for helping me to connect with my inner
//                 spirit.
//               </Text>
//               <Flex
//                 width="100%"
//                 justifyContent={["center", "center", "start", "start"]}
//               >
//                 <Image src="./images/stars.png" width="162px" height="30px" />
//               </Flex>
//               <Text variant="testimonalHeading1">NELSON MANDELA</Text>
//               <Text variant="testimonalHeading2">PRESIDENT OF AMERICA</Text>
//             </Flex>
//           </Flex>
//           <Image
//             src="./images/rightarrow.png"
//             width={["60px", "65px", "76px", "76px"]}
//             height={["62px", "68px", "78px", "78px"]}
//             alignSelf="center"
//           />
//         </Flex>
//       </Flex>
//     </>
//   );
// };
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const testimonal = [
  {
    name: "Jane Cooper",
    profile: "CEO at ABC Corporation",
    header: "Efficient Collaborating",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Jane Cooper",
    profile: "CEO at ABC Corporation",
    header: "Intuitive Design",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Jane Cooper",
    profile: "CEO at ABC Corporation",
    header: "Mindblowing Service",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
];

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"} textAlign="center">
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text textAlign="center" fontWeight={600}>
          {name}
        </Text>
        <Text
          fontSize={"sm"}
          textAlign="center"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={10} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Text
            fontSize="32px"
            fontWeight="800"
            fontFamily="anton"
            textTransform="uppercase"
            color="black"
            letterSpacing={["3px", "3px", "5px", "5px"]}
          >
            Our Clients Speak
          </Text>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {testimonal.map((el, key) => {
            return (
              <AnimationOnScroll animateIn="animate__zoomInUp" key={key}>
                <Testimonial>
                  <TestimonialContent>
                    <TestimonialHeading textAlign="center">
                      {el?.header}
                    </TestimonialHeading>
                    <TestimonialText>{el?.message}</TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={el?.img}
                    name={el?.name}
                    title={el?.profile}
                  />
                </Testimonial>
              </AnimationOnScroll>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
