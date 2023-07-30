import { Box,Button,Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";
import FooterCounter from "./FooterCounter";


const Footer = () => {


  const footerData = [
    {
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.62 8.752C15.4158 8.752 15.2199 8.67088 15.0755 8.52647C14.9311 8.38207 14.85 8.18622 14.85 7.982C14.85 7.612 14.48 6.842 13.86 6.172C13.25 5.522 12.58 5.142 12.02 5.142C11.8158 5.142 11.6199 5.06088 11.4755 4.91647C11.3311 4.77207 11.25 4.57622 11.25 4.372C11.25 3.952 11.6 3.602 12.02 3.602C13.02 3.602 14.07 4.142 14.99 5.112C15.85 6.022 16.4 7.152 16.4 7.972C16.4 8.402 16.05 8.752 15.62 8.752ZM19.23 8.75C19.0258 8.75 18.8299 8.66888 18.6855 8.52447C18.5411 8.38007 18.46 8.18422 18.46 7.98C18.46 4.43 15.57 1.55 12.03 1.55C11.8258 1.55 11.6299 1.46888 11.4855 1.32447C11.3411 1.18007 11.26 0.984217 11.26 0.78C11.26 0.36 11.6 0 12.02 0C16.42 0 20 3.58 20 7.98C20 8.4 19.65 8.75 19.23 8.75ZM9.05 12.95L7.2 14.8C6.81 15.19 6.19 15.19 5.79 14.81C5.68 14.7 5.57 14.6 5.46 14.49C4.44877 13.472 3.5161 12.3789 2.67 11.22C1.85 10.08 1.19 8.94 0.71 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C8.83 11.32 8.94 11.42 9.04 11.52C9.44 11.91 9.45 12.55 9.05 12.95ZM19.97 16.33C19.9687 16.7074 19.8833 17.0798 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C17.39 19.62 17.38 19.63 17.37 19.63C16.78 19.87 16.14 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C8.36 17 7.97 16.71 7.6 16.4L10.87 13.13C11.15 13.34 11.4 13.5 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z"
            fill="#FF3606"
          />
        </svg>
      ),
      title: "1234567892",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8C19.7956 8 20.5587 7.68393 21.1213 7.12132C21.6839 6.55871 22 5.79565 22 5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2C18.2044 2 17.4413 2.31607 16.8787 2.87868C16.3161 3.44129 16 4.20435 16 5C16 5.79565 16.3161 6.55871 16.8787 7.12132C17.4413 7.68393 18.2044 8 19 8ZM20.34 12.72H17.03C16.1 12.72 15.27 13.24 14.85 14.06L14.05 15.64C13.86 16.02 13.48 16.25 13.06 16.25H9.95C9.66 16.25 9.23 16.19 8.96 15.63L8.17 14.06C7.96844 13.6543 7.65755 13.3129 7.27237 13.0744C6.8872 12.8358 6.44305 12.7096 5.99 12.71H2.66C2.3 12.72 2 13.02 2 13.38V16.47C2 19.94 4.07 22 7.53 22H15.49C18.75 22 20.76 20.21 21 17.04V13.38C21 13.02 20.7 12.72 20.34 12.72Z"
            fill="#FF3606"
          />
          <path
            d="M21 10.4V11.33C20.79 11.26 20.57 11.22 20.34 11.22H17.03C15.53 11.22 14.18 12.05 13.52 13.39L12.82 14.76H10.19L9.51 13.4C9.18577 12.7439 8.68407 12.1918 8.06186 11.8064C7.43965 11.4211 6.72187 11.2179 5.99 11.22H2.66C2.43 11.22 2.21 11.26 2 11.33V8.52C2 5.47 4.47 3 7.52 3H13.6C13.7483 2.99997 13.8948 3.03293 14.0288 3.09648C14.1627 3.16004 14.2809 3.2526 14.3747 3.36747C14.4685 3.48233 14.5356 3.61662 14.5711 3.76062C14.6066 3.90461 14.6097 4.05469 14.58 4.2C14.42 5 14.49 5.87 14.88 6.79C15.3336 7.83366 16.1663 8.66635 17.21 9.12C18.13 9.51 19 9.58 19.8 9.42C19.9453 9.39034 20.0954 9.39337 20.2394 9.42887C20.3834 9.46437 20.5177 9.53146 20.6325 9.62526C20.7474 9.71907 20.84 9.83725 20.9035 9.97125C20.9671 10.1052 21 10.2517 21 10.4Z"
            fill="#FF3606"
          />
        </svg>
      ),
      title: "trekkinghilltrek@gmail.com",
    },
    {
      svg: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9999 6.01002L12.4499 0.770018C11.1699 -0.249982 9.16988 -0.259982 7.89988 0.760018L1.34988 6.01002C0.409885 6.76002 -0.160115 8.26002 0.0398848 9.44002L1.29988 16.98C1.58988 18.67 3.15988 20 4.86988 20H15.4699C17.1599 20 18.7599 18.64 19.0499 16.97L20.3099 9.43002C20.4899 8.26002 19.9199 6.76002 18.9999 6.01002ZM10.9199 16C10.9199 16.41 10.5799 16.75 10.1699 16.75C9.75988 16.75 9.41988 16.41 9.41988 16V13C9.41988 12.59 9.75988 12.25 10.1699 12.25C10.5799 12.25 10.9199 12.59 10.9199 13V16Z"
            fill="#FF3606"
          />
        </svg>
      ),
      title: "BKC road,,bandra east",
    },
    {
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM10 13.88C7.86 13.88 6.12 12.14 6.12 10C6.12 7.86 7.86 6.12 10 6.12C12.14 6.12 13.88 7.86 13.88 10C13.88 12.14 12.14 13.88 10 13.88ZM15.92 4.88C15.87 5 15.8 5.11 15.71 5.21C15.61 5.3 15.5 5.37 15.38 5.42C15.198 5.49725 14.9971 5.51853 14.803 5.48113C14.6089 5.44372 14.4303 5.34933 14.29 5.21C14.2 5.11 14.13 5 14.08 4.88C14.0286 4.75982 14.0015 4.63069 14 4.5C14 4.37 14.03 4.24 14.08 4.12C14.13 3.99 14.2 3.89 14.29 3.79C14.52 3.56 14.87 3.45 15.19 3.52C15.26 3.53 15.32 3.55 15.38 3.58C15.44 3.6 15.5 3.63 15.56 3.67C15.61 3.7 15.66 3.75 15.71 3.79C15.8 3.89 15.87 3.99 15.92 4.12C15.97 4.24 16 4.37 16 4.5C16 4.63 15.97 4.76 15.92 4.88Z"
            fill="#FF3606"
          />
        </svg>
      ),
      title: "trekkingigat",
    },
  ];
  const Links = [
    {
      links: "SUPPORT",
    },
    {
      links: "DISCLAMAIR",
    },
    {
      links: "ELEMENT",
    },
    {
      links: "PRIVACY POLICY",
    },
  ];
  return (
    <>
      {/* main section */}
      <Flex flexDirection="column" height="100%" width="100%">
        {/* number section */}


        <AnimationOnScroll
                    animateOnce={true}
                    duration={0}
                    animateIn="animate__fadeIn"
                    afterAnimatedIn={() => setVisible(true)}
                    initiallyVisible={true}
                  >
        <Flex
          justifyContent="center"
          gap="100px"
          alignItems="center"
          width="100%"
          my="60px"
          flexWrap="wrap"
          padding="16px"
        >
           
          {numData.map((el, id) => {
            return (
              <Fragment key={id}>
                {visible && (
                <Flex alignItems="center" flexDirection="column" justifyContent="center" >
                  <Flex gap="20px" alignItems="center">
                    <Box display={["none","none","block","block"]}>
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 0C12.6 0 0 12.6 0 28C0 43.4 12.6 56 28 56C43.4 56 56 43.4 56 28C56 12.6 43.4 0 28 0ZM22.4 42L8.4 28L12.348 24.052L22.4 34.076L43.652 12.824L47.6 16.8L22.4 42Z"
                        fill="#FF461D"
                      />
                    </svg>
                    </Box>
                    <Box display={["block","block","none","none"]} >
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.25 0.5C9.7 0.5 0.25 9.95 0.25 21.5C0.25 33.05 9.7 42.5 21.25 42.5C32.8 42.5 42.25 33.05 42.25 21.5C42.25 9.95 32.8 0.5 21.25 0.5ZM17.05 32L6.55 21.5L9.511 18.539L17.05 26.057L32.989 10.118L35.95 13.1L17.05 32Z" fill="#FF461D"/>
</svg>

                    </Box>
                    

                  

                    <Text
                      color="black"
                      fontSize={["30px", "45px", "60px", "60px"]}
                      fontFamily="Anton"
                      fontWeight="400"
                      lineHeight="92px"
                    >
                       <CountUp end={el?.number} delay={0}></CountUp>
                    </Text>
                    <Box display={["none","none","block","block"]}>

                    <svg
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.2143 14.7857H14.2857V23.7143C14.2857 24.1879 14.0976 24.6421 13.7627 24.977C13.4278 25.3119 12.9736 25.5 12.5 25.5C12.0264 25.5 11.5722 25.3119 11.2373 24.977C10.9024 24.6421 10.7143 24.1879 10.7143 23.7143V14.7857H1.78571C1.31211 14.7857 0.85791 14.5976 0.523024 14.2627C0.188138 13.9278 0 13.4736 0 13C0 12.5264 0.188138 12.0722 0.523024 11.7373C0.85791 11.4024 1.31211 11.2143 1.78571 11.2143H10.7143V2.28571C10.7143 1.81211 10.9024 1.35791 11.2373 1.02302C11.5722 0.688137 12.0264 0.5 12.5 0.5C12.9736 0.5 13.4278 0.688137 13.7627 1.02302C14.0976 1.35791 14.2857 1.81211 14.2857 2.28571V11.2143H23.2143C23.6879 11.2143 24.1421 11.4024 24.477 11.7373C24.8119 12.0722 25 12.5264 25 13C25 13.4736 24.8119 13.9278 24.477 14.2627C24.1421 14.5976 23.6879 14.7857 23.2143 14.7857Z"
                        fill="#FF461D"
                      />
                    </svg>
                    </Box>
                    <Box display={["block","block","none","none"]}>

                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4107 10.8393H10.7143V17.5357C10.7143 17.8909 10.5732 18.2316 10.322 18.4827C10.0709 18.7339 9.7302 18.875 9.375 18.875C9.0198 18.875 8.67915 18.7339 8.42798 18.4827C8.17682 18.2316 8.03571 17.8909 8.03571 17.5357V10.8393H1.33929C0.984085 10.8393 0.643433 10.6982 0.392268 10.447C0.141103 10.1959 0 9.8552 0 9.5C0 9.1448 0.141103 8.80415 0.392268 8.55298C0.643433 8.30182 0.984085 8.16071 1.33929 8.16071H8.03571V1.46429C8.03571 1.10908 8.17682 0.768432 8.42798 0.517267C8.67915 0.266103 9.0198 0.125 9.375 0.125C9.7302 0.125 10.0709 0.266103 10.322 0.517267C10.5732 0.768432 10.7143 1.10908 10.7143 1.46429V8.16071H17.4107C17.7659 8.16071 18.1066 8.30182 18.3577 8.55298C18.6089 8.80415 18.75 9.1448 18.75 9.5C18.75 9.8552 18.6089 10.1959 18.3577 10.447C18.1066 10.6982 17.7659 10.8393 17.4107 10.8393Z" fill="#FF461D"/>
</svg>

</Box>
                  </Flex>
                  <Text
                    fontSize={["13px", "15px", "20px", "20px"]}
                    color="#111111"
                  >
                    {el.title}
                  </Text>
                </Flex>
                )}
              </Fragment>
            );
          })}
        </Flex>
        </AnimationOnScroll>

        {/* img section */}
        <Box height={["170px","170px","422px","422px"]} width="100%" mb={["-5px","-5px","0px","0px"]} >
          <Box
            height="100%"
            width="100%"
            bgRepeat="no-repeat"
            bgImg={[
              "url('/images/footermobile.png')",
              "url('/images/footermobile.png')",
              "url('/images/footernew.png')",
              "url('/images/footernew.png')",
            ]}
            bgSize={["contain","cover","cover","cover"]}
            backgroundPosition="center"
          ></Box>
        </Box>

        {/* footer section */}
        <Flex
          bgColor="#2C111E"
          justifyContent="start"
          alignItems="center"
          gap={["0px","0px","140px","140px"]}
          flexDirection={["column","column","row","row"]}
          width="100%"
        >
          {/* left container */}
          <Flex p="40px" 
          
          ml={["0px","0px","200px","200px"]}
          >
            <Image src="/images/finallogo.png"></Image>
          </Flex>

          {/* right section */}
          <Flex
            // width="50%"
            justifyContent="center"
            alignItems="start"
            flexDirection="column"
            gap="70px"
            pt={["40px","40px","88px","88px"]}
            // margin="auto"


          >
            <Flex gap={["50px","50px","120px","120px"]} 
          flexDirection={["column","column","row","row"]}
          >
              <Flex flexDirection="column" gap={["16px","16px","40px","40px"]}>
                {footerData.map((el, id) => {
                  return (
                      <Flex key={id} gap="30px">
                        {el.svg}
                        <Text
                          color="white"
                          fontSize={["16px","16px","23px","23px"]}
                          fontWeight="500"
                          fontFamily="Roboto"
                          lineHeight="27px"
                        >
                          {el.title}
                        </Text>
                      </Flex>
                  );
                })}
              </Flex>
              <Flex flexDirection="column" gap={["16px","16px","40px","40px"]}>
                {Links.map((el, id) => {
                  return (
                      <Flex key={id} gap="30px" alignItems="center">
                        <svg
                          width="13"
                          height="14"
                          viewBox="0 0 13 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.932 13.138V10.217L9.396 7.02L0.932 3.823V0.879L12.478 5.479V8.538L0.932 13.138Z"
                            fill="#FF3606"
                          />
                        </svg>
                        <Text
                          color="white"
                          fontSize={["16px","16px","23px","23px"]}

                          fontWeight="500"
                          fontFamily="Roboto"
                          lineHeight="27px"
                        >
                          {el.links}
                        </Text>
                      </Flex>
                  );
                })}
              </Flex>
            </Flex>

            <Flex justifyContent="center">
              
              <Flex width={["280px","300px","650px","650px"]} borderRadius="50px" overflow="hidden">
                < Box as="input" type="text" placeholder="Connect with us" height="100%" width="100%" pl="25px" fontSize={["18px","18px","20px","20px"]}/>
                <Button p="10px 30px" fontSize={["18px","18px","23px","23px"]} lineHeight="30px" borderRadius="0px" bgColor="#591433" color="white" fontWeight="600">SEND</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          bgColor="#2C111E"
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
          pt={["76px","76px","84px","84px"]}
          pb="25px"
        >
          <Text
            color="white"
            fontSize={["10px","10px","15px","15px"]}
            fontFamily="Roboto"
            lineHeight="17px"
          >
            Disclamair : Copyrights belown to trekkingigat of year 2023-2024
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
