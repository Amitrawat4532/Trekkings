import { Flex,Grid ,GridItem} from "@chakra-ui/react";

const Gallery = () => {
  return (
    <>
    <Flex justifyContent="center" alignItems="center"  height="100%" my="62px" display={["none","none","flex","flex"]}>
      {/* Desktop version */}
        <Grid templateColumns="repeat(3, 1fr)"  height="100%" width={["0px","0px","70%","70%"]} gap={3}   >
      <GridItem rowSpan={2} colSpan={1} maxW="400px"  >
        <img src="images/finalGallary1.png"></img>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  maxW="400px" >
        {/* Second child */}
        <img src="images/finalGallary2.png"></img>
        
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  maxW="400px" >
        {/* Third child */}
        <img src="images/finalGallary3.png"></img>

      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  borderRadius="24px" maxW="400px" >
        <img src="images/finalGallary4.png"></img>
        {/* Fourth child */}
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  maxW="400px" >
        {/* Fifth child */}
        <img src="images/finalGallary5.png"></img>

      </GridItem>
      <GridItem rowSpan={1} colSpan={2}  maxW="887px" >
        {/* Sixth child */}
        <img src="images/finalGallary6.png" width="860px"></img>

      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  maxW="400px"  bgImage="url('/images/finalGallary7.png')" >
        {/* Seventh child */} 
        {/* <img src="images/finalGallary7.png" ></img> */}

      </GridItem>
     
     
    </Grid>

    {/* Mobile version */}
   
    </Flex>
    <Flex flexDirection="column" p="20px" gap="20px" display={["flex","flex","none","none"]} justifyContent="center" alignItems="center">
    <Flex>
      <img src="images/finalGallary3.png"></img>

    </Flex>
    <Flex>
      <img src="images/finalGallary8.png"></img>

    </Flex>

    <Flex>
      <img src="images/finalGallary7.png"></img>

    </Flex>
    </Flex>
   
    </>
  );
};
export default Gallery;
