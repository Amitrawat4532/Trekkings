import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";

function About() {
  const cards = [
    {
      svg: (
        <svg width="68" height="85" viewBox="0 0 68 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.625 57.375H40.375V46.75H51V34H40.375V23.375H27.625V34H17V46.75H27.625V57.375ZM34 85C24.1542 82.5208 16.0253 76.8712 9.6135 68.051C3.20167 59.2308 -0.00283146 49.4388 1.87721e-06 38.675V12.75L34 0L68 12.75V38.675C68 49.4417 64.7941 59.2351 58.3822 68.0553C51.9704 76.8754 43.843 82.5237 34 85Z" fill="#591433"/>
</svg>

      ),
      header: "SECRET LOCATIONS",
      description:
        " We explore for the fun and provide you with the best and beutiful locations available here so that you can add a new chapter of your adventure with beautiful memories",
      link: "/secretlocation",
    },
    {
      svg: (
        <svg width="60" height="85" viewBox="0 0 60 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 0C13.5525 0 0.25 13.3025 0.25 29.75C0.25 52.0625 30 85 30 85C30 85 59.75 52.0625 59.75 29.75C59.75 13.3025 46.4475 0 30 0ZM30 40.375C27.1821 40.375 24.4796 39.2556 22.487 37.263C20.4944 35.2704 19.375 32.5679 19.375 29.75C19.375 26.9321 20.4944 24.2296 22.487 22.237C24.4796 20.2444 27.1821 19.125 30 19.125C32.8179 19.125 35.5204 20.2444 37.513 22.237C39.5056 24.2296 40.625 26.9321 40.625 29.75C40.625 32.5679 39.5056 35.2704 37.513 37.263C35.5204 39.2556 32.8179 40.375 30 40.375Z" fill="#591433"/>
</svg>

      ),
      header: "SAFE ADVENTURE",
      description:
        " We take a special care with our team of our beloved customer so they dont face any difficulties while the journey and we take the whole responsibilities during the trek",
      link: "/safeadventure",
    },
    {
      svg: (
        <svg width="54" height="85" viewBox="0 0 54 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4089 0C27.488 0 30.7895 3.379 30.7895 7.434C30.7895 11.488 27.488 14.867 23.4089 14.867C19.3297 14.867 15.9306 11.488 15.9306 7.434C15.9306 3.379 19.3308 0 23.4089 0ZM23.8947 15.543C26.7013 15.456 28.8712 17.192 30.0129 19.019L37.7818 31.859L51.3782 37.555C55.2622 39.195 53.4173 44.312 49.0474 43.154C48.8911 43.0484 48.7289 42.9515 48.5616 42.864L39.4326 62.944C39.4326 62.944 42.3458 69.606 46.0366 77.137C49.6299 84.763 40.8892 88.046 37.6843 80.998L34.4803 73.854L29.8188 83.991L27.8763 83.122L33.3144 71.344L24.1855 51.554C23.7972 51.65 23.4089 51.554 22.923 51.554C22.923 51.554 12.3374 75.495 9.42318 81.771C6.60753 88.046 -1.74384 84.281 1.07181 78.101C3.88846 71.923 17.2907 41.899 17.2907 41.899L7.3288 42.061C5.81987 42.074 5.45874 41.835 5.36317 40.711C5.20926 37.741 4.94571 30.753 5.63679 27.514C6.52806 23.339 7.06021 18.744 10.0066 17.377C12.9541 16.01 18.0673 19.791 18.0673 19.791C18.8439 17.281 21.2722 15.543 23.8947 15.543ZM29.9153 30.603V42.19L38.2677 60.34L46.6191 42.093L34.4803 37.073C33.8969 36.783 33.412 36.397 33.0227 35.818L29.9153 30.603Z" fill="#591433"/>
</svg>

      ),
      header: "PROFESSIONAL HIKERS",
      description:
        "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer",
      link: "/professionalhikers",
    },
  ];

  return (
    <>
      {/* main container */}
      <Flex
        className="about_container"
        width="100%"
        height="100%"
        justifyContent="center"
        py={["45px","45px","40px","40px"]}
        px={["56px","56px","80px","80px"]}
        flexWrap="wrap"
        gap="80px"
        backgroundSize="70%"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        flexDirection="row"
        
      >
        {/* card container */}
        {cards.map((el, id) => {
          return (
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__bounceIn"
              key={id}
            >

              <Flex  h="100%" 
                width={["100%", "100%", "350px", "370px"]}
                p={["39px","39px","52px","52px"]}
                justifyContent="center"
                alignItems="center"
                backgroundColor="#210011" 
                border="1px solid #949494"
                boxShadow="15px 15px 8px rgba(0, 0, 0, 0.14)"
                borderRadius="30px">
                <Flex flexDirection="column">
                <Flex  width="100%" alignItems="center" justifyContent="center" mb={["30px","30px","40px","40px"]}>
                  <svg
                    width="68"
                    height="85"
                    viewBox="0 0 68 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {el?.svg}
                  </svg>
                </Flex>
      <Flex h="100%"  flexDirection="column" alignItems="center" justifyContent="center" gap={["18px","18px","24px","24px"]}>
      <Text
                    variant="aboutHeader"
      fontSize= {["18px","20px","20px","20px"]}
                    
                  >
                    {el?.header}
                  </Text>
                  <Text
                    variant="aboutParagraph"
      fontSize= {["14px","14px","16px","16px"]}
                   
                  >
                    {el?.description}
                  </Text>
                  <Link href={el?.link}>
                    <Flex gap="8px" pt={["12px","12px","16px","16px"]}>
                    <Text variant="aboutbutton" fontWeight="600" >  
                    Read more
                    </Text>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9378 16.082L16.4378 10.582C16.5211 10.4987 16.5803 10.4084 16.6153 10.3112C16.6503 10.2139 16.6675 10.1098 16.667 9.99867C16.667 9.88756 16.6495 9.78339 16.6145 9.68617C16.5795 9.58894 16.5206 9.49867 16.4378 9.41533L10.9378 3.91533C10.785 3.76256 10.5939 3.68283 10.3645 3.67617C10.135 3.6695 9.93726 3.74922 9.77115 3.91533C9.60448 4.06811 9.51753 4.25922 9.51031 4.48867C9.50309 4.71811 9.58309 4.91589 9.75031 5.082L13.8336 9.16533H4.52115C4.28504 9.16533 4.08698 9.24533 3.92698 9.40533C3.76698 9.56533 3.68726 9.76311 3.68781 9.99867C3.68781 10.2348 3.76754 10.4328 3.92698 10.5928C4.08642 10.7528 4.28448 10.8326 4.52115 10.832H13.8336L9.75031 14.9153C9.59754 15.0681 9.51753 15.2626 9.51031 15.4987C9.50309 15.7348 9.58309 15.9292 9.75031 16.082C9.90309 16.2487 10.0975 16.332 10.3336 16.332C10.5698 16.332 10.7711 16.2487 10.9378 16.082Z" fill="#591433"/>
</svg>
</Flex>

</Link>
                   
      </Flex>
                </Flex>
             
              </Flex>
            </AnimationOnScroll>
          );
        })}
      </Flex>

      {/* ***************************div end************************8 */}
      <Flex gap="10px" justifyContent="center" py="46px" px="2px" alignItems="center"  flexDirection={["column","column","row","row"]}>
        <Text
          as="h1"
          fontWeight="400"
          fontSize={["16px", "16px", "20px", "20px"]}
          letterSpacing="0.01em"
          color="#210011"
          fontFamily="Roboto"
          textAlign="center"
        >
          Dont hesistate to contact us for more details.
        </Text>
        <Link href="/events">
          <Flex alignItems="center" h="100%" >
          <Text
            
            fontWeight="700"
            fontSize={["14px", "14px", "16px", "16px"]}
            color="#591433"
            fontFamily="Roboto"
            lineHeight="7px"
            cursor="pointer"
            pr="10px"
          >
            EXPLORE ALL TREKKING  
          </Text>
          <Box display={["none","none","flex","flex"]}>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9378 16.582L16.4378 11.082C16.5211 10.9987 16.5803 10.9084 16.6153 10.8112C16.6503 10.7139 16.6675 10.6098 16.667 10.4987C16.667 10.3876 16.6495 10.2834 16.6145 10.1862C16.5795 10.0889 16.5206 9.99867 16.4378 9.91533L10.9378 4.41533C10.785 4.26256 10.5939 4.18283 10.3645 4.17617C10.135 4.1695 9.93726 4.24922 9.77115 4.41533C9.60448 4.56811 9.51753 4.75922 9.51031 4.98867C9.50309 5.21811 9.58309 5.41589 9.75031 5.582L13.8336 9.66533H4.52115C4.28504 9.66533 4.08698 9.74533 3.92698 9.90533C3.76698 10.0653 3.68726 10.2631 3.68781 10.4987C3.68781 10.7348 3.76754 10.9328 3.92698 11.0928C4.08642 11.2528 4.28448 11.3326 4.52115 11.332H13.8336L9.75031 15.4153C9.59754 15.5681 9.51753 15.7626 9.51031 15.9987C9.50309 16.2348 9.58309 16.4292 9.75031 16.582C9.90309 16.7487 10.0975 16.832 10.3336 16.832C10.5698 16.832 10.7711 16.7487 10.9378 16.582Z" fill="#591433"/>
</svg>



          </Box>

          <Box display={["flex","flex","none","none"]}>

          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.70409 12.0586L12.8291 7.93357C12.8916 7.87107 12.936 7.80336 12.9622 7.73045C12.9885 7.65753 13.0014 7.5794 13.001 7.49607C13.001 7.41274 12.9878 7.33461 12.9616 7.2617C12.9353 7.18878 12.8912 7.12107 12.8291 7.05857L8.70409 2.93357C8.58951 2.81899 8.44618 2.7592 8.27409 2.7542C8.10201 2.7492 7.95368 2.80899 7.82909 2.93357C7.70409 3.04815 7.63888 3.19149 7.63347 3.36357C7.62805 3.53565 7.68805 3.68399 7.81347 3.80857L10.876 6.87107H3.89159C3.71451 6.87107 3.56597 6.93107 3.44597 7.05107C3.32597 7.17107 3.26618 7.3194 3.26659 7.49607C3.26659 7.67315 3.32638 7.8217 3.44597 7.9417C3.56555 8.0617 3.71409 8.12149 3.89159 8.12107H10.876L7.81347 11.1836C7.69888 11.2982 7.63888 11.444 7.63347 11.6211C7.62805 11.7982 7.68805 11.944 7.81347 12.0586C7.92805 12.1836 8.07388 12.2461 8.25097 12.2461C8.42805 12.2461 8.57909 12.1836 8.70409 12.0586Z" fill="#591433"/>
</svg>


          </Box>
         


          </Flex>
          
        </Link>
      </Flex>
    </>
  );
}

export default About;
