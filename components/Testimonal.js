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

const testimonal2 = [
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

export default function WithSpeechBubbles({ testimonial }) {
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
          justifyContent="center"
        >
          {testimonial?.map((el, key) => {
            return (
              <AnimationOnScroll animateIn="animate__zoomInUp" key={key}>
                <Testimonial>
                  <TestimonialContent>
                    <TestimonialHeading textAlign="center">
                      {el?.title}
                    </TestimonialHeading>
                    <TestimonialText>{el?.description}</TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={el?.image}
                    name={el?.name}
                    title={el?.event}
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
