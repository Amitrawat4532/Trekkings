import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import moment from "moment";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { CopyIcon } from "@chakra-ui/icons";

// import required modules

const BigCard = (props) => {
  const {
    name,
    price,
    startDate,
    images,
    location,
    stay,
    description,
    food,
    endDate,
  } = props.data;

  const styles = {
    cardText1: {
      color: "#000",
      fontFamily: "Raleway",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "27px",
      textTransform:'capitalize'
    },
    cardTextSmall: {
      color: "#000",
      opacity: ".6",
      fontFamily: "Raleway",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "27px",
      textTransform: "uppercase",
      paddingTop: "5px",
    },
    cardText2: {
      color: "#78909C",
      fontFamily: "Raleway",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      padding: "8px 0",
    },
    cardText3: {
      color: "#90A4AE",
      fontFamily: "Raleway",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      textAlign: "center",
    },
    cardText4: {
      color: "#607D8A",
      fontFamily: "Raleway",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      textAlign: "center",
      paddingTop: "8px",
    },
  };
  return (
    <>
      <Flex
        // maxH={["100%", "100%", "551px", "551px"]}
        w="100%"
        minW='450px'
        borderRadius="16px"
        border="1px solid #CFD8DC"
        background="#FFF"
        boxShadow="0px 4px 40px 0px rgba(0, 0, 0, 0.08)"
        overflow="hidden"
        position={"relative"}
       
      >

        {/* UPCOMING badge */}
        <Box
          position={"absolute"}
          top={3}
          left={3}
          zIndex={100}
          pr={4}
          pl={2}
          py={1}
        
          rounded={"full"}
          bg={"blue.400"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
          display={'flex'}
          gap={2}
        >
          <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M8.99983 13.7717L13.1498 16.2817C13.9098 16.7417 14.8398 16.0617 14.6398 15.2017L13.5398 10.4817L17.2098 7.30172C17.8798 6.72172 17.5198 5.62172 16.6398 5.55172L11.8098 5.14172L9.91983 0.681719C9.57983 -0.128281 8.41983 -0.128281 8.07983 0.681719L6.18983 5.13172L1.35983 5.54172C0.479829 5.61172 0.119828 6.71172 0.789828 7.29172L4.45983 10.4717L3.35983 15.1917C3.15983 16.0517 4.08983 16.7317 4.84983 16.2717L8.99983 13.7717Z"
                  fill="#EAC800"
                  />
              </svg>
                <Text
                  fontSize={"sm"}
                  fontWeight={"bold"}
          color={"white"}

                >
                UPCOMING
                  </Text>  
        </Box>
        
        <Flex flexWrap={"wrap"} direction={"row"}>
          {/* Image */}
          <Box
            position={"relative"}
            width={"100%"}
            minW={["100%", "100%", "350px", "350px"]}
            minHeight={"200px"}
            flex={1}
            background={'gray.300'}
          >
            <Image
              src={
                Array.isArray(images)
                  ? images[0]?.img_url
                  : "/images/finallogo.png"
              }
              objectFit="cover"
              fallbackSrc="/images/logo.png"
              layout="fill"
            />
            <Box
        position={'absolute'}
        top='80%'
        right='3'
        >
        <ShowImages images={images} />
        </Box>
          </Box>

              {/* Details */}
          <Flex
            h="auto"
            w="100%"
            flex="1"
            justifyContent={"space-between"}
            px="22px"
            py="16px"
            direction={"column"}
            alignItems={"space-between"}
          >
            {/* Card Text */}
            <Flex direction={"column"}>
              <Flex justifyContent={'space-between'} 
              flexDirection={['column','column','row','row']}
              >

              <Text style={styles.cardText1}>{name}</Text>
              <Text style={styles.cardTextSmall}>{location}</Text>
              </Flex>
              <Text
                style={styles.cardText2}
                h={"auto"}
                // maxH={"50px"}
                w="auto"
                wordWrap="break-word"
                // overflow="hidden"
                my="3"
                // textOverflow="ellipsis"
              >
                {description}
              </Text>
            </Flex>

            {/* Card Pricing*/}
            <Flex>
              <Text
                borderRadius="17px"
                background="#27AE60"
                px="10px"
                py="4px"
                color="white"
                textAlign="center"
                fontFamily="Raleway"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
              >
                Rs - {price}
              </Text>
            </Flex>

            <Divider color="red" h="1px" w="100%" my="12px" />

            {/* Card Details */}
            <Flex flexWrap={"wrap"} justifyContent={"space-around"} gap={["5","5","3","3"]}>
            <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00016 1.33203C4.32683 1.33203 1.3335 4.32536 1.3335 7.9987C1.3335 11.672 4.32683 14.6654 8.00016 14.6654C11.6735 14.6654 14.6668 11.672 14.6668 7.9987C14.6668 4.32536 11.6735 1.33203 8.00016 1.33203ZM11.0402 6.88537L8.30017 8.94536C8.28684 8.95203 8.26683 8.9587 8.2535 8.97204C8.2335 8.9787 8.22015 8.98537 8.20015 8.99203C8.14015 9.02537 8.06683 9.04537 8.00016 9.04537C7.9335 9.04537 7.86682 9.02536 7.80682 8.9987C7.79349 8.99203 7.78017 8.98536 7.76017 8.9787C7.74684 8.97203 7.73349 8.96537 7.72015 8.9587L5.72015 7.58537C5.49349 7.43203 5.43351 7.1187 5.59351 6.89203C5.74684 6.66536 6.06016 6.60536 6.28682 6.7587L7.98684 7.92536L10.4402 6.08537C10.6602 5.9187 10.9735 5.96536 11.1402 6.18536C11.3068 6.40536 11.2602 6.7187 11.0402 6.88537Z"
                    fill="#241314"
                  />
                </svg>
                <Text style={styles.cardText3}>Date</Text>
                <Text style={styles.cardText4}>
                  {moment(startDate, "YYYY-MM-DD HH:mm").format("DD MMM YY")} -
                  {moment(endDate, "YYYY-MM-DD HH:mm").format("DD MMM YY")}
                </Text>
              </Flex>
              <Flex direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.83301" cy="4.5" r="4" fill="#27AE60" />
                </svg>

                <Text style={styles.cardText3}>Availability</Text>
                <Text style={styles.cardText4}>Yes</Text>
              </Flex>
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.79063 7.67003C9.55359 7.67003 10.9952 6.23709 10.9952 4.47413C10.9952 2.71117 9.56228 1.26953 7.79063 1.26953C6.02767 1.26953 4.59473 2.70248 4.59473 4.47413C4.59473 6.24577 6.02767 7.67003 7.79063 7.67003Z"
                    fill="#241314"
                  />
                  <path
                    d="M10.2919 8.91016H5.71513C3.66559 8.91016 2.00684 10.5776 2.00684 12.6184V13.209C2.00684 14.0427 2.69291 14.7288 3.52663 14.7288H12.4804C13.3141 14.7288 14.0002 14.0427 14.0002 13.209V12.6271C14.0002 10.5776 12.3327 8.91016 10.2919 8.91016Z"
                    fill="#241314"
                  />
                </svg>
                <Text style={styles.cardText3}>Capacity</Text>
                <Text style={styles.cardText4}>30-50 people</Text>
              </Flex>
            </Flex>

            <Flex gap="6" mt="30">
              <Button
                colorScheme="blue"
                w="100%"
                background="#241314"
                color="white"
                borderRadius="8px"
              >
                Contact Us
              </Button>
              <Button
                w="100%"
                background="#E9E9E9"
                color="black"
                borderRadius="8px"
                // onClick={ShowImages}
              >
                Know More
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default BigCard;


// function StatsCard(props) {
//   const { title, stat, icon } = props
//   return (
//     <Stat
//       px={{ base: 2, md: 4 }}
//       py={'5'}
//       shadow={'xl'}
//       border={'1px solid'}
//       borderColor={useColorModeValue('gray.800', 'gray.500')}
//       rounded={'lg'}>
//       <Flex justifyContent={'space-between'}>
//         <Box pl={{ base: 2, md: 4 }}>
//           <StatLabel fontWeight={'medium'} isTruncated>
//             {title}
//           </StatLabel>
//           <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
//             {stat}
//           </StatNumber>
//         </Box>
//         <Box
//           my={'auto'}
//           color={useColorModeValue('gray.800', 'gray.200')}
//           alignContent={'center'}>
//           {icon}
//         </Box>
//       </Flex>
//     </Stat>
//   )
// }

export function ShowImages({images}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} 
      leftIcon={
        <CopyIcon />
      }
      h='6'
      w='100%'
      px='3'
      color={'white'}
      bg='red.400'
      borderRadius={30}
      fontSize={['10px','10px','14px','14px']}
      >Show More Images</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Images ( High Quality Images may take longer to load )</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
              Array.isArray(images) && images.map((el,id)=> <SwiperSlide key={id}> <Box
                position={"relative"}
                width={"100%"}
                minW={["100%", "100%", "350px", "350px"]}
                minHeight={"500px"}
                flex={1}
              >
                <Image
                  src={el ? el.img_url 
                      : "/images/finallogo.png"
                  }
                  objectFit="contain"
                  blurDataURL="/images/preloader.png"
                  layout="fill"
                />
              </Box></SwiperSlide>
                
                )
            }
      </Swiper>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}