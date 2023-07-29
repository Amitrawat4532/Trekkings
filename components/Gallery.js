import { Box, Flex,Grid ,GridItem} from "@chakra-ui/react";

const Gallery = () => {
  return (
    <><Box className="gallery_container"  my={["30px","30px","62px","62px"]} mx={["0px","10px","100px","100px"]}>
<Flex justifyContent="center" alignItems="center"  height="100%"  display={["none","none","flex","flex"]} width="100%" >
      {/* Desktop version */}
        <Grid templateColumns="repeat(3, 1fr)"  height="100%" width={["0px","0px","100%","100%"]} gap={3}  flexWrap="wrap">
      <GridItem rowSpan={2} colSpan={1}  bgImage="url('/images/finalGallary1.png')" bgSize="cover" bgRepeat="no-repeat"  >
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} width="100%" h={["0px","0px","250px","400px"]}   bgImage="url('/images/finalGallary2.png')" bgSize="cover" bgRepeat="no-repeat" >
        {/* Second child */}
        
        
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  width="100%"   bgImage="url('/images/finalGallary3.png')" bgSize="cover" bgRepeat="no-repeat">
        {/* Third child */}
        
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  borderRadius="24px"  width="100%"  >
        <Flex justifyContent="center" alignItems="center" h="100%" width="100%" flexDirection="column" >
        <h3 className="headinggallery">GALLERY OF OUR TOURS</h3>
        <h1 className="headinggallerytwo">JOURNEY</h1>
        </Flex>
        {/* Fourth child */}
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  h={["0px","0px","250px","400px"]}  width="100%"   bgImage="url('/images/finalGallary5.png')" bgSize="cover" bgRepeat="no-repeat" >
        {/* Fifth child */}
       

      </GridItem>
      <GridItem rowSpan={1} colSpan={2}  h={["0px","0px","250px","500px"]}  width="100%"  bgImage="url('/images/finalGallary6.png')" bgSize="cover" bgRepeat="no-repeat" >
        {/* Sixth child */}

      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  width="100%"   bgImage="url('/images/finalGallary7.png')" bgSize="cover" bgRepeat="no-repeat" >
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
    </Box>
    
   
    </>
  );
};
export default Gallery;
