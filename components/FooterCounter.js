import { Flex, Text , Box } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CountUp from 'react-countup';

const FooterCounter = ({settings}) => {
  const [visible, setVisible] = useState(false);
  const numData = [
    {
      number: settings?.destination,
      title: "Destination Hiked",
    },
    {
      number: settings?.totalTreks,
      title: "Treks Completed",
    },
    {
      number: settings?.hikers,
      title: "Satisfied hikers",
    },
    {
      number: settings?.experience,
      title: "Years of best experience",
    },
  ];
  return (
    <>
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
           
          {numData?.map((el, id) => {
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
    </>
  )
}

export default FooterCounter